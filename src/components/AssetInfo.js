import React from 'react';
import HeartIcon from '../../public/icons/heart-outline.svg';
import PlayRoundedIcon from '../../public/icons/play-rounded.svg';
import EllipsisIcon from '../../public/icons/ellipsis.svg';
import { truncateString } from '../helpers/formatHelper';

const AssetInfo = ({ addressId, tokenId, backgroundImage }) => {
  return (
    <>
      <div className="absolute group w-full h-full z-30 overflow-hidden">
        <img src={backgroundImage} className={`h-full w-full blurred`} />
        <div className="opacity-100 mt-3 mr-3 top-0 flex flex-col absolute right-0 z-1 transition justify-evenly z-20">
          <div className="p-2 text-left z-1 bg-gray-900 bg-opacity-30 h-12">
            <h3 className="text-gray-300 text-xs filter">Address</h3>
            <p className="text-white text-sm">{truncateString(addressId)}</p>
          </div>
          <div className="p-2 text-left z-1 bg-gray-900 bg-opacity-30 h-12 mt-2">
            <h3 className="text-gray-300 text-xs filter">Token ID</h3>
            <p className="text-white text-sm">{truncateString(tokenId)}</p>
          </div>
        </div>

        <div className="bg-opacity-0 hover:bg-opacity-10 absolute bg-black bg-opacity-0 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly z-10">
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
      </div>
    </>
  )
}

export default AssetInfo;
