import React from 'react';
import { ShimmerText, ShimmerTitle, ShimmerThumbnail } from 'react-shimmer-effects';

const ObtainedNftCard = ({ id, title, image, animation }) => (
  <div className="obtained-nft-preview shadow-md rounded-lg overflow-hidden">
    <figure className="obtained-nft-preview-image liquid">
      {!image ? <ShimmerThumbnail fitOnFrame rounded /> : <img src={image} style={{ objectFit: 'contain' }} />}
    </figure>

    <div className="obtained-nft-preview-call-to-action flex flex-col py-2">
      <h1 className="bold" style={{ fontWeight: 800 }}>{title} [#{id}]</h1>
    </div>
  </div>
);

export default ObtainedNftCard;
