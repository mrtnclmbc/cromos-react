import { AlbumHeader, Asset, AudioPlayer, LoadingIndicator, Modal, OnboardingSlider, SectionBanner } from './';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Keyboard } from "swiper";
import { getAssets, getAssetsInfo } from '../services/assetsService';

import { ApplicationContext } from '../state/store';
import Ratio from 'react-ratio/lib/Ratio';
import { getAlbum } from '../services/collectionsService';
import slidesArray from '../onboardingSlides';

SwiperCore.use([EffectCoverflow, Keyboard]);

const Page = React.forwardRef(({ title, children, number }, ref) => {
  return (
    <div className="page" ref={ref}>
      {children}
    </div>
  );
});

const startCollectAudio = new Audio("/audios/start.ogg")

const Album = (props) => {
  const [album, setAlbum] = useState(null);
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

  // Hooks
  useEffect(async () => {
    // Get album
    if(props.albumId) {
      const album = await getAlbum(props.albumId);
      setAlbum(album);
    }

    if (album && album?.pages?.length) {
      const contractAddress = album?.address;
      let tokenIds = [];
      album?.pages.map(page => page.assets?.columns?.reduce((assets, total) => [...total, ...assets], []).map(asset => tokenIds.push(asset.token_id)));
      const assetsInfo = await getAssetsInfo(contractAddress, tokenIds.filter(tokenId => tokenId));
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
  }, [currentAddress, album, props.albumId]);

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

    if(album) { setLoading(false); }
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
          {album && page.assets?.columns?.map((columns, index) => (
            <div className="flex" key={`column-container-${index}`}>
              {columns.map((columnAsset, index) => {
              const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === columnAsset.token_id && walletAsset.asset_contract.address === columnAsset.address);
              const asset = albumAssets?.find((asset) => asset.token_id === columnAsset.token_id);
              return (
                <Asset
                  key={`asset-${index}`}
                  size={columnAsset.size}
                  image={ownedAsset || isPreviewMode ? asset?.image_url : null}
                  backgroundImage={asset?.image_url}
                  tokenId={columnAsset.token_id}
                  addressId={columnAsset.address}
                  padding={columnAsset.padding}
                  walletConnected={walletConnected}
                  isNFT={columnAsset.isNFT}
                  sizeMultiplier={album?.sizeMultiplier}
                  type={columnAsset.type}
                  rounded={columnAsset.rounded}
                  borderColor={columnAsset.borderColor}
                  resource={columnAsset.resource}
                  widthPercentage={columnAsset?.size?.width * 100 / album?.width}
                  stickerBackgroundImage={columnAsset?.backgroundImage}
                  title={columnAsset.title}
                  artist={columnAsset.artist}
                  color={columnAsset.color}
                  audioUrl={asset?.animation_url || ownedAsset?.animation_url}
                  cover={asset?.image_url || ownedAsset?.image_url}
                  isOwned={ownedAsset ? ownedAsset : false}
                  setModalOpen={setModalOpen}
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
        <img src={album?.cover?.image} style={{ height: "100%" }} />
      </Ratio>
    );

    const back = (
      <Ratio
        style={{ width: "100%" }}
        className={`object-cover`}
        ratio={album?.width / album?.height}>
        <img src={album?.back?.image} style={{ height: "100%" }} />
      </Ratio>
    );

    return [...(album?.cover?.image ? [cover] : []), ...(pages || []), ...(album?.back?.image ? [back] : [])];
  }, [albumAssets, isPreviewMode, walletAssets]);

  return (
    <div>
      {loading ? <LoadingIndicator /> :
        (
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
            <SectionBanner
              standalone
              title={album?.title}
              description={album?.description}
            />
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
            <section className="pt-0 pb-0 w-full dark:bg-coolGray-800 dark:text-coolGray-50 mx-auto">
              <div className={album?.type === 'mural' ? 'grid grid-cols-19 overflow-scroll mx-auto' : 'w-full'}>
                {album?.type !== 'mural' ? (
                  slides?.length > 1 ? (
                    <div style={{ width: "100%" }}>
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
                    style={{
                      minWidth: album.width * album.sizeMultiplier / 2,
                      minHeight: album.height * album.sizeMultiplier / 2,
                    }}
                  >
                    {album.pages.map((page, index) => (
                      <div key={`page-${index}`}>
                        {page.backgroundImage && <img src={page.backgroundImage} style={{ position: 'absolute', left: 0, top: 0 }} />}
                        <div style={{ flex: 1 }}>
                          {album && page.assets?.columns?.map((columns, index) => (
                            <div className="flex" key={`column-container-${index}`}>
                              {columns.map((columnAsset, index) => {
                                const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === columnAsset.token_id && walletAsset.asset_contract.address === columnAsset.address);
                                const asset = albumAssets?.find((asset) => asset.token_id === columnAsset.token_id);
                                return (
                                  <Asset
                                    key={`asset-${index}`}
                                    size={columnAsset.size}
                                    image={ownedAsset || isPreviewMode ? asset?.image_url : null}
                                    backgroundImage={asset?.image_url}
                                    tokenId={columnAsset.token_id}
                                    addressId={columnAsset.address}
                                    padding={columnAsset.padding}
                                    walletConnected={walletConnected}
                                    isNFT={columnAsset.isNFT}
                                    sizeMultiplier={album.sizeMultiplier}
                                    type={columnAsset.type}
                                    rounded={columnAsset.rounded}
                                    borderColor={columnAsset.borderColor}
                                    resource={columnAsset.resource}
                                    widthPercentage={columnAsset?.size?.width * 100 / album.width}
                                    stickerBackgroundImage={columnAsset?.backgroundImage}
                                    title={columnAsset.title}
                                    artist={columnAsset.artist}
                                    color={columnAsset.color}
                                    audioUrl={asset?.animation_url || ownedAsset?.animation_url}
                                    cover={asset?.image_url || ownedAsset?.image_url}
                                    showCover={columnAsset.showCover}
                                    coverSize={columnAsset.coverSize}
                                    backgroundType={columnAsset.backgroundType}
                                    isOwned={ownedAsset ? ownedAsset : false}
                                    setModalOpen={setModalOpen}
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
          </section>
        </>
      )}
    </div>
  );
}

export default Album;
