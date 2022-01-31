import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Web3 from 'web3';

import { Header, ImageSlider, LoadingIndicator } from '../components';
import { ApplicationContext } from '../state/store';
import BuyableBoosterPackABI from '../../contracts/abis/BuyableBoosterPack';
import { networkChainIds, networkNames, networkChainIdsHexa, networkRpcUrls } from '../constants';
import detectEthereumProvider from '@metamask/detect-provider'
import { useWeb3Modal } from '../hooks/web3';

const Collectible = ({ collectible }) => {
  const [loading, setLoading] = useState(true);
  const [maxAmount, setMaxAmount] = useState(0);
  const [totalMinted, setTotalMinted] = useState(0);
  const [price, setPrice] = useState(null);
  const [buyLoading, setBuyLoading] = useState(false);
  const [currentChainId, setCurrentChainId] = useState(0);
  const { currentAddress, setIsTourOpen } = useContext(ApplicationContext);
  const { provider, error } = useWeb3Modal();

  useEffect(async () => {
    if (collectible) {
      try {
        await updateCollectibleData();
        const provider = provider ? provider : await detectEthereumProvider();
        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        setCurrentChainId(chainId);
        // if (chainId !== networkChainIds[collectible?.network]) {
        //   await changeNetwork();
        // }
      } catch (e) {
        console.log(e)
      }
      setLoading(false);
      window.app.updateGridPosition();    
    }
  }, [collectible, provider]);

  const updateCollectibleData = async () => {
    await updateMaxAmount();
    await updateTotalMinted();
    await updatePrice();
  }

  const updateTotalMinted = async () => {
    try {
      const web3 = new Web3(networkRpcUrls[collectible?.network]);
      const contract = new web3.eth.Contract(BuyableBoosterPackABI, collectible?.address)  
      const total = await contract.methods.totalSupply().call();
      setTotalMinted(total);  
    } catch (e) {
      console.error(e)
    }
  };

  const updateMaxAmount = async () => {
    try {
      const web3 = new Web3(networkRpcUrls[collectible?.network]);
      const contract = new web3.eth.Contract(BuyableBoosterPackABI, collectible?.address)  
      const maxTokens = await contract.methods.MAX_SUPPLY().call();
      setMaxAmount(maxTokens);
    } catch (e) {
      console.error(e)
    }
  };

  const updatePrice = async () => {
    try {
      const web3 = new Web3(networkRpcUrls[collectible?.network]);
      const contract = new web3.eth.Contract(BuyableBoosterPackABI, collectible?.address)  
      const currentPrice = await contract.methods.CURRENT_PRICE().call();
      setPrice(currentPrice.length > 10 ? Web3.utils.fromWei(currentPrice, 'ether') : currentPrice);
    } catch (e) {
      console.error(e)
    }
  };

  const changeNetwork = async (callback) => {
    try {
      const provider = await detectEthereumProvider();
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkChainIdsHexa[collectible?.network] }],
      });
      setCurrentChainId(networkChainIds[collectible?.network]);
      if (callback) {
        callback();
      }
    } catch (e) {
      if (error.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: networkChainIdsHexa[collectible?.network],
                rpcUrl: networkRpcUrls[collectible?.network],
              },
            ],
          });
          if (callback) {
            callback();
          }
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  }

  const buyCollectible = async () => {
    if (!buyLoading) {
      if (!currentAddress) {
        setIsTourOpen(isTourOpen => !isTourOpen);
      } else {
        if (window.ethereum) {
          try {
            const provider = await detectEthereumProvider();
            const web3 = new Web3(provider);
            const chainId = await web3.eth.getChainId();
            if (chainId === networkChainIds[collectible?.network]) {
              const contract = new web3.eth.Contract(BuyableBoosterPackABI, collectible?.address)  
              const currentPrice = await contract.methods.CURRENT_PRICE().call();
              contract.methods.buyWithETH().send({ from: currentAddress, value: currentPrice })
                .once('sending', async () => {
                  setBuyLoading(true);
                })  
                .on('receipt', async () => {
                  await updateTotalMinted();
                  setBuyLoading(false);
                })
                .on('error', async (error) => {
                  console.log(error)
                  setBuyLoading(false);
                });
            } else {
              await changeNetwork(async () => await buyCollectible());
            }
          } catch (e) {
            console.error(e);
          }
        } else {
          alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        }
      }
    }
  };

  return (
    <>
      {loading ? <LoadingIndicator /> : (
        <div className="content-grid" style={{ paddingTop: 70, paddingLeft: 60, paddingRight: 60, paddingBottom: 30 }}>
        <div className="grid grid-9-3">
          <div className="marketplace-content grid-column">
            <div>
              <ImageSlider images={[collectible?.assetUrl]} title={collectible?.title} />
            </div>

            <div className="tab-box">
              <div className="tab-box-options">
                <div className="tab-box-option">
                  <p className="tab-box-option-title">Description</p>
                </div>
              </div>

              <div className="tab-box-items">
                <div className="tab-box-item">
                  <div className="tab-box-item-content">
                    <p className="tab-box-item-title">{collectible?.title}</p>
                    <p className="tab-box-item-paragraph">{collectible?.description}</p>
                    <p className="tab-box-item-title">How does it work?</p>
                    <p className="tab-box-item-paragraph">This booster pack is an ERC-721 compliant NFT. You can open it to discover what is inside. Once opened, this booster pack will be destroyed and you will get new ERC-721 or ERC-1155 NFTs compatible with {collectible?.relatedDappName}.</p>
                    {collectible?.holdingIncreasesValue && (
                      <>
                        <p className="tab-box-item-title">Extra Capabilities</p>
                        <p className="tab-box-item-paragraph">If unopened, this booster pack gains value over time. The chances of getting rare NFTs increases while HODLing. Whether to open it now or speculate is your decision. You never know, you may get a super rare NFT!</p>
                      </>
                    )}
                    <p className="tab-box-item-title">Included in the Pack:</p>
                    <ul className="bullet-item-list">
                      <li className="bullet-item">
                        <svg className="bullet-item-icon icon-check">
                          <use xlinkHref="#svg-check"></use>
                        </svg>

                        <p className="bullet-item-text">{collectible?.amountOfNfts} Random stickers for {collectible?.relatedDappName}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="marketplace-sidebar">
            <div className="sidebar-box">
              <div className="sidebar-box-items">
                <p className="price-title big"><span className="currency">{collectible?.currency}</span> {price || "?"}</p>

                <div className="checkbox-wrap">
                  <div className="checkbox-info accordion-content-linked accordion-open">
                    <p className="checkbox-info-text">{collectible?.description}</p>
                  </div>
                </div>

                <p className="button primary flex items-center justify-center"
                    style={{ cursor: !buyLoading ? 'pointer' : 'auto' }}
                    onClick={() => buyCollectible()}>
                      {!buyLoading ? "Buy now" : (
                      <>
                        <div className="animate-pulse mr-1">Loading</div> 
                        <div className="pt-1 flex items-center justify-center space-x-1 animate-pulse">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </>
                      )}
                </p>

                <div className="user-stats">
                  <div className="user-stat big">
                    <p className="user-stat-title">{`${totalMinted || "?"}/${maxAmount || collectible?.emission}`}</p>
                    <p className="user-stat-text">Minted</p>
                  </div>
                </div>
              </div>

              <p className="sidebar-box-title medium-space">Item Author</p>

              <div className="sidebar-box-items">
                <div className="user-status flex items-center" style={{ padding: 0 }}>
                  <div className="user-avatar-content w-8 h-8 rounded-full overflow-hidden mr-2" style={{ left: 0 }}>
                    <img src={`https://ui-avatars.com/api/?name=${collectible?.authorName.split(" ").join("+")}`} />
                  </div>

                  <p className="user-status-title"><a className="bold">{collectible?.authorName}</a></p>
                </div>
              </div>

              <p className="sidebar-box-title medium-space">Item Details</p>

              <div className="sidebar-box-items">
                <div className="information-line-list">
                  <div className="information-line">
                    <p className="information-line-title">Created</p>

                    <p className="information-line-text"><span className="bold">{new Date(collectible?.createdAt).toLocaleDateString()}</span></p>
                  </div>

                  <div className="information-line">
                    <p className="information-line-title">Category</p>

                    <p className="information-line-text"><span className="bold">{collectible?.category}</span></p>
                  </div>

                  <div className="information-line">
                    <p className="information-line-title">Contents</p>

                    <p className="information-line-text"><span className="bold">{collectible?.amountOfNfts} random stickers</span></p>
                  </div>
                </div>
              </div>

              <p className="sidebar-box-title medium-space">Share this!</p>

              <div className="sidebar-box-items">
                <div className="social-links small align-left">
                  <a target="_blank" href={`https://twitter.com/share?text=Check%20out%20this%20NFT%20Booster%20Pack%20from%20Cromy!%20${collectible?.title.split(" ").join("%20")}&url=${window.location.href}`} className="social-link small twitter">
                    <svg className="social-link-icon icon-twitter">
                      <use xlinkHref="#svg-twitter"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default Collectible;
