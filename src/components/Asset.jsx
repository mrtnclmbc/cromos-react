import React, { useEffect, useState } from 'react';
import Ratio from 'react-ratio';
import { AudioPlayer } from './';
import { getAsset } from '../services/assetsService';
import { truncateString } from '../helpers/formatHelper';
import HeartIcon from '../../public/icons/heart-outline.svg';
import PlayRoundedIcon from '../../public/icons/play-rounded.svg';
import EllipsisIcon from '../../public/icons/ellipsis.svg';

const Asset = (props) => {
  const {
    size,
    image,
    backgroundImage,
    tokenId,
    addressId,
    padding,
    type,
    aspectRatio,
    walletConnected,
    isNFT,
    sizeMultiplier,
    title,
    artist,
    color,
    audioUrl,
    cover,
    isOwned,
    widthPercentage,
    rounded,
    borderColor,
    resource,
    stickerBackgroundImage
  } = props;
  console.log(props);
  return (
    <>
      <Ratio ratio={size.width / size.height} className={`object-cover`} style={{ width: widthPercentage + "%" }}>
        <div className={`${type === 'sticker' && ((isNFT && image) || (!isNFT && resource)) ? 'filter drop-shadow-lg' : ''} h-full w-full ${padding && `p-${padding}`}`}>
          <div className="group relative h-full z-0 ">
            {type !== 'empty' && isNFT && (
              <div className={`hidden sm:flex absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly z-10 ${rounded && 'rounded-lg'}`}>
                <button className="hover:scale-110 text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <HeartIcon />
                </button>

                <button className="hover:scale-110 text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <PlayRoundedIcon />
                </button>

                <button className="hover:scale-110 text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <EllipsisIcon />
                </button>
              </div>
            )}
            {(type === 'image' || type === 'sticker') && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
                  <defs>
                    <filter id="f1">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                    </filter>
                  </defs>
                </svg>
                <div className={`h-full w-full absolute overflow-hidden ${rounded && 'rounded-lg'}`}>
                  {type === "image" && ((isNFT && !image) || (!isNFT && !resource)) && <img src={backgroundImage} className={`h-full w-full ${isNFT ? 'blurred' : null}`} />}
                  {type === "sticker" && ((isNFT && !image) || (!isNFT && !resource)) && (
                    <div className={`h-full w-full ${!stickerBackgroundImage ? 'bg-gray-800' : ''} ${borderColor && 'border-solid border-white border-4'} ${rounded && 'rounded-lg'}`}>
                      {stickerBackgroundImage && <img src={stickerBackgroundImage} style={{ position: 'absolute', left: 0, top: 0 }} />}
                    </div>
                  )}
                </div>
                {image || !isNFT ? <img src={isNFT ? image : resource} className={`h-full w-full ${rounded && 'rounded-lg'} ${type === "sticker" && 'object-cover drop-shadow-md'}`} /> : (
                  <div className={`mt-3 mr-3 top-0 flex flex-col absolute right-0 z-1`}>
                    <div className="p-2 text-left z-1 bg-gray-900 bg-opacity-30 h-12">
                      <h3 className="text-gray-300 text-xs">Address</h3>
                      <p className="text-white text-sm">{truncateString(addressId)}</p>
                    </div>
                    <div className="p-2 text-left z-1 bg-gray-900 bg-opacity-30 h-12 mt-2">
                      <h3 className="text-gray-300 text-xs">Token ID</h3>
                      <p className="text-white text-sm">{truncateString(tokenId)}</p>
                    </div>
                  </div>
                )}
              </>
            )}
            {type === 'audio' && (
              <>
                <AudioPlayer
                  title={title}
                  artist={artist}
                  color={color}
                  audioUrl={audioUrl}
                  cover={cover}
                  isNFT={isNFT}
                  isOwned={isOwned}
                  tokenId={tokenId}
                  addressId={addressId}
                  backgroundImage={backgroundImage}
                />
              </>
            )}
          </div>
        </div>
      </Ratio>
    </>
  )
}

export default Asset;
