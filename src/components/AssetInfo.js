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
        <div className='opacity-100 absolute pl-2 pr-3 xl:pl-3 group mt-2 xl:mt-5 top-0 flex flex-col left-0 z-1 transition justify-evenly z-20'>
          <div className='p-2 text-left z-1 bg-gray-900 bg-opacity-30'>
            <h3 className='text-gray-300 text-xxs md:text-xs xl:text-base filter'>Address</h3>
            <p className='text-white text-xxs md:text-xs xl:text-base'>{truncateString(addressId)}</p>
          </div>
          <div className='p-2 text-left z-1 bg-gray-900 bg-opacity-30 mt-2 xl:mt-5 '>
            <h3 className='text-gray-300 text-xxs md:text-xs xl:text-base filter'>Token ID</h3>
            <p className='text-white text-xxs md:text-xs xl:text-base'>{truncateString(tokenId)}</p>
          </div>
        </div>

        <div className="bg-opacity-0 hover:bg-opacity-100 absolute bg-black bg-opacity-0 w-full h-full top-0 flex items-center group-hover:opacity-80 transition justify-evenly z-50">
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
