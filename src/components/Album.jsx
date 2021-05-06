import { Asset, HeroSection, LoadingIndicator } from './';
import React, { useContext, useEffect, useState } from 'react';

import { ApplicationContext } from '../state/store';
import { getAlbum } from '../services/collectionsService';
import { getAssets } from '../services/assetsService';

const Album = (props) => {
  const [album, setAlbum] = useState(null);
  const [walletAssets, setWalletAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const { currentAddress, setCurrentAddress } = useContext(ApplicationContext);

  useEffect(async () => {
    // Get album
    const album = await getAlbum(2);
    setAlbum(album);

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
            <HeroSection
              title={album.title}
              description={album.description}
            />
            <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 container mx-auto">
              <div className="flex w-full flex-wrap pb-4">
                <h1 className="sm:text-xl text-xl font-normal title-font text-gray-900 lg:mb-0">
                  Tu Álbum <span className="font-bold">{currentAddress}</span>
                </h1>
              </div>
              <div className={`container mx-auto grid grid-cols-12 grid-rows-6 ${album.gap || 'gap-4'}`}>
                {album && album.assets.map((albumAsset, index) => {
                  const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === albumAsset.token_id && walletAsset.asset_contract.address === albumAsset.address);
                  return (
                    <Asset
                      key={index}
                      size={albumAsset.size}
                      image={ownedAsset ? ownedAsset.image_url : null}
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
            </section>
          </>
        )}
      </div>
  );
}

export default Album;
