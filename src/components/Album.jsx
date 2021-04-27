import React, { useEffect, useState } from 'react';
import Asset from './Asset';
import { getAssets } from '../services/assetsService';
import { getAlbum } from '../services/collectionsService';
import { useWeb3Modal } from '../hooks/web3';

const Album = (props) => {
  const [album, setAlbum] = useState(null);
  const [walletAssets, setWalletAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [signerAddress, setSignerAddress] = useState(null);
  const { provider } = useWeb3Modal();

  useEffect(async () => {
    // Get album
    const data = await getAlbum(1);
    setAlbum(data);

    // Get connected wallet address
    if (provider) {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setSignerAddress(address);
    } else setSignerAddress(null);

    // Get NFTS
    if (signerAddress) {
      const walletAssets = await getAssets(signerAddress);
      setWalletAssets(walletAssets);
    }
  }, [provider]);

  return (
    <>
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 container mx-auto">
        <div className="flex w-full flex-wrap pb-4">
          <h1 className="sm:text-xl text-xl font-normal title-font text-gray-900 lg:mb-0">
            Tu Álbum <span className="font-bold">{signerAddress || null}</span><
          /h1>
        </div>
        <div className="container mx-auto grid grid-cols-6 grid-rows-12 gap-4 md:grid-cols-6 min-h-screen">
          {album && album.assets.map((albumAsset, index) => {
            const ownedAsset = walletAssets.find((walletAsset) => walletAsset.token_id === albumAsset.token_id && walletAsset.asset_contract.address === albumAsset.address) || null;
            return (
              <Asset
                key={index}
                size={albumAsset.size}
                image={ownedAsset ? ownedAsset.image_url : null}
                tokenId={albumAsset.token_id}
                addressId={albumAsset.address}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Album;
