import { AlbumHeader, Asset, AudioPlayer, LoadingIndicator, Modal, OnboardingSlider } from './';
import React, { useContext, useEffect, useState } from 'react';
import { getAssets, getAssetsInfo } from '../services/assetsService';

import { ApplicationContext } from '../state/store';
import HTMLFlipBook from "react-pageflip";
import { getAlbum } from '../services/collectionsService';
import slidesArray from '../onboardingSlides';

const PageCover = React.forwardRef(({ children }, ref) => {
  return (
    <div className="page page-cover" ref={ref}>
      {children}
    </div>
  );
});

const PageStructured = React.forwardRef(({ title, footer, children }, ref) => {
  return (
    <div className="page page-cover" ref={ref}>
        <div className="page-header">{title}</div>
        <div className="cover-content">{children}</div>
        <div className="page-footer">{footer}</div>
    </div>
  );
});

const Page = React.forwardRef(({ title, children, number }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-container">
        <h2 className={`page-header${(number + 1) % 2 === 0 ? ' right' : ''}`}>{title}</h2>
        <div className="page-content">
          {children}
        </div>
        <h2 className="page-footer">{number + 1}</h2>
      </div>
    </div>
  );
});

const Album = (props) => {
  const [album, setAlbum] = useState(null);
  const [albumAssets, setAlbumAssets] = useState([]);
  const [walletAssets, setWalletAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const { currentAddress, setCurrentAddress } = useContext(ApplicationContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [onboardingDone, setOnboardingDone] = useState();

  // Hooks
  useEffect(async () => {
    // Get album
    if(props.albumId) {
      const album = await getAlbum(props.albumId);
      setAlbum(album);
    }

    if (album && album.pages?.length) {
      const contractAddress = album.address;
      let tokenIds = [];
      album.pages.map(page => page.assets?.columns?.reduce((assets, total) => [...total, ...assets], []).map(asset => tokenIds.push(asset.token_id)));
      const assetsInfo = await getAssetsInfo(contractAddress, tokenIds);
      setAlbumAssets(assetsInfo?.assets);
    }

    if (!currentAddress) {
      setWalletAssets([]);
    }
  }, [currentAddress, album, props.albumId]);

  useEffect(async () => {
    // Get NFTs
    if (album && currentAddress) {
      const walletAssets = await getAssets(currentAddress);
      setWalletAssets(walletAssets);
      setWalletConnected(true);
    }

    if(album) { setLoading(false); }
  }, [album, currentAddress]);

  useEffect(() => {
    const onboardingDoneSetting = localStorage.getItem('onboardingDone');
    
    if (onboardingDone === undefined && !onboardingDoneSetting && !modalOpen) {
      setOnboardingDone(onboardingDoneSetting);
      setModalOpen(true);
    }
  }, []);

  // Helper functions
  const handleOnboardingEnd = () => {
    const onboardingDone = localStorage.setItem('onboardingDone', 1);
    setOnboardingDone(onboardingDone);
    setModalOpen(false);
  }

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
            <AlbumHeader
              title={album.title}
              description={album.description}
            />
            <section className="pt-0 pb-0 dark:bg-coolGray-800 dark:text-coolGray-50 container mx-auto">
              <div className={`container grid grid-cols-19 ${album.type === 'mural' && 'overflow-scroll'}`}>
                {album.type !== 'mural' ? (
                  <HTMLFlipBook
                    width={album.width * album.sizeMultiplier}
                    height={album.height * album.sizeMultiplier}
                    minWidth={album.width * album.sizeMultiplier / 2}
                    minHeight={album.height * album.sizeMultiplier / 2}
                    size="stretch"
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    className="comic justify-self-center"
                    showCover={true}
                    clickEventForward={false}
                    disableFlipByClick={true}
                  >
                    <PageCover>
                      <img src={album.cover.image} className="page-image" />
                    </PageCover>
                    {album.pages.map((page, index) => (
                      <Page number={index} key={`page-${index}`}>
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
                                    image={ownedAsset ? ownedAsset.image_url : null}
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
                    ))}
                  <PageCover>
                    <img src={album.back.image} className="page-image" />
                  </PageCover>
                </HTMLFlipBook>
              ) : (
                <div
                  style={{
                    minWidth: album.width * album.sizeMultiplier / 2,
                    minHeight: album.height * album.sizeMultiplier / 2,
                  }}
                >
                  {album.pages.map((page, index) => (
                    <div number={index} key={`page-${index}`}>
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
                                  image={ownedAsset ? ownedAsset.image_url : null}
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
