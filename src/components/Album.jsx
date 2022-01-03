import { Asset, LoadingIndicator, Modal, OnboardingSlider } from './';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Keyboard } from "swiper";
import { getAssets, getAssetsInfo } from '../services/assetsService';

import { ApplicationContext } from '../state/store';
import Ratio from 'react-ratio/lib/Ratio';
import slidesArray from '../onboardingSlides';
import { Howl } from 'howler';

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
  const [walletAssets, setWalletAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const { currentAddress, setIsTourOpen } = useContext(ApplicationContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [onboardingDone, setOnboardingDone] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isPreviewMode, setPreviewMode] = useState(true);
  const [wantToExitPreviewMode, setWantToExitPreviewMode] = useState(false);
  const [assetsCheckerIntervalId, setAssetsCheckerIntervalId] = useState(null);
  const [dappHeightOverflow, setDappHeightOverflow] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenHandle = useFullScreenHandle();
  const [howl, setHowl] = useState(null);

  const openAssetInfoModal = () => {
    // Hack to show modal on full screen mode
    const fullScreenContainerElement = document.getElementById('fullscreen-container');
    const div = document.createElement('div');
    div.setAttribute("id", "headlessui-portal-root");
    fullScreenContainerElement.appendChild(div);
    setModalOpen(true);
  };

  // Hooks
  useEffect(async () => {
    if (album && album.pages?.length) {
      let contractAddress;
      let tokenIds = [];
      album.pages
        .map(page => page.assets?.rows?.reduce((assets, total) => [...total, ...assets], [])
        .map(asset => {
          if (!contractAddress && asset.address?.length) {
            contractAddress = asset.address;
          }
          tokenIds.push(asset.tokenId);
        }));
      const assetsInfo = await getAssetsInfo(contractAddress, tokenIds.filter(id => id !== undefined));
      setAlbumAssets(assetsInfo?.assets);
    }

    if (!currentAddress) {
      setWalletAssets([]);
      setWalletConnected(false);
      setPreviewMode(true);
    }

    if (currentAddress) {
      setWalletConnected(true);
      if (wantToExitPreviewMode) {
        setPreviewMode(false);
        setWantToExitPreviewMode(false);
      }  
    }
  }, [currentAddress, album, albumId]);

  useEffect(() => {
    if (!isPreviewMode) {
      startCollectAudio.play();
    }
  }, [isPreviewMode]);

  useEffect(async () => {
    // Get NFTs
    if (album && currentAddress) {
      const checkAssets = async () => {
        const walletAssets = await getAssets(currentAddress);
        setWalletAssets(walletAssets);
      };
      const intervalId = setInterval(checkAssets, 30000);
      setAssetsCheckerIntervalId(intervalId);
      await checkAssets();
      setWalletConnected(true);
    }

    if (!currentAddress && assetsCheckerIntervalId) {
      clearInterval(assetsCheckerIntervalId);
      setAssetsCheckerIntervalId(null)
    }

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
  }, [album, currentAddress]);

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

  // Helper functions
  const handleOnboardingEnd = () => {
    const onboardingDone = localStorage.setItem('onboardingDone', true);
    setOnboardingDone(true);
    setModalOpen(false);
  }

  const slides = useMemo(() => {
    if (!albumAssets?.length || !album || !walletAssets) return [];

    const pages = album?.pages?.map((page, index) => (
      <Page>
        {page.backgroundImage && <img src={page.backgroundImage} style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} />}
        <div>
          {album && page.assets?.rows?.map((rows, index) => (
            <div className="flex" key={`row-container-${index}`}>
              {rows.map((rowAsset, index) => {
              const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === rowAsset?.tokenId && walletAsset.asset_contract.address === rowAsset?.address);
              const asset = albumAssets?.find((asset) => asset.token_id === rowAsset?.tokenId);
              return (
                <Asset
                  key={`asset-${index}`}
                  size={rowAsset?.size}
                  image={ownedAsset || isPreviewMode ? asset?.image_url : null}
                  backgroundImage={asset?.image_url}
                  tokenId={rowAsset?.token_id}
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
                  title={rowAsset?.title}
                  artist={rowAsset?.artist}
                  color={rowAsset?.color}
                  audioUrl={asset?.animation_url || ownedAsset?.animation_url}
                  cover={asset?.image_url || ownedAsset?.image_url}
                  isOwned={ownedAsset ? ownedAsset : false}
                  setModalOpen={openAssetInfoModal}
                  setSelectedAsset={setSelectedAsset}
                  asset={asset || null}
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
  }, [albumAssets, isPreviewMode, walletAssets, isFullScreen]);

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
                                const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === rowAsset?.tokenId && walletAsset.asset_contract.address === rowAsset?.address);
                                const asset = albumAssets?.find((asset) => asset.token_id === rowAsset?.tokenId);
                                return (
                                  <Asset
                                    key={`asset-${index}`}
                                    size={rowAsset?.size}
                                    image={ownedAsset || isPreviewMode ? asset?.image_url : null}
                                    backgroundImage={asset?.image_url}
                                    tokenId={rowAsset?.tokenId}
                                    addressId={rowAsset?.address}
                                    padding={rowAsset?.padding}
                                    walletConnected={walletConnected}
                                    isNFT={rowAsset?.isNft}
                                    sizeMultiplier={album.sizeMultiplier}
                                    type={rowAsset?.type}
                                    rounded={rowAsset?.rounded}
                                    borderColor={rowAsset?.boderColor}
                                    resource={rowAsset?.resource}
                                    widthPercentage={rowAsset?.size?.width * 100 / album.width}
                                    stickerBackgroundImage={rowAsset?.backgroundImage}
                                    title={rowAsset?.title}
                                    artist={rowAsset?.artist}
                                    color={rowAsset?.color}
                                    audioUrl={asset?.animation_url || ownedAsset?.animation_url}
                                    cover={asset?.image_url || ownedAsset?.image_url}
                                    showCover={rowAsset?.showCover}
                                    coverSize={rowAsset?.coverSize}
                                    backgroundType={rowAsset?.backgroundType}
                                    isOwned={ownedAsset ? ownedAsset : false}
                                    setModalOpen={openAssetInfoModal}
                                    setSelectedAsset={setSelectedAsset}
                                    asset={asset || null}
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
