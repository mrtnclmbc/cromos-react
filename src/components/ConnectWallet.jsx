import React, { useEffect, useState } from 'react';
import Blockies from 'react-blockies';

import { useWeb3Modal } from '../hooks/web3';

import { truncateString } from '../helpers/formatHelper';

const ConnectWallet = () => {
  const [signerAddress, setSignerAddress] = useState('');
  // const [isWaiting, setWaiting] = useState(false)
  // const [isSent, setSent] = useState(false)
  // const [walletNotDetected, setWalletNotDetected] = useState(false)

  const { connectWallet, disconnectWallet, provider, error } = useWeb3Modal();

  useEffect(() => {
    const getAddress = async () => {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setSignerAddress(address);
    };
    if (provider) getAddress();
    else setSignerAddress('');
  }, [provider]);

  const handleClickConnect = async () => {
    await connectWallet();
  };

  const handleClickAddress = () => {
    disconnectWallet();
  };

  return (
    <button
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
      onClick={signerAddress ? handleClickAddress : handleClickConnect}
    >
      <Blockies
        className="h-8 w-auto mr-2"
        seed={signerAddress.toLowerCase()}
        size={8}
        scale={3}
      />
      <div>
        {signerAddress ? truncateString(signerAddress) : 'Connect Wallet'}
      </div>
    </button>
  );
};

export default ConnectWallet;
