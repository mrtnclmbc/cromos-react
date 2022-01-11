import React from 'react';
import { ShimmerText, ShimmerTitle, ShimmerThumbnail } from 'react-shimmer-effects';

const BoosterPackCard = ({ id, featuredImage, description, price, currency, isLoading, title }) => (
  <div className="product-preview">
    <a href={!isLoading && `collectible/${id}`}>
      <figure className="product-preview-image liquid">
        {isLoading || !featuredImage ? <ShimmerThumbnail fitOnFrame rounded /> : <img src={featuredImage} style={{ objectFit: 'contain' }} />}
      </figure>
    </a>

    <div className="product-preview-info" style={{ padding: '16px 28px 0 28px' }}>
      {isLoading ? (
        <>
          <ShimmerTitle className="game-loading-title" line={1} />
          <ShimmerText line={3} />
        </>
      ) : (
        <>
          <p className="product-preview-title text-center"><a href={`collectible/${id}`}>{title}</a></p>
          <div className="product-preview-text-container-small">
            <p className="product-preview-text-max-lines text-center">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
    <div className={isLoading ? "product-preview-meta-loading" : "product-preview-call-to-action"}>
      {isLoading ? <ShimmerTitle className="game-loading-author" variant="secondary" line={1} /> : (
        <div className="">
          <p className="product-preview-author-title bold" style={{ fontWeight: 800 }}>${currency} {price}</p>
        </div>
      )}
      {!isLoading && (
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href=`collectible/${id}`;
        }} className="whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-md shadow-sm text-base text-white text-sm py-1 px-1 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg" style={{ maxWidth: 100 }}>
          Buy Now
        </button>
      )}
    </div>
  </div>
);

export default BoosterPackCard;
