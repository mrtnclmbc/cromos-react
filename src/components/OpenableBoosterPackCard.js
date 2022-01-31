import React from 'react';
import { ShimmerText, ShimmerTitle, ShimmerThumbnail } from 'react-shimmer-effects';

const OpenableBoosterPackCard = ({ id, title, image, animation, onClick }) => (
  <div className="booster-pack-preview shadow-md rounded-lg overflow-hidden">
    <figure className="booster-pack-preview-image liquid">
      {!image ? <ShimmerThumbnail fitOnFrame rounded /> : <img src={image} style={{ objectFit: 'contain' }} />}
    </figure>

    <div className="booster-pack-preview-call-to-action flex flex-col py-2">
      <h1 className="bold" style={{ fontWeight: 800 }}>{title} #{id}</h1>
      <button onClick={(e) => {
        e.preventDefault();
        onClick();
      }} className="whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-md shadow-sm text-base text-white text-sm py-1 px-1 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg mt-2" style={{ maxWidth: 100 }}>
        Open
      </button>
    </div>
  </div>
);

export default OpenableBoosterPackCard;
