import { Asset, LoadingIndicator, Modal, OnboardingSlider } from './';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { useContext, useEffect, useMemo, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Keyboard } from "swiper";
import Queue from "queue-promise";
import Ratio from 'react-ratio/lib/Ratio';
import { Howl } from 'howler';
import originalFetch from 'node-fetch';
import Web3 from 'web3';

import { ApplicationContext } from '../state/store';
import { ERC1155 } from '../abis';
import slidesArray from '../onboardingSlides';
import { networkRpcUrls } from '../constants';
import { extractAnimationFromMetadata, extractDescriptionFromMetadata, extractImageFromMetadata, extractTitleFromMetadata, extractTraitsFromMetadata, sanitizeTokenUriForId } from '../utils/metadataUtils';

const fetch = require('fetch-retry')(originalFetch, {
  retries: 100,
  retryDelay: 0
});

SwiperCore.use([EffectCoverflow, Keyboard]);

const Page = React.forwardRef(({ title, children, number }, ref) => {
  return (
    <div className="page" ref={ref}>
      {children}
    </div>
  );
});

const startCollectAudio = new Audio("/audios/start.ogg")

const Album = ({ album, albumId }) => {
  const [albumAssets, setAlbumAssets] = useState([]);
  const [ownedTokens, setOwnedTokens] = useState({});
  const [metadataMap, setMetadataMap] = useState({});
  const [supplyMap, setSupplyMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const { currentAddress, setIsTourOpen } = useContext(ApplicationContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [onboardingDone, setOnboardingDone] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isPreviewMode, setPreviewMode] = useState(true);
  const [wantToExitPreviewMode, setWantToExitPreviewMode] = useState(false);
  const [dappHeightOverflow, setDappHeightOverflow] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenHandle = useFullScreenHandle();
  const [howl, setHowl] = useState(null);
  const timerID = useRef();
  const assetCheckRef = useRef(new Queue({
    concurrent: 1,
    interval: 5000
  }));

  const openAssetInfoModal = () => {
    // Hack to show modal on full screen mode
    const fullScreenContainerElement = document.getElementById('fullscreen-container');
    const div = document.createElement('div');
    div.setAttribute("id", "headlessui-portal-root");
    fullScreenContainerElement.appendChild(div);
    setModalOpen(true);
  };

  useEffect(async () => {
    if (currentAddress) {
      setWalletConnected(true);
      if (wantToExitPreviewMode) {
        setPreviewMode(false);
        setWantToExitPreviewMode(false);
      }
    } else {
      setWalletConnected(false);
    }
  }, [currentAddress]);

  useEffect(async () => {
    if (album?.pages?.length) {
      if (walletConnected) {
        await checkAssets();
      } else {
        setOwnedTokens({});
      }
    }
  }, [walletConnected, album, isPreviewMode]);

  useEffect(async () => {
    if (album && album.pages?.length) {
      setLoading(true);

      let tokenIds = [];
      const web3 = new Web3(networkRpcUrls[album.network]);
      const assets = album.pages.map(page => page.assets?.rows?.reduce((assets, total) => [...total, ...assets], [])).reduce((assets, total) => [...total, ...assets], []);
      setAlbumAssets(assets);

      const metadataQueue = new Queue({
        concurrent: 100,
        interval: 1
      });

      for (const asset of assets.reverse()) {
        tokenIds.push(asset.tokenId);

        if (asset.address && asset.tokenId) {
          try {
            // TODO: Add support for ERC-721 contracts
            const contract = await new web3.eth.Contract(ERC1155, asset.address)
            const tokenId = asset.tokenIdReplaceInHex ? hexNumber(asset.tokenId, 64) : asset.tokenId;

            if (asset.isNft) {
              let totalSupply;
              try {
                totalSupply = await contract.methods.totalSupply(tokenId).call();
              } catch (e) {
                console.warn(e);
              }
              setSupplyMap(previousValue => { return { ...previousValue, [asset.tokenId]: totalSupply ?? null }});
            }

            const tokenUri = await contract.methods.uri(asset.tokenId).call();
            const sanitizedTokenUri = sanitizeTokenUriForId(tokenUri, tokenId);

            metadataQueue.add(async () => {
              const response = await fetch(sanitizedTokenUri, {
                retryOn: [408, 429, 504]
              });
              if (metadataMap[asset.tokenId] === undefined) {
                const metadata = await response.json();
                setMetadataMap(previousValue => ({ ...previousValue, [asset.tokenId]: previousValue[asset.tokenId] || metadata }));  
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }

      setLoading(false);
    }
  }, [album]);

  const getOwnedTokens = async () => {
    let ownedTokenIds = [];

    if (albumAssets.length) {
      const web3 = new Web3(networkRpcUrls[album.network]);
  
      for (const asset of albumAssets) {
        if (!currentAddress) {
          ownedTokenIds = [];
          break;
        }
        if (asset.address && asset.tokenId) {
          try {
            const contract = await new web3.eth.Contract(ERC1155, asset.address);
            if (asset.isNft) {
              const balance = await contract.methods.balanceOf(currentAddress, asset.tokenId).call();
              if (balance > 0) {
                ownedTokenIds.push(asset.tokenId);
              }
            }
          } catch (e) {
            console.warn(e);
          }
        }
      }
    }

    return ownedTokenIds;
  };

  const checkAssets = async () => {
    let ownedTokenIds = await getOwnedTokens();
    setOwnedTokens({ [currentAddress]: ownedTokenIds});
  };

  useEffect(() => {
    if (!isPreviewMode) {
      startCollectAudio.play();
    }
  }, [isPreviewMode]);

  useEffect(async () => {
    if (album) {
      if (album?.backgroundSound) {
        setHowl(new Howl({
          src: [album?.backgroundSound == "default" ? "/audios/loop1.wav" : album?.backgroundSound],
          volume: 0.1,
          loop: true,
          interrupt: true
        }))
      }
      setLoading(false);
    }
  }, [album, currentAddress, isPreviewMode]);

  useEffect(() => {
    const onboardingDoneSetting = localStorage.getItem('onboardingDone');

    if (onboardingDone === undefined && !onboardingDoneSetting && !modalOpen) {
      setOnboardingDone(false);
      setModalOpen(true);
    } else {
      setOnboardingDone(true);
    }

    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsSmallScreen(false);
      } else {
        setIsSmallScreen(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    assetCheckRef.current.stop();
    assetCheckRef.current.clear();
    assetCheckRef.current = new Queue({
      concurrent: 1,
      interval: 5000
    });
    timerID.current = setInterval(() => assetCheckRef.current.enqueue(() => checkAssets()), 5000);
    return () => clearInterval(timerID.current);
  }, [currentAddress, isPreviewMode]);

  // Helper functions
  const handleOnboardingEnd = () => {
    const onboardingDone = localStorage.setItem('onboardingDone', true);
    setOnboardingDone(true);
    setModalOpen(false);
  }

  const slides = useMemo(() => {
    if (!album) return [];

    const pages = album?.pages?.map((page, index) => (
      <Page>
        {page.backgroundImage && <img src={page.backgroundImage} style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} />}
        <div>
          {album && page.assets?.rows?.map((rows, index) => (
            <div className="flex" key={`row-container-${index}`}>
              {rows.map((rowAsset, index) => {
                const isOwned = (ownedTokens[currentAddress] || []).includes(rowAsset?.tokenId);
                const assetMetadata = metadataMap ? metadataMap[rowAsset?.tokenId] : null;
                const imageUrl = assetMetadata ? extractImageFromMetadata(assetMetadata) : null;
                const animationUrl = assetMetadata ? extractAnimationFromMetadata(assetMetadata) : null;
                const traits = assetMetadata ? extractTraitsFromMetadata(assetMetadata) : null;
                const totalSupply = supplyMap ? supplyMap[rowAsset?.tokenId] : null;
                const title = assetMetadata ? extractTitleFromMetadata(assetMetadata) : '';
                const description = assetMetadata ? extractDescriptionFromMetadata(assetMetadata) : '';
                return (
                  <Asset
                    key={`asset-${index}`}
                    size={rowAsset?.size}
                    image={isOwned || isPreviewMode ? imageUrl : null}
                    backgroundImage={imageUrl}
                    tokenId={rowAsset?.tokenId}
                    addressId={rowAsset?.address}
                    padding={rowAsset?.padding}
                    walletConnected={walletConnected}
                    isNFT={rowAsset?.isNft}
                    sizeMultiplier={album?.sizeMultiplier}
                    type={rowAsset?.type}
                    rounded={rowAsset?.rounded}
                    borderColor={rowAsset?.borderColor}
                    resource={rowAsset?.resource}
                    widthPercentage={rowAsset?.size?.width * 100 / album?.width}
                    stickerBackgroundImage={rowAsset?.backgroundImage}
                    title={title}
                    artist={rowAsset?.artist}
                    color={rowAsset?.color}
                    audioUrl={animationUrl}
                    traits={traits}
                    totalSupply={totalSupply}
                    description={description}
                    isLoading={assetMetadata === undefined}
                    audioUrl={rowAsset?.resource || animationUrl}
                    cover={imageUrl}
                    isOwned={isOwned}
                    setModalOpen={openAssetInfoModal}
                    setSelectedAsset={setSelectedAsset}
                    asset={rowAsset || null}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </Page>
    ));

    const cover = (
      <Ratio
        style={{ width: "100%" }}
        className={`object-cover`}
        ratio={album?.width / album?.height}>
        <img src={album?.coverUrl} style={{ height: "100%" }} />
      </Ratio>
    );

    const back = (
      <Ratio
        style={{ width: "100%" }}
        className={`object-cover`}
        ratio={album?.width / album?.height}>
        <img src={album?.backUrl} style={{ height: "100%" }} />
      </Ratio>
    );

    return [...(album?.coverUrl ? [cover] : []), ...(pages || []), ...(album?.backUrl ? [back] : [])];
  }, [album, currentAddress, metadataMap, ownedTokens, isPreviewMode, isFullScreen]);

  const checkDappOverflow = () => {
    setTimeout(() => {
      const height = document.getElementById('dapp-container').clientHeight;
  
      if (height > window.outerHeight) {
        setDappHeightOverflow(true);
      }
    }, 100)
  }

  const toggleIsFullScreen = (state) => {
    setIsFullScreen(state);
    if (!album?.backgroundSound) {
      return;
    }
    if (state) {
      howl?.play();
      howl?.fade(0, 0.05, 1000);
    } else {
      howl?.fade(0.05, 0, 1000);
      setTimeout(() => {
        howl?.stop();
      }, 1000);
    }
  };

  const toggleFullScreen = () => {
    if (loading) return;
    
    if (!isFullScreen) {
      fullScreenHandle.enter();
      checkDappOverflow();
    } else {
      fullScreenHandle.exit();
    }
  }

  return (
    <div>
      {loading ? <LoadingIndicator /> : (
        <>
          {selectedAsset &&
            <Modal
              open={modalOpen}
              setOpen={setModalOpen}
              selectedAsset={selectedAsset}
              okButtonText="Get NFT!"
              cancelButtonText="Cancel"
              network={album?.network}
            />
          }
          {!onboardingDone && !selectedAsset &&
            <Modal
              open={modalOpen}
              setOpen={setModalOpen}
              showFooter={false}
              isOnboarding
              handleOnboardingEnd={handleOnboardingEnd}
            >
              <OnboardingSlider
                slidesArray={slidesArray}
                setOpen={setModalOpen}
                handleOnboardingEnd={handleOnboardingEnd}
              />
            </Modal>
          }
          <div style={{ marginTop: 72 }} />
          <section className="pt-0 pb-0 w-full dark:bg-coolGray-800 dark:text-coolGray-50 mx-auto">
            <FullScreen handle={fullScreenHandle} onChange={(state) => toggleIsFullScreen(state)}>
              {isPreviewMode && onboardingDone && (
                <div className="transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500" style={{ zIndex: 999999 }}>
                  <div className="fade-animation-loop bg-opacity-0 max-w-screen-xl mx-auto mx-2 sm:mx-4">
                    <div className="float-animation-loop p-2 rounded-lg bg-red-600 shadow-lg sm:p-3 sm:m-5 mx-5">
                      <div className="flex items-center justify-between flex-wrap">
                        <div className="flex-1 flex items-center">
                          <img className="h-7 ml-1" src="/icons/silence.png" alt="" />
                          <p className="ml-2 font-medium text-white">
                            <span className="lg:hidden sm:inline">
                              <strong className="text-white font-semibold mr-1">Sshhh! — You are in preview mode.</strong>
                              <span className="text-gray-200">That means you now see the complete experience, but you are <strong>not</strong> the owner of the NFTs.</span>
                            </span>
                            <span className="hidden lg:inline text-gray-400">
                              <strong className="text-white font-semibold mr-1">Sshhh! — You are in preview mode.</strong>
                              <span className="text-gray-200 xl:hidden">That means you now see the complete experience, but you are <strong>not</strong> the owner of the NFTs.</span>
                              <span className="text-gray-200 hidden xl:inline">That means you now see the complete experience, but you are <strong>not</strong> the owner of the NFTs.</span>
                            </span>
                          </p>
                        </div>
                        <div className="order-3 mt-2 w-full sm:order-2 sm:mt-0 sm:w-auto">
                          <div className="rounded-md shadow-sm" onClick={() => {
                            if (walletConnected) { 
                              setPreviewMode(false);
                            } else {
                              setIsTourOpen(isTourOpen => !isTourOpen);
                              setWantToExitPreviewMode(true)
                              if (isFullScreen) {
                                toggleFullScreen();
                              }
                            }
                          }}>
                            <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">
                              <strong>Start Collecting Now 👾</strong>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div id="fullscreen-container" onDoubleClick={() => toggleFullScreen()} style={{ display: album?.type === 'mural' ? "auto" : "flex", overflow: "scroll", alignItems: dappHeightOverflow ? "flex-start" : "center" }} className={(isFullScreen ? 'h-full ' : '') + (album?.type === 'mural' ? 'grid grid-cols-19 overflow-scroll mx-auto' : 'w-full')}>
                {album?.type !== 'mural' ? (
                  slides?.length > 1 ? (
                    <div id="dapp-container" style={{ width: "100%" }}>
                      <Swiper
                        spaceBetween={0}
                        slidesPerView={isSmallScreen ? 1 : 2.3}
                        centeredSlides
                        effect={'coverflow'}
                        autoHeight
                        shortSwipes={false}
                        coverflowEffect={{
                          rotate: 40,
                          stretch: 30,
                          depth: 300,
                          modifier: 1,
                          slideShadows: true
                        }}
                        slideToClickedSlide={true}
                        keyboard={{
                          enabled: true,
                          onlyInViewport: false
                        }}
                      >
                        {slides?.map((slide, idx) => (
                          <SwiperSlide>
                            {slide}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : <LoadingIndicator />
                ) : (
                  <div
                    id="dapp-container"
                    style={{
                      minWidth: album.width * album.sizeMultiplier / 2,
                      minHeight: album.height * album.sizeMultiplier / 2,
                    }}
                  >
                    {album.pages.map((page, index) => (
                      <div key={`page-${index}`}>
                        {page.backgroundImage && <img src={page.backgroundImage} style={{ position: 'absolute', left: 0, top: 0 }} />}
                        <div style={{ flex: 1 }}>
                          {album && page.assets?.rows?.map((rows, index) => (
                            <div className="flex" key={`row-container-${index}`}>
                              {rows.map((rowAsset, index) => {
                                const isOwned = (ownedTokens[currentAddress] || []).includes(rowAsset?.tokenId);
                                const assetMetadata = metadataMap ? metadataMap[rowAsset?.tokenId] : null;
                                const imageUrl = assetMetadata ? extractImageFromMetadata(assetMetadata) : null;
                                const animationUrl = assetMetadata ? extractAnimationFromMetadata(assetMetadata) : null;
                                const traits = assetMetadata ? extractTraitsFromMetadata(assetMetadata) : null;
                                const totalSupply = supplyMap ? supplyMap[rowAsset?.tokenId] : null;
                                const title = assetMetadata ? extractTitleFromMetadata(assetMetadata) : '';
                                const description = assetMetadata ? extractDescriptionFromMetadata(assetMetadata) : '';
                                return (
                                  <Asset
                                    key={`asset-${index}`}
                                    size={rowAsset?.size}
                                    image={isOwned || isPreviewMode ? imageUrl : null}
                                    backgroundImage={imageUrl}
                                    tokenId={rowAsset?.tokenId}
                                    addressId={rowAsset?.address}
                                    padding={rowAsset?.padding}
                                    walletConnected={walletConnected}
                                    isNFT={rowAsset?.isNft}
                                    sizeMultiplier={album?.sizeMultiplier}
                                    type={rowAsset?.type}
                                    rounded={rowAsset?.rounded}
                                    borderColor={rowAsset?.borderColor}
                                    resource={rowAsset?.resource}
                                    widthPercentage={rowAsset?.size?.width * 100 / album?.width}
                                    stickerBackgroundImage={rowAsset?.backgroundImage}
                                    title={title}
                                    artist={rowAsset?.artist}
                                    color={rowAsset?.color}
                                    audioUrl={animationUrl}
                                    traits={traits}
                                    totalSupply={totalSupply}
                                    description={description}
                                    isLoading={assetMetadata === undefined}
                                    audioUrl={rowAsset?.resource || animationUrl}
                                    cover={imageUrl}
                                    isOwned={isOwned}
                                    setModalOpen={openAssetInfoModal}
                                    setSelectedAsset={setSelectedAsset}
                                    asset={rowAsset || null}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {isFullScreen && album?.backgroundVideo && (
                <video autoPlay muted loop id="myVideo" style={{ position: 'absolute', left: 0, top: 0, minHeight: '100%', minWidth: '100%', objectFit: 'cover', opacity: 0.2, zIndex: -10 }}>
                  <source src={album?.backgroundVideo == "default" ? "/videos/neontrack.mp4" : album?.backgroundVideo} type="video/mp4" />
                </video>
              )}
            </FullScreen>
          </section>
        </>
      )}
    </div>
  );
}

export default Album;
