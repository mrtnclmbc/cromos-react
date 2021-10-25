import React from 'react';
import Link from 'next/link';
import { Footer, Header, SectionBanner } from './';

const Launcher = (props) => {
  return (
    <>
      {/*<!-- /STYLES -->*/}
        {/*<!-- PAGE LOADER -->*/}
        <div className="page-loader page-loader bg-gradient-to-bl from-yellow-400 via-red-500 to-red-800">
          {/*<!-- PAGE LOADER DECORATION -->*/}
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-0 object-cover object-center rounded" alt="hero" src="/img/cromy-logo-full.png" />
          {/*<!-- /PAGE LOADER DECORATION -->*/}

          {/*<!-- PAGE LOADER INFO -->*/}
          <div className="page-loader-info">
            {/*<!-- PAGE LOADER INFO TITLE -->*/}
            <p className="page-loader-info-title">DAPPSTER</p>
            {/*<!-- /PAGE LOADER INFO TITLE -->*/}

            {/*<!-- PAGE LOADER INFO TEXT -->*/}
            <p className="page-loader-info-text">Loading...</p>
            {/*<!-- /PAGE LOADER INFO TEXT -->*/}
          </div>
          {/*<!-- /PAGE LOADER INFO -->*/}

          {/*<!-- PAGE LOADER INDICATOR -->*/}
          <div className="page-loader-indicator loader-bars">
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
            <div className="loader-bar"></div>
          </div>
          {/*<!-- /PAGE LOADER INDICATOR -->*/}
        </div>
        {/*<!-- /PAGE LOADER -->*/}

        {/*<!-- HEADER -->*/}
        <Header />
        {/*<!-- /HEADER -->*/}

        {/*<!-- CONTENT GRID -->*/}
        <div className="content-grid">

          {/*<!-- SECTION BANNER -->*/}
          <SectionBanner
            title="DAPP Launcher"
            description="Start playing now!"
          />
          {/*<!-- /SECTION BANNER -->*/}

          {/*<!-- SECTION HEADER -->*/}
          <div className="section-header">
            {/*<!-- SECTION HEADER INFO -->*/}
            <div className="section-header-info">
              {/*<!-- SECTION PRETITLE -->*/}
              <p className="section-pretitle">Search what you want!</p>
              {/*<!-- /SECTION PRETITLE -->*/}

              {/*<!-- SECTION TITLE -->*/}
              <h2 className="section-title">DAPPs & NFTs</h2>
              {/*<!-- /SECTION TITLE -->*/}
            </div>
            {/*<!-- /SECTION HEADER INFO -->*/}
          </div>
          {/*<!-- /SECTION HEADER -->*/}

          {/*<!-- GRID -->*/}
          <div className="grid grid-half centered">
            {/*<!-- PRODUCT CATEGORY BOX -->*/}
            <a className="product-category-box category-all" href="#">
              {/*<!-- PRODUCT CATEGORY BOX TITLE -->*/}
              <p className="product-category-box-title">DApps</p>
              {/*<!-- /PRODUCT CATEGORY BOX TITLE -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TEXT -->*/}
              <p className="product-category-box-text">Check out all our own & 3rd party NFT DApps.</p>
              {/*<!-- /PRODUCT CATEGORY BOX TEXT -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TAG -->*/}
              <p className="product-category-box-tag">4 dApps</p>
              {/*<!-- /PRODUCT CATEGORY BOX TAG -->*/}
            </a>
            {/*<!-- /PRODUCT CATEGORY BOX -->*/}

            {/*<!-- PRODUCT CATEGORY BOX -->*/}
            <a className="product-category-box category-featured" href="#">
              {/*<!-- PRODUCT CATEGORY BOX TITLE -->*/}
              <p className="product-category-box-title">NFTs</p>
              {/*<!-- /PRODUCT CATEGORY BOX TITLE -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TEXT -->*/}
              <p className="product-category-box-text"><b>Cromy®</b> seal of quality ensures that each collection <br /> has attained our quality standard.</p>
              {/*<!-- /PRODUCT CATEGORY BOX TEXT -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TAG -->*/}
              <p className="product-category-box-tag">5 Collections</p>
              {/*<!-- /PRODUCT CATEGORY BOX TAG -->*/}
            </a>
            {/*<!-- /PRODUCT CATEGORY BOX -->*/}
          </div>
          {/*<!-- /GRID -->*/}

          {/*<!-- SECTION HEADER -->*/}
          <div className="section-header">
            {/*<!-- SECTION HEADER INFO -->*/}
            <div className="section-header-info">
              {/*<!-- SECTION PRETITLE -->*/}
              <p className="section-pretitle">See what's new!</p>
              {/*<!-- /SECTION PRETITLE -->*/}

              {/*<!-- SECTION TITLE -->*/}
              <h2 className="section-title">Latest DAPPs</h2>
              {/*<!-- /SECTION TITLE -->*/}
            </div>
            {/*<!-- /SECTION HEADER INFO -->*/}

            {/*<!-- SECTION HEADER ACTIONS -->*/}
            <div className="section-header-actions">
              {/*<!-- SECTION HEADER ACTION -->*/}
              <a className="section-header-action" href="#">Browse All Latest</a>
              {/*<!-- /SECTION HEADER ACTION -->*/}
            </div>
            {/*<!-- /SECTION HEADER ACTIONS -->*/}
          </div>
          {/*<!-- /SECTION HEADER -->*/}

          {/*<!-- GRID -->*/}
          <div className="grid grid-3-3-3-3 centered">
            {/*<!-- PRODUCT PREVIEW -->*/}
            <div className="product-preview">
              {/*<!-- PRODUCT PREVIEW IMAGE -->*/}
              <a href="game/comic">
                <figure className="product-preview-image liquid">
                  <img src="/img/launcher/marketplace/items/01.jpg" alt="item-01" />
                </figure>
              </a>
              {/*<!-- /PRODUCT PREVIEW IMAGE -->*/}

              {/*<!-- PRODUCT PREVIEW INFO -->*/}
              <div className="product-preview-info">
                {/*<!-- TEXT STICKER -->*/}
                <p className="text-sticker"><span className="highlighted"></span>Limited edition</p>
                {/*<!-- /TEXT STICKER -->*/}

                {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                <p className="product-preview-title"><a href="game/comic">The Walking Dead</a></p>
                {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                <p className="product-preview-category digital"><a href="game/comic">Comic</a></p>
                {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                <p className="product-preview-text">
                  The world we knew is gone. Collect this awesome comic to survive the zombie apocalypse!
                </p>
                {/*<!-- /PRODUCT PREVIEW TEXT -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW INFO -->*/}

              {/*<!-- PRODUCT PREVIEW META -->*/}
              <div className="product-preview-meta">
                {/*<!-- PRODUCT PREVIEW AUTHOR -->*/}
                <div className="product-preview-author pl-10">
                  {/*<!-- PRODUCT PREVIEW AUTHOR IMAGE -->*/}
                  <a className="product-preview-author-image user-avatar micro no-border" href="game/comic">
                    {/*<!-- USER AVATAR CONTENT -->*/}
                    <div className="user-avatar-content w-8 h-8">
                      {/*<!-- HEXAGON -->*/}
                        <img src="img/cromy-avatar.png" />
                      {/*<!-- /HEXAGON -->*/}
                    </div>
                    {/*<!-- /USER AVATAR CONTENT -->*/}
                  </a>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR IMAGE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TITLE -->*/}
                  <p className="product-preview-author-title">Published By</p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TITLE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TEXT -->*/}
                  <p className="product-preview-author-text"><a href="game/comic">Cromy</a></p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TEXT -->*/}
                </div>
                {/*<!-- /PRODUCT PREVIEW AUTHOR -->*/}

                {/*<!-- RATING LIST -->*/}
                <div className="rating-list">
                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}
                </div>
                {/*<!-- /RATING LIST -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW META -->*/}
            </div>
            {/*<!-- /PRODUCT PREVIEW -->*/}

            {/*<!-- PRODUCT PREVIEW -->*/}
            <div className="product-preview">
              {/*<!-- PRODUCT PREVIEW IMAGE -->*/}
              <a href="game/sticker-album">
                <figure className="product-preview-image liquid">
                  <img src="/img/launcher/marketplace/items/02.jpg" alt="item-02" />
                </figure>
              </a>
              {/*<!-- /PRODUCT PREVIEW IMAGE -->*/}

              {/*<!-- PRODUCT PREVIEW INFO -->*/}
              <div className="product-preview-info">
                {/*<!-- TEXT STICKER -->*/}
                <p className="text-sticker"><span className="highlighted"></span>Artist collection</p>
                {/*<!-- /TEXT STICKER -->*/}

                {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                <p className="product-preview-title"><a href="game/sticker-album">Bizarrap Sticker Album</a></p>
                {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                <p className="product-preview-category digital"><a href="game/sticker-album">Sticker album</a></p>
                {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                <p className="product-preview-text">
                  Bizarrap joined forces with Cromy to create this incredible sticker album. Grab your sticker packs here!
                </p>
                {/*<!-- /PRODUCT PREVIEW TEXT -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW INFO -->*/}

              {/*<!-- PRODUCT PREVIEW META -->*/}
              <div className="product-preview-meta">
                {/*<!-- PRODUCT PREVIEW AUTHOR -->*/}
                <div className="product-preview-author pl-10">
                  {/*<!-- PRODUCT PREVIEW AUTHOR IMAGE -->*/}
                  <a className="product-preview-author-image user-avatar micro no-border" href="game/sticker-album">
                    {/*<!-- USER AVATAR CONTENT -->*/}
                    <div className="user-avatar-content w-8 h-8">
                      {/*<!-- HEXAGON -->*/}
                        <img src="img/cromy-avatar.png" />
                      {/*<!-- /HEXAGON -->*/}
                    </div>
                    {/*<!-- /USER AVATAR CONTENT -->*/}
                  </a>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR IMAGE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TITLE -->*/}
                  <p className="product-preview-author-title">Published By</p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TITLE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TEXT -->*/}
                  <p className="product-preview-author-text"><a href="game/sticker-album">Cromy</a></p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TEXT -->*/}
                </div>
                {/*<!-- /PRODUCT PREVIEW AUTHOR -->*/}

                {/*<!-- RATING LIST -->*/}
                <div className="rating-list">
                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}
                </div>
                {/*<!-- /RATING LIST -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW META -->*/}
            </div>
            {/*<!-- /PRODUCT PREVIEW -->*/}

            {/*<!-- PRODUCT PREVIEW -->*/}
            <div className="product-preview">
              {/*<!-- PRODUCT PREVIEW IMAGE -->*/}
              <a href="game/musical-booklet-vol-2">
                <figure className="product-preview-image liquid">
                  <img src="/img/launcher/marketplace/items/03.jpg" alt="item-01" />
                </figure>
              </a>
              {/*<!-- /PRODUCT PREVIEW IMAGE -->*/}

              {/*<!-- PRODUCT PREVIEW INFO -->*/}
              <div className="product-preview-info">
                {/*<!-- TEXT STICKER -->*/}
                <p className="text-sticker"><span className="highlighted"></span>Cromy Exclusive</p>
                {/*<!-- /TEXT STICKER -->*/}

                {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                <p className="product-preview-title"><a href="game/musical-booklet-vol-2">Gorillaz music booklet</a></p>
                {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                <p className="product-preview-category digital"><a href="game/musical-booklet-vol-2">Music booklet</a></p>
                {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                <p className="product-preview-text">
                  Exclusive gorillaz NFTs collection in collaboration with Cromy. Get your unique Gorillaz NFTs!
                </p>
                {/*<!-- /PRODUCT PREVIEW TEXT -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW INFO -->*/}

              {/*<!-- PRODUCT PREVIEW META -->*/}
              <div className="product-preview-meta">
                {/*<!-- PRODUCT PREVIEW AUTHOR -->*/}
                <div className="product-preview-author pl-10">
                  {/*<!-- PRODUCT PREVIEW AUTHOR IMAGE -->*/}
                  <a className="product-preview-author-image user-avatar micro no-border" href="game/musical-booklet-vol-2">
                    {/*<!-- USER AVATAR CONTENT -->*/}
                    <div className="user-avatar-content w-8 h-8">
                      {/*<!-- HEXAGON -->*/}
                        <img src="img/cromy-avatar.png" />
                      {/*<!-- /HEXAGON -->*/}
                    </div>
                    {/*<!-- /USER AVATAR CONTENT -->*/}
                  </a>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR IMAGE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TITLE -->*/}
                  <p className="product-preview-author-title">Published By</p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TITLE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TEXT -->*/}
                  <p className="product-preview-author-text"><a href="game/musical-booklet-vol-2">Cromy</a></p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TEXT -->*/}
                </div>
                {/*<!-- /PRODUCT PREVIEW AUTHOR -->*/}

                {/*<!-- RATING LIST -->*/}
                <div className="rating-list">
                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}
                </div>
                {/*<!-- /RATING LIST -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW META -->*/}
            </div>
            {/*<!-- /PRODUCT PREVIEW -->*/}

            {/*<!-- PRODUCT PREVIEW -->*/}
            <div className="product-preview">
              {/*<!-- PRODUCT PREVIEW IMAGE -->*/}
              <a href="game/iota-mural">
                <figure className="product-preview-image liquid">
                  <img src="/img/launcher/marketplace/items/04.jpg" alt="item-04" />
                </figure>
              </a>
              {/*<!-- /PRODUCT PREVIEW IMAGE -->*/}

              {/*<!-- PRODUCT PREVIEW INFO -->*/}
              <div className="product-preview-info">
                {/*<!-- TEXT STICKER -->*/}
                <p className="text-sticker"><span className="highlighted"></span>Art Collaborations</p>
                {/*<!-- /TEXT STICKER -->*/}

                {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                <p className="product-preview-title"><a href="game/iota-mural">IOTA Mural</a></p>
                {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                <p className="product-preview-category digital"><a href="game/iota-mural">Mural</a></p>
                {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                <p className="product-preview-text">
                  Collect all the parts to uncover and own this awesome IOTA Cromy collectible made by the community.
                </p>
                {/*<!-- /PRODUCT PREVIEW TEXT -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW INFO -->*/}

              {/*<!-- PRODUCT PREVIEW META -->*/}
              <div className="product-preview-meta">
                {/*<!-- PRODUCT PREVIEW AUTHOR -->*/}
                <div className="product-preview-author pl-10">
                  {/*<!-- PRODUCT PREVIEW AUTHOR IMAGE -->*/}
                  <a className="product-preview-author-image user-avatar micro no-border" href="game/iota-mural">
                    {/*<!-- USER AVATAR CONTENT -->*/}
                    <div className="user-avatar-content w-8 h-8">
                      {/*<!-- HEXAGON -->*/}
                        <img src="img/cromy-avatar.png" />
                      {/*<!-- /HEXAGON -->*/}
                    </div>
                    {/*<!-- /USER AVATAR CONTENT -->*/}
                  </a>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR IMAGE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TITLE -->*/}
                  <p className="product-preview-author-title">Published By</p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TITLE -->*/}

                  {/*<!-- PRODUCT PREVIEW AUTHOR TEXT -->*/}
                  <p className="product-preview-author-text"><a href="game/iota-mural">Cromy</a></p>
                  {/*<!-- /PRODUCT PREVIEW AUTHOR TEXT -->*/}
                </div>
                {/*<!-- /PRODUCT PREVIEW AUTHOR -->*/}

                {/*<!-- RATING LIST -->*/}
                <div className="rating-list">
                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}

                  {/*<!-- RATING -->*/}
                  <div className="rating filled">
                    {/*<!-- RATING ICON -->*/}
                    <svg className="rating-icon icon-star">
                      <use xlinkHref="#svg-star"></use>
                    </svg>
                    {/*<!-- /RATING ICON -->*/}
                  </div>
                  {/*<!-- /RATING -->*/}
                </div>
                {/*<!-- /RATING LIST -->*/}
              </div>
              {/*<!-- /PRODUCT PREVIEW META -->*/}
            </div>
            {/*<!-- /PRODUCT PREVIEW -->*/}

        </div>
        {/*<!-- /GRID -->*/}
      </div>
      {/*<!-- /CONTENT GRID -->*/}
      {/*<!-- FOOTER -->*/}
      <div className="pb-12 sm:pb-0">
        <Footer />
      </div>
      {/*<!-- /FOOTER -->*/}
    </>
  )
}

export default Launcher;
