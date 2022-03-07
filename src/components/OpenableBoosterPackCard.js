import React, { useState } from 'react';
import { ShimmerText, ShimmerTitle, ShimmerThumbnail } from 'react-shimmer-effects';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const OpenableBoosterPackCard = ({ id, title, image, animation, onClick }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#cfcfcf">
      <div className="booster-pack-preview items-center" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
        <figure className="booster-pack-preview-image relative overflow-hidden liquid border border-transparent rounded-md shadow-lg">
          {!image ? <Skeleton className="h-full w-full absolute" /> : <img src={image} className="" style={{ objectFit: 'contain' }} />}
          {showOptions && (
            <div className="flex items-center justify-center" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <button onClick={(e) => {
                e.preventDefault();
                onClick();
              }} className="whitespace-nowrap inline-flex items-center justify-center text-base text-white rounded-full border-solid border-white border-2 text-sm py-1 px-1 rounded-md mt-2" style={{ width: 120, fontWeight: 600 }}>
                Open Pack  🙉
              </button>
            </div>
          )}
        </figure>
        <h1 className="text-center w-full mt-3" style={{ fontWeight: 600, fontSize: 21 }}>[#{id}] {title}</h1>

        
      </div>
    </SkeletonTheme>
  );
};

export default OpenableBoosterPackCard;
