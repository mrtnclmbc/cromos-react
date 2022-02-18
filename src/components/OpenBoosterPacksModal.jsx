import { Fragment, useRef, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Web3 from 'web3';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import originalFetch from 'node-fetch';

import { networkChainIds, networkRpcUrls } from '../constants';
import { convertIpfsUrlToHttps, extractImageFromMetadata, extractTitleFromMetadata, extractAnimationFromMetadata, sanitizeTokenUriForId } from '../utils/metadataUtils';
import BuyableBoosterPackABI from '../../contracts/abis/BuyableBoosterPack';
import CromyCollectibleABI from '../../contracts/abis/CromyCollectible';
import { ApplicationContext } from '../state/store';
import { OpenableBoosterPackCard, ObtainedNftCard } from '.';

const fetch = require('fetch-retry')(originalFetch, {
  retries: 10,
  retryDelay: 1
});

// TODO: Get from API endpoint
const compatibleBoosterPacksArray = [
  {
    address: '0x04BEf925CC0bc8e86CAc5184D60fD623Ff847667',
    network: 'rinkeby',
    dappId: 'sticker-album',
    dappName: 'Bizarrap Sticker Album',
    nft: 'bizai'
  },
  {
    address: '0x96e6d0B61B20230Ca53A63431f01364C3C6A9666',
    network: 'rinkeby',
    dappId: 'sticker-album',
    dappName: 'Bizarrap Sticker Album',
    nft: 'biza'
  }
];

const minMillisecondsVideo = 11000;

const OpenBoosterPacksModal = (props) => {

  const {
    open,
    setOpen,
  } = props;

  const { currentAddress } = useContext(ApplicationContext);
  const [loading, setLoading] = useState(false);
  const [isOpeningPack, setIsOpeningPack] = useState(false);
  const [boosterPacks, setBoosterPacks] = useState([]);
  const [obtainedNFTs, setObtainedNFTs] = useState([]);
  const [openingPack, setOpeningPack] = useState(undefined);
  const [showVideo, setShowVideo] = useState(false);
  const [compatibleBoosterPacks, setCompatibleBoosterPacks] = useState(compatibleBoosterPacksArray); 
  const okButtonRef = useRef();

  const requestUserOwnedBoosterPacks = async () => {
    setLoading(true);
    let boosterPacks = [];
    for (var n = 0; n < compatibleBoosterPacks.length; n++) {
      const boosterPack = compatibleBoosterPacks[n];
      const web3 = new Web3(networkRpcUrls[boosterPack.network]);
      const contract = new web3.eth.Contract(BuyableBoosterPackABI, boosterPack.address) 
      let incomingTokenTransferEvents = await contract.getPastEvents('Transfer', { filter: { 'to': currentAddress }, fromBlock: 0, toBlock: 'latest' })
      const possibleOwnedTokenIds = incomingTokenTransferEvents.map(event => event.returnValues.tokenId);
      for (var i = 0; i < possibleOwnedTokenIds.length; i++) {
        const tokenId = possibleOwnedTokenIds[i];
        try {
          const owner = await contract.methods.ownerOf(tokenId).call();
          if (currentAddress === owner) {
            const tokenUri = await contract.methods.tokenURI(tokenId).call();
            const sanitizedTokenUri = sanitizeTokenUriForId(tokenUri, tokenId);
            const response = await fetch(sanitizedTokenUri, { retryOn: [503, 504] });
            const metadata = await response.json();
            const title = extractTitleFromMetadata(metadata);
            const image = extractImageFromMetadata(metadata);
            const animation = extractAnimationFromMetadata(metadata);
            boosterPacks = [...boosterPacks, {...boosterPack, tokenId, tokenUri, title, image, animation}];
          }  
        } catch (e) {
          console.error(e);
          continue;
        }
      }
      setBoosterPacks(boosterPacks);
    }
    setLoading(false);
  };

  const processObtainedNFTs = async (boosterPack, tokenIds, videoStartTime) => {
    let obtainedNFTs = [];
    const web3 = new Web3(networkRpcUrls[boosterPack.network]);
    const boosterPackContract = new web3.eth.Contract(BuyableBoosterPackABI, boosterPack.address) 
    const collectibleContractAddress = await boosterPackContract.methods.collectionContract().call();
    const collectibleContract = new web3.eth.Contract(CromyCollectibleABI, collectibleContractAddress);
    for (var i = 0; i < tokenIds.length; i++) {
      const tokenId = tokenIds[i];
      const tokenUri = await collectibleContract.methods.uri(tokenId).call();
      try {
        console.log("JERERER")
        const sanitizedTokenUri = sanitizeTokenUriForId(tokenUri, tokenId);
        const response = await fetch(sanitizedTokenUri, { retryOn: [503, 504] });
        const metadata = await response.json();
        const title = extractTitleFromMetadata(metadata);
        const image = extractImageFromMetadata(metadata);
        const animation = extractAnimationFromMetadata(metadata);
        obtainedNFTs = [...obtainedNFTs, { tokenId, tokenUri, title, image, animation }];    
      } catch (e) {
        console.error(e, "error");
        obtainedNFTs = [...obtainedNFTs, { tokenId, tokenUri, title: 'Unkown title', image: '', animation: '' }];    
      }
    }
    setObtainedNFTs(obtainedNFTs);
    const now = Date.now();
    const diffInMilliseconds = now - videoStartTime;
    setTimeout(() => {
      setShowVideo(false);
    }, diffInMilliseconds >= minMillisecondsVideo ? 0 : (minMillisecondsVideo - diffInMilliseconds));
    return obtainedNFTs;
  };

  const openBoosterPack = async (boosterPack) => {
    const { network, address, tokenId } = boosterPack;
    setObtainedNFTs([]);
    const web3 = new Web3(window.ethereum);
    const chainId = await web3.eth.getChainId();
    if (chainId === networkChainIds[network]) {
      const contract = new web3.eth.Contract(BuyableBoosterPackABI, address);
      try {
        const owner = await contract.methods.ownerOf(tokenId).call();
        if (currentAddress === owner) {
          let now;
          contract.methods
            .openBoosterPack(tokenId)
            .send({ from: currentAddress })
            .on('transactionHash', () => {
              setIsOpeningPack(true);
              setOpeningPack(boosterPack);
              setShowVideo(true);
              now = Date.now();
            });
          contract.events.BoosterPackOpen()
            .on('data', async event => {
              if (event.returnValues.tokenId == tokenId) {
                const tokenIds = event.returnValues.cards;
                await processObtainedNFTs(boosterPack, tokenIds, now);
              }
            })
            .on('error', console.error);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  useEffect(async () => {
    await requestUserOwnedBoosterPacks();
  }, [compatibleBoosterPacks, currentAddress]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-y-auto mx-10"
        initialFocus={okButtonRef}
        open={open}
        onClose={setOpen}
        style={{ zIndex: 999999 }}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${showVideo ? 'bg-black' : 'bg-white'}`}>
              <div className="bg-transparent" style={{ paddingTop: !showVideo ? 15 : 0, paddingBottom: !showVideo ? 15 : 0 }}>
                <div className="flex justify-center flex-col">
                  {!showVideo && (
                    <div className="text-center">
                      <Dialog.Title as="div" className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center mt-2">
                        <h2 style={{ fontSize: '1.8em' }} className="section-title text-black drop-shadow-xl">
                          {isOpeningPack && obtainedNFTs?.length > 0 ? `Congratulations! You got ${obtainedNFTs.length} incredible NFTs 🎉` : isOpeningPack && obtainedNFTs?.length === 0 ? `Opening ${openingPack?.title} #${openingPack?.tokenId}. Please wait...` : 'Your booster packs'}
                        </h2>
                      </Dialog.Title>
                    </div>
                  )}
                  <button></button>
                  {loading ? (
                    <div class="flex items-center justify-center space-x-2 animate-pulse p-7">
                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  ) : isOpeningPack && showVideo ? (
                    <>
                      <video autoPlay playsInline muted style={{ objectFit: 'contain' }}>
                        <source src="/videos/open_boosterpack.mp4" type="video/mp4" />
                      </video>
                    </>
                  ) : isOpeningPack && obtainedNFTs?.length > 0 ? (
                    <div>
                      <div className="modal-grid">
                        <div className="grid grid-2-2-2-2-2-2 centered mt-5 mb-3">
                          <Fade direction="up" cascade triggerOnce>
                            {obtainedNFTs.map(obtainedNFT => {
                              const { tokenId, title, image, animation } = obtainedNFT;
                              return (
                                <Tilt>
                                  <ObtainedNftCard
                                    id={tokenId}
                                    title={title}
                                    image={image}
                                    animation={animation}
                                  />
                                </Tilt>
                              )})}
                          </Fade>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <a href={`${window.location.origin.toString()}/game/${openingPack.dappId}`} style={{ height: 50, fontWeight: 600 }} className="rounded-full self-center border border-solid bg-red-500 text-white flex items-center justify-center px-5 mb-2">
                          Go to {openingPack.dappName}
                        </a>
                      </div>
                    </div>
                  ) : (
                    boosterPacks?.length ? (
                      <div className="modal-grid">
                        <div className="grid grid-3-3-3-3 centered">
                          {boosterPacks.map(boosterPack => {
                            const { tokenId, title, image, animation } = boosterPack;
                            return (
                              <OpenableBoosterPackCard
                                id={tokenId}
                                title={title}
                                image={image}
                                animation={animation}
                                onClick={() => openBoosterPack(boosterPack)}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center mt-5">
                        <p>You don't have any booster pack. Buy a booster pack to obtain awesome experienceable NFTs!</p>
                        <a href="#collectibles" onClick={() => setOpen(false)} style={{ height: 50, fontWeight: 600 }} className="rounded-full self-center border border-solid bg-red-500 text-white flex items-center justify-center px-5 mb-2 mt-5">
                          Buy Booster Packs
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default OpenBoosterPacksModal;