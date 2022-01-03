import React from 'react';
import { capitalizeString } from '../helpers/formatHelper';
import { ShimmerText, ShimmerTitle, ShimmerThumbnail } from 'react-shimmer-effects';

const typeToCoolText = (type) => {
  switch (type) {
    case "album":
      return "Sticker Album"
    case "audio":
      return "Music Box"
    default:
      return type;
  }
}

const GameCard = ({ id, featuredImage, featuredText, featuredTag, type, isLoading, title, author }) => (
  <div className="product-preview">
    <a href={!isLoading && `game/${id}`}>
      <figure className="product-preview-image liquid">
        {isLoading || !featuredImage ? <ShimmerThumbnail fitOnFrame rounded /> : <img src={featuredImage} />}
      </figure>
    </a>

    <div className="product-preview-info">
      {isLoading ? (
        <>
          <ShimmerTitle className="game-loading-title" line={1} />
          <ShimmerText line={3} />
        </>
      ) : (
        <>
          {featuredTag && <p className="text-sticker"><span className="highlighted"></span>{featuredTag}</p>}
          <p className="product-preview-title"><a href={`game/${id}`}>{title}</a></p>
          {type && <p className="product-preview-category digital"><a href={`game/${id}`}>{capitalizeString(typeToCoolText(type))}</a></p>}
          <div className="product-preview-text-container">
            <p className="product-preview-text">
              {featuredText}
            </p>
          </div>
        </>
      )}
    </div>
    <div className={isLoading ? "product-preview-meta-loading" : "product-preview-meta"}>
      {isLoading ? <ShimmerTitle className="game-loading-author" variant="secondary" line={1} /> : (
        <div className="product-preview-author pl-10">
          <a className="product-preview-author-image user-avatar micro no-border" href={`game/${id}`}>
            <div className="user-avatar-content w-8 h-8">
              <img src="img/cromy-avatar.png" />
            </div>
          </a>
          <p className="product-preview-author-title">Published By</p>
          <p className="product-preview-author-text"><a href={`game/${id}`}>{author ? author?.title : 'Cromy'}</a></p>
        </div>
      )}
      {!isLoading && (
        <div className="rating-list">
          <div className="rating filled">
            <svg className="rating-icon icon-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </div>
          <div className="rating filled">
            <svg className="rating-icon icon-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </div>
          <div className="rating filled">
            <svg className="rating-icon icon-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </div>
          <div className="rating filled">
            <svg className="rating-icon icon-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </div>
          <div className="rating filled">
            <svg className="rating-icon icon-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default GameCard;
