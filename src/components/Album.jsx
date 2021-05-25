import { AlbumHeader, Asset, LoadingIndicator } from './';
import React, { useContext, useEffect, useState } from 'react';
import { getAssets, getAssetsInfo } from '../services/assetsService';

import { ApplicationContext } from '../state/store';
import HTMLFlipBook from "react-pageflip";
import { getAlbum } from '../services/collectionsService';

const PageCover = React.forwardRef(({ title, subtitle, children }, ref) => {
  return (
    <div className="page page-cover" ref={ref}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
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
    const album = await getAlbum(props.albumId);
    setAlbum(album);

    if (album.assets?.length) {
      const contractAddress = album.assets[0].address;
      const tokenIds = album.assets.map(asset => asset.token_id);
      const assetsInfo = await getAssetsInfo(contractAddress, tokenIds);
      setAlbumAssets(assetsInfo?.assets);
    }

    if (!currentAddress) {
      setWalletAssets([]);
    }

    setLoading(false);
  }, [currentAddress]);

  useEffect(async () => {
    // Get NFTs
    if (album && currentAddress) {
      const walletAssets = await getAssets(currentAddress);
      setWalletAssets(walletAssets);
      setWalletConnected(true);
    }
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
                  width={700}
                  height={800}
                  size="stretch"
                  minWidth={465}
                  maxWidth={1150}
                  minHeight={565}
                  maxHeight={1250}
                  maxShadowOpacity={0.5}
                  mobileScrollSupport={true}
                  className="comic"
                >
                  <PageCover
                    title="Nakamoto's Adventures"
                    subtitle="Vol. 1" />
                  <PageStructured
                    title="Nakamoto's Adventures"
                    footer="Cromy in collaboration with DC Comics">
                    <h4><b>Directed by: </b>Santos de las Carreras</h4>
                    <h4><b>Story by: </b>Santos de las Carreras</h4>
                    <h4><b>Illustrated by: </b>Gabriel Picolo</h4>
                  </PageStructured>
                  {[...Array(5)].map((value, index) => (
                    <Page title="Nakamoto's Adventures" number={index}>
                      <div className={` grid grid-cols-12 grid-rows-6 ${album.gap || 'gap-4'}`}>
                        {album && album.assets.map((albumAsset, index) => {
                          const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === albumAsset.token_id && walletAsset.asset_contract.address === albumAsset.address);
                          const asset = albumAssets?.find((asset) => asset.token_id === albumAsset.token_id);
                          return (
                            <Asset
                              key={index}
                              size={albumAsset.size}
                              image={ownedAsset ? ownedAsset.image_url : null}
                              backgroundImage={asset?.image_url}
                              tokenId={albumAsset.token_id}
                              addressId={albumAsset.address}
                              padding={album.padding}
                              type={album.type}
                              aspectRatio={albumAsset.aspect_ratio}
                              walletConnected={walletConnected}
                            />
                          );
                        })}
                      </div>
                    </Page>
                  ))}
                <PageCover subtitle="To be continued..." />
              </HTMLFlipBook>
              </div>
            </section>
          </>
        )}
      </div>
  );
}

export default Album;
