import React, { useContext, useEffect, useState } from 'react';

import { ApplicationContext } from '../state/store';
import Blockies from 'react-blockies';
import { truncateString } from '../helpers/formatHelper';
import { useWeb3Modal } from '../hooks/web3';

const ConnectWallet = () => {
  // const [isWaiting, setWaiting] = useState(false)
  // const [isSent, setSent] = useState(false)
  // const [walletNotDetected, setWalletNotDetected] = useState(false)

  const { connectWallet, disconnectWallet, provider, error } = useWeb3Modal();
  const { currentAddress, setCurrentAddress, setIsTourOpen } = useContext(ApplicationContext);

  useEffect(() => {
    const getAddress = async () => {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setCurrentAddress(address);
    };
    if (provider) {
      getAddress();
    } else {
      setCurrentAddress(null);
    }
  }, [provider]);

  const handleClickConnect = async () => {
    setIsTourOpen(false);
    await connectWallet();
  };

  const handleClickAddress = () => {
    disconnectWallet();
  };

  return (
    <button
      className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
      onClick={currentAddress ? handleClickAddress : handleClickConnect}
      style={{ minWidth: 160 }}
    >
      <Blockies
        className="h-8 w-auto mr-2"
        seed={currentAddress?.toLowerCase()}
        size={8}
        scale={3}
      />
      <div>
        {currentAddress ? truncateString(currentAddress) : 'Connect Wallet'}
      </div>
    </button>
  );
};

export default ConnectWallet;
