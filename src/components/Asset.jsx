import { AssetInfo, AudioPlayer } from './';
import React, { useEffect, useState } from 'react';

import EllipsisIcon from '../../public/icons/ellipsis.svg';
import HeartIcon from '../../public/icons/heart-outline.svg';
import PlayRoundedIcon from '../../public/icons/play-rounded.svg';
import Ratio from 'react-ratio';
import { getAsset } from '../services/assetsService';
import { truncateString } from '../helpers/formatHelper';

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
    showCover,
    coverSize,
    isOwned,
    widthPercentage,
    rounded,
    borderColor,
    resource,
    stickerBackgroundImage,
    setSelectedAsset,
    setModalOpen,
    asset,
    backgroundType,
  } = props;

  return (
    <>
      <Ratio
        ratio={size.width / size.height}
        className={`object-cover`}
        style={{ width: widthPercentage + "%" }}
        onClick={isNFT && !isOwned ? (() => {
          setModalOpen(true);
          setSelectedAsset(asset)
          }) : null}
      >
        <div className={`${type === 'sticker' && ((isNFT && image) || (!isNFT && resource)) ? 'filter drop-shadow-lg' : ''} h-full w-full ${padding && `p-${padding}`}`}>
          <div className="group relative h-full z-0 ">
            {type !== 'empty' && isNFT && (
              <div className={`${rounded && 'rounded-lg'} hidden sm:flex absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly z-10`}>
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
                  <AssetInfo tokenId={tokenId} addressId={addressId} backgroundImage={backgroundImage} />
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
                  showCover={showCover}
                  coverSize={coverSize}
                  backgroundType={backgroundType}
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
