import { AssetInfo, AudioPlayer } from './';
import React, { useState } from 'react';

import EllipsisIcon from '../../public/icons/ellipsis.svg';
import HeartIcon from '../../public/icons/heart-outline.svg';
import PlayRoundedIcon from '../../public/icons/search-icon.svg';
import Ratio from 'react-ratio';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

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
    description,
    artist,
    color,
    audioUrl,
    videoUrl,
    videoProps,
    isPreviewMode,
    cover,
    showCover,
    coverSize,
    isOwned,
    widthPercentage,
    rounded = false,
    borderColor,
    resource,
    stickerBackgroundImage,
    setSelectedAsset,
    setModalOpen,
    asset,
    backgroundType,
    traits,
    totalSupply,
    isLoading
  } = props;

  const [imageLoading, setImageLoading] = useState(type === "image" && ((isNFT && !image) || (!isNFT && !resource)));

  return (
    <>
      <Ratio
        ratio={size.width / size.height}
        className={`object-cover`}
        style={{ width: widthPercentage + "%" }}
        onClick={isNFT ? (() => {
          setModalOpen(true);
          setSelectedAsset({ ...asset, title, description, traits, totalSupply });
        }) : null}
      >
        <SkeletonTheme baseColor="#fff" highlightColor="#cfcfcf">
          <div className={`${type === 'sticker' && ((isNFT && image) || (!isNFT && resource)) ? 'filter' : ''} h-full w-full ${padding ? `p-${padding}` : ''}`}>
            <div className="relative group h-full z-0">
              {(imageLoading || (type !== 'empty' && isLoading && isNFT)) && (
                <div className="h-full w-full absolute">
                  <Skeleton style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                </div>
              )}
              {((type !== 'empty' && type !== 'video' && !isLoading && isNFT) || (type === 'video' && (!isOwned && !isPreviewMode))) && (
                <div className={`${rounded && 'rounded-lg'} hidden sm:flex absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly z-10`}>
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <PlayRoundedIcon className="mx-auto h-10" fill="#fff" />
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
                    {type === "image" && ((isNFT && !image) || (!isNFT && !resource)) && (
                      <img
                        src={backgroundImage}
                        onLoad={() => setImageLoading(false)}
                        className={`h-full w-full ${isNFT ? 'blurred' : null}`}
                      />
                    )}
                    {type === "sticker" && ((isNFT && !image) || (!isNFT && !resource)) && (
                      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} className={`h-full w-full opacity-10 ${!stickerBackgroundImage ? 'bg-gray-800' : ''} ${borderColor && 'border-solid border-white border-4'} ${rounded && 'rounded-lg'}`}>
                        {stickerBackgroundImage && <img src={stickerBackgroundImage} style={{ position: 'absolute', left: 0, top: 0 }} />}
                      </div>
                    )}
                    {type === "sticker" && ((isNFT && !image) || (!isNFT && !resource)) && (
                      <img
                        src={backgroundImage}
                        className={`h-full w-full object-cover drop-shadow-md ${isNFT ? 'opacity-30' : null}`}
                      />
                    )}
                  </div>
                  {image || !isNFT ? <img src={isNFT ? image : resource} onLoad={() => setImageLoading(false)} className={`h-full w-full ${rounded && 'rounded-lg'} ${type === "sticker" && 'object-cover drop-shadow-md'}`} /> : (
                    <AssetInfo tokenId={tokenId} addressId={addressId} backgroundImage={type !== "sticker" && backgroundImage} />
                  )}
                </>
              )}
              {(type === 'video' && videoUrl) && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
                    <defs>
                      <filter id="f1">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                      </filter>
                    </defs>
                  </svg>
                  <div className={`h-full w-full absolute overflow-hidden bg-black ${isNFT && !isOwned && !isPreviewMode ? 'bg-black' : ''} ${rounded && 'rounded-lg'}`}>
                    <video
                      className={`h-full w-full object-cover ${isNFT && !isOwned && !isPreviewMode ? 'blurred' : ''}`}
                      autoPlay={videoProps?.autoPlay !== undefined ? videoProps?.autoPlay : true}
                      playsInline={true}
                      muted={videoProps?.muted !== undefined ? videoProps?.muted : true}
                      loop={videoProps?.loop !== undefined ? videoProps?.loop : true}
                      controls={videoProps?.controls !== undefined ? videoProps?.controls : false}
                      onLoad={() => setImageLoading(false)}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </>
              )}
              {type === 'audio' && (
                <>
                  {!isLoading ? (
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
                      backgroundImage={backgroundImage || image}
                      showCover={showCover}
                      coverSize={coverSize}
                      backgroundType={backgroundType}
                      size={size}
                    />
                  ) : <Skeleton color="#202020" highlightColor="#aaaaaa" className="h-full w-full absolute" />}
                </>
              )}
            </div>
          </div>
        </SkeletonTheme>
      </Ratio>
    </>
  )
}

export default Asset;
