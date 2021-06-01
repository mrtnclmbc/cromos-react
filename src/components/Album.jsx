import { AlbumHeader, Asset, LoadingIndicator } from './';
import React, { useContext, useEffect, useState } from 'react';
import { getAssets, getAssetsInfo } from '../services/assetsService';

import { ApplicationContext } from '../state/store';
import HTMLFlipBook from "react-pageflip";
import { getAlbum } from '../services/collectionsService';

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
  }, [album]);

  return (
    <div className="min-h-screen">
      {loading ? <LoadingIndicator /> :
        (
          <>
            <AlbumHeader
              title={album.title}
              description={album.description}
            />
            <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 container mx-auto">
              <div className="flex w-full flex-wrap pb-4">
                <h1 className="sm:text-xl text-xl font-normal title-font text-gray-900 lg:mb-0">
                  Tu Álbum <span className="font-bold">{currentAddress}</span>
                </h1>
              </div>
              <div className={`container grid grid-cols-19`}>
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
                >
                  <PageCover>
                    <img src={album.cover.image} className="page-image" />
                  </PageCover>
                  {album.pages.map((page, index) => (
                    <Page number={index}>
                      <div style={{ flex: 1 }}>
                        {album && page.assets?.columns?.map((columns, index) => (
                          <div className="flex">
                            {columns.map((columnAsset, index) => {
                              const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === columnAsset.token_id && walletAsset.asset_contract.address === columnAsset.address);
                              const asset = albumAssets?.find((asset) => asset.token_id === columnAsset.token_id);
                              return (
                                <Asset
                                  key={index}
                                  columnNumber={columns.length}
                                  size={columnAsset.size}
                                  image={ownedAsset ? ownedAsset.image_url : null}
                                  backgroundImage={asset?.image_url}
                                  tokenId={columnAsset.token_id}
                                  addressId={columnAsset.address}
                                  padding={album.padding}
                                  type={album.type}
                                  walletConnected={walletConnected}
                                  isNFT={columnAsset.isNFT}
                                  sizeMultiplier={album.sizeMultiplier}
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
              </div>
            </section>
          </>
        )}
      </div>
  );
}

export default Album;
