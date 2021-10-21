import React from 'react';
import { Footer, ConnectWallet  } from './';
import Link from 'next/link';

const Launcher = (props) => {
  return (
    <>
      {/*<!-- STYLES -->*/}
      <link rel="stylesheet" href="/launcher/css/vendor/bootstrap.min.css" />
      {/*<!-- styles -->*/}
      <link rel="stylesheet" href="/launcher/css/styles.css" />
      {/*<!-- simplebar styles -->*/}
      <link rel="stylesheet" href="/launcher/css/vendor/simplebar.css" />
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
        <header className="header bg-gradient-to-b from-red-500 to-red-600">
          {/*<!-- HEADER ACTIONS -->*/}
          <div className="header-actions">
            {/*<!-- HEADER BRAND -->*/}
            <div className="header-brand">
              {/*<!-- LOGO -->*/}
              <div className="logo">
                {/*<!-- ICON LOGO VIKINGER -->*/}
                <Link href="https://app.cromy.io/">
                  <img
                    className="h-auto w-24 cursor-pointer"
                    src="logo.svg"
                    alt="Cromy logo"
                  />
                </Link>
                {/*<!-- /ICON LOGO VIKINGER -->*/}
              </div>
              {/*<!-- /LOGO -->*/}
            </div>
            {/*<!-- /HEADER BRAND -->*/}
          </div>
          {/*<!-- /HEADER ACTIONS -->*/}

          {/*<!-- HEADER ACTIONS -->*/}
          <div className="header-actions">
            {/*<!-- MOBILEMENU TRIGGER -->*/}
            <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
              {/*<!-- BURGER ICON -->*/}
              <div className="burger-icon inverted">
                {/*<!-- BURGER ICON BAR -->*/}
                <div className="burger-icon-bar"></div>
                {/*<!-- /BURGER ICON BAR -->*/}

                {/*<!-- BURGER ICON BAR -->*/}
                <div className="burger-icon-bar"></div>
                {/*<!-- /BURGER ICON BAR -->*/}

                {/*<!-- BURGER ICON BAR -->*/}
                <div className="burger-icon-bar"></div>
                {/*<!-- /BURGER ICON BAR -->*/}
              </div>
              {/*<!-- /BURGER ICON -->*/}
            </div>
            {/*<!-- /MOBILEMENU TRIGGER -->*/}

            {/*<!-- NAVIGATION -->*/}
            <nav className="navigation">
              {/*<!-- MENU MAIN -->*/}
              <ul className="menu-main">
                {/*<!-- MENU MAIN ITEM -->*/}
                <li className="menu-main-item">
                  {/*<!-- MENU MAIN ITEM LINK -->*/}
                  <a className="menu-main-item-link" href="#">Join us!</a>
                  {/*<!-- /MENU MAIN ITEM LINK -->*/}
                </li>
                {/*<!-- /MENU MAIN ITEM -->*/}

                {/*<!-- MENU MAIN ITEM -->*/}
                <li className="menu-main-item">
                  {/*<!-- MENU MAIN ITEM LINK -->*/}
                  <a className="menu-main-item-link" href="#">About Cromy</a>
                  {/*<!-- /MENU MAIN ITEM LINK -->*/}
                </li>
                {/*<!-- /MENU MAIN ITEM -->*/}

                {/*<!-- MENU MAIN ITEM -->*/}
                <li className="menu-main-item">
                  {/*<!-- MENU MAIN ITEM LINK -->*/}
                  <a className="menu-main-item-link" href="#">FAQs</a>
                  {/*<!-- /MENU MAIN ITEM LINK -->*/}
                </li>
                {/*<!-- /MENU MAIN ITEM -->*/}

              </ul>
              {/*<!-- /MENU MAIN -->*/}
            </nav>
            {/*<!-- /NAVIGATION -->*/}
          </div>
          {/*<!-- /HEADER ACTIONS -->*/}

          {/*<!-- HEADER ACTIONS -->*/}
          <div className="header-actions search-bar">
            {/*<!-- INTERACTIVE INPUT -->*/}
            <div className="interactive-input light">
              <input type="text" id="search-main" name="search_main" placeholder="Search here for NFT games & Experiences..." />
              {/*<!-- INTERACTIVE INPUT ICON WRAP -->*/}
              <div className="interactive-input-icon-wrap">
                {/*<!-- INTERACTIVE INPUT ICON -->*/}
                <svg className="interactive-input-icon icon-magnifying-glass light-icon">
                  <use xlinkHref="#svg-magnifying-glass"></use>
                </svg>
                {/*<!-- /INTERACTIVE INPUT ICON -->*/}
              </div>
              {/*<!-- /INTERACTIVE INPUT ICON WRAP -->*/}

              {/*<!-- INTERACTIVE INPUT ACTION -->*/}
              <div className="interactive-input-action">
                {/*<!-- INTERACTIVE INPUT ACTION ICON -->*/}
                <svg className="interactive-input-action-icon icon-cross-thin">
                  <use xlinkHref="#svg-cross-thin"></use>
                </svg>
                {/*<!-- /INTERACTIVE INPUT ACTION ICON -->*/}
              </div>
              {/*<!-- /INTERACTIVE INPUT ACTION -->*/}
            </div>
            {/*<!-- /INTERACTIVE INPUT -->*/}

            {/*<!-- DROPDOWN BOX -->*/}
            <div className="dropdown-box padding-bottom-small header-search-dropdown">

              {/*<!-- DROPDOWN BOX CATEGORY -->*/}
              <div className="dropdown-box-category">
                {/*<!-- DROPDOWN BOX CATEGORY TITLE -->*/}
                <p className="dropdown-box-category-title">DAPPs Launcher</p>
                {/*<!-- /DROPDOWN BOX CATEGORY TITLE -->*/}
              </div>
              {/*<!-- /DROPDOWN BOX CATEGORY -->*/}

              {/*<!-- DROPDOWN BOX LIST -->*/}
              <div className="dropdown-box-list small no-scroll">
                {/*<!-- DROPDOWN BOX LIST ITEM -->*/}
                <a className="dropdown-box-list-item" href="/game/comic">
                  {/*<!-- USER STATUS -->*/}
                  <div className="user-status no-padding-top">
                    {/*<!-- USER STATUS AVATAR -->*/}
                    <div className="user-status-avatar">
                      {/*<!-- PICTURE -->*/}
                      <figure className="picture small round liquid">
                        <img src="/img/launcher/marketplace/items/01.jpg" className="object-cover rounded-lg" alt="item-07" />
                      </figure>
                      {/*<!-- /PICTURE -->*/}
                    </div>
                    {/*<!-- /USER STATUS AVATAR -->*/}

                    {/*<!-- USER STATUS TITLE -->*/}
                    <p className="user-status-title"><span className="bold">The Walking Dead</span></p>
                    {/*<!-- /USER STATUS TITLE -->*/}

                    {/*<!-- USER STATUS TEXT -->*/}
                    <p className="user-status-text">Limited edition</p>
                    {/*<!-- /USER STATUS TEXT -->*/}

                    {/*<!-- USER STATUS ICON -->*/}
                    <div className="user-status-icon">
                      {/*<!-- ICON MARKETPLACE -->*/}
                      <svg className="icon-marketplace">
                        <use xlinkHref="#svg-quests"></use>
                      </svg>
                      {/*<!-- /ICON MARKETPLACE -->*/}
                    </div>
                    {/*<!-- /USER STATUS ICON -->*/}
                  </div>
                  {/*<!-- /USER STATUS -->*/}
                </a>
                {/*<!-- /DROPDOWN BOX LIST ITEM -->*/}

                {/*<!-- DROPDOWN BOX LIST ITEM -->*/}
                <a className="dropdown-box-list-item" href="/game/sticker-album">
                  {/*<!-- USER STATUS -->*/}
                  <div className="user-status no-padding-top">
                    {/*<!-- USER STATUS AVATAR -->*/}
                    <div className="user-status-avatar">
                      {/*<!-- PICTURE -->*/}
                      <figure className="picture small round liquid">
                        <img src="/img/launcher/marketplace/items/02.jpg" className="object-cover rounded-lg" alt="item-07" />
                      </figure>
                      {/*<!-- /PICTURE -->*/}
                    </div>
                    {/*<!-- /USER STATUS AVATAR -->*/}

                    {/*<!-- USER STATUS TITLE -->*/}
                    <p className="user-status-title"><span className="bold">Bizarrap Sticker Album</span></p>
                    {/*<!-- /USER STATUS TITLE -->*/}

                    {/*<!-- USER STATUS TEXT -->*/}
                    <p className="user-status-text">Artist Collection</p>
                    {/*<!-- /USER STATUS TEXT -->*/}

                    {/*<!-- USER STATUS ICON -->*/}
                    <div className="user-status-icon">
                      {/*<!-- ICON MARKETPLACE -->*/}
                      <svg className="icon-marketplace">
                        <use xlinkHref="#svg-quests"></use>
                      </svg>
                      {/*<!-- /ICON MARKETPLACE -->*/}
                    </div>
                    {/*<!-- /USER STATUS ICON -->*/}
                  </div>
                  {/*<!-- /USER STATUS -->*/}
                </a>
                {/*<!-- /DROPDOWN BOX LIST ITEM -->*/}

                {/*<!-- DROPDOWN BOX LIST ITEM -->*/}
                <a className="dropdown-box-list-item" href="/game/musical-booklet-vol-2">
                  {/*<!-- USER STATUS -->*/}
                  <div className="user-status no-padding-top">
                    {/*<!-- USER STATUS AVATAR -->*/}
                    <div className="user-status-avatar">
                      {/*<!-- PICTURE -->*/}
                      <figure className="picture small round liquid">
                        <img src="/img/launcher/marketplace/items/03.jpg" className="object-cover rounded-lg" alt="item-07" />
                      </figure>
                      {/*<!-- /PICTURE -->*/}
                    </div>
                    {/*<!-- /USER STATUS AVATAR -->*/}

                    {/*<!-- USER STATUS TITLE -->*/}
                    <p className="user-status-title"><span className="bold">Gorillaz Music Booklet</span></p>
                    {/*<!-- /USER STATUS TITLE -->*/}

                    {/*<!-- USER STATUS TEXT -->*/}
                    <p className="user-status-text">Cromy Exclusive</p>
                    {/*<!-- /USER STATUS TEXT -->*/}

                    {/*<!-- USER STATUS ICON -->*/}
                    <div className="user-status-icon">
                      {/*<!-- ICON MARKETPLACE -->*/}
                      <svg className="icon-marketplace">
                        <use xlinkHref="#svg-quests"></use>
                      </svg>
                      {/*<!-- /ICON MARKETPLACE -->*/}
                    </div>
                    {/*<!-- /USER STATUS ICON -->*/}
                  </div>
                  {/*<!-- /USER STATUS -->*/}
                </a>
                {/*<!-- /DROPDOWN BOX LIST ITEM -->*/}

                {/*<!-- DROPDOWN BOX LIST ITEM -->*/}
                <a className="dropdown-box-list-item" href="/game/iota-mural">
                  {/*<!-- USER STATUS -->*/}
                  <div className="user-status no-padding-top">
                    {/*<!-- USER STATUS AVATAR -->*/}
                    <div className="user-status-avatar">
                      {/*<!-- PICTURE -->*/}
                      <figure className="picture small round liquid">
                        <img src="/img/launcher/marketplace/items/04.jpg" className="object-cover rounded-lg" alt="item-07" />
                      </figure>
                      {/*<!-- /PICTURE -->*/}
                    </div>
                    {/*<!-- /USER STATUS AVATAR -->*/}

                    {/*<!-- USER STATUS TITLE -->*/}
                    <p className="user-status-title"><span className="bold">IOTA Mural</span></p>
                    {/*<!-- /USER STATUS TITLE -->*/}

                    {/*<!-- USER STATUS TEXT -->*/}
                    <p className="user-status-text">Art Collaborations</p>
                    {/*<!-- /USER STATUS TEXT -->*/}

                    {/*<!-- USER STATUS ICON -->*/}
                    <div className="user-status-icon">
                      {/*<!-- ICON MARKETPLACE -->*/}
                      <svg className="icon-marketplace">
                        <use xlinkHref="#svg-quests"></use>
                      </svg>
                      {/*<!-- /ICON MARKETPLACE -->*/}
                    </div>
                    {/*<!-- /USER STATUS ICON -->*/}
                  </div>
                  {/*<!-- /USER STATUS -->*/}
                </a>
                {/*<!-- /DROPDOWN BOX LIST ITEM -->*/}
              </div>
              {/*<!-- /DROPDOWN BOX LIST -->*/}
            </div>
            {/*<!-- /DROPDOWN BOX -->*/}
          </div>
          {/*<!-- /HEADER ACTIONS -->*/}

          {/*<!-- HEADER ACTIONS -->*/}
          <div className="header-actions" style={{ visibility: 'hidden'}}>
            {/*<!-- PROGRESS STAT -->*/}
            <div className="progress-stat">
              {/*<!-- BAR PROGRESS WRAP -->*/}
              <div className="bar-progress-wrap">
                {/*<!-- BAR PROGRESS INFO -->*/}
                <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
                {/*<!-- /BAR PROGRESS INFO -->*/}
              </div>
              {/*<!-- /BAR PROGRESS WRAP -->*/}

              {/*<!-- PROGRESS STAT BAR -->*/}
              <div id="logged-user-level" className="progress-stat-bar"></div>
              {/*<!-- /PROGRESS STAT BAR -->*/}
            </div>
            {/*<!-- /PROGRESS STAT -->*/}
          </div>
          {/*<!-- /HEADER ACTIONS -->*/}

          {/*<!-- HEADER ACTIONS -->*/}
          <div className="header-actions">
            {/*<!-- ACTION LIST -->*/}
            <div className="action-list light">
              {/*<!-- CONNECT WALLET -->*/}
              <div className="my-auto">
                <ConnectWallet />
              </div>
              {/*<!-- /CONNECT WALLET -->*/}
            </div>
            {/*<!-- /ACTION LIST -->*/}

          </div>
          {/*<!-- /HEADER ACTIONS -->*/}
        </header>
        {/*<!-- /HEADER -->*/}

        {/*<!-- FLOATY BAR -->*/}
        <aside className="floaty-bar bg-gradient-to-t from-red-500 to-red-600">
          {/*<!-- BAR ACTIONS -->*/}
          <div className="bar-actions">
            {/*<!-- PROGRESS STAT -->*/}
            <div className="progress-stat">
              {/*<!-- BAR PROGRESS WRAP -->*/}
              <div className="bar-progress-wrap">
                {/*<!-- BAR PROGRESS INFO -->*/}
                <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
                {/*<!-- /BAR PROGRESS INFO -->*/}
              </div>
              {/*<!-- /BAR PROGRESS WRAP -->*/}

              {/*<!-- PROGRESS STAT BAR -->*/}
              <div id="logged-user-level-cp" className="progress-stat-bar"></div>
              {/*<!-- /PROGRESS STAT BAR -->*/}
            </div>
            {/*<!-- /PROGRESS STAT -->*/}
          </div>
          {/*<!-- /BAR ACTIONS -->*/}

          {/*<!-- BAR ACTIONS -->*/}
          <div className="bar-actions">
            {/*<!-- ACTION LIST -->*/}
            <div className="action-list dark">
              {/*<!-- CONNECT WALLET -->*/}
              <div className="my-auto">
                <ConnectWallet />
              </div>
              {/*<!-- /CONNECT WALLET -->*/}

            </div>
            {/*<!-- /ACTION LIST -->*/}

          </div>
          {/*<!-- /BAR ACTIONS -->*/}
        </aside>
        {/*<!-- /FLOATY BAR -->*/}

        {/*<!-- CONTENT GRID -->*/}
        <div className="content-grid">
          {/*<!-- SECTION BANNER -->*/}
          <div className="section-banner">
            {/*<!-- SECTION BANNER ICON -->*/}
            <img className="section-banner-icon" src="/img/launcher/banner/marketplace-icon.png" alt="marketplace-icon" />
            {/*<!-- /SECTION BANNER ICON -->*/}

            {/*<!-- SECTION BANNER TITLE -->*/}
            <p className="section-banner-title">DAPPSTER</p>
            {/*<!-- /SECTION BANNER TITLE -->*/}

            {/*<!-- SECTION BANNER TEXT -->*/}
            <p className="section-banner-text">Start now to collect and play!</p>
            {/*<!-- /SECTION BANNER TEXT -->*/}
          </div>
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
              <p className="product-category-box-title">Browse all</p>
              {/*<!-- /PRODUCT CATEGORY BOX TITLE -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TEXT -->*/}
              <p className="product-category-box-text">Check out all our own & 3rd party NFT DApps.</p>
              {/*<!-- /PRODUCT CATEGORY BOX TEXT -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TAG -->*/}
              <p className="product-category-box-tag">4 items</p>
              {/*<!-- /PRODUCT CATEGORY BOX TAG -->*/}
            </a>
            {/*<!-- /PRODUCT CATEGORY BOX -->*/}

            {/*<!-- PRODUCT CATEGORY BOX -->*/}
            <a className="product-category-box category-featured" href="#">
              {/*<!-- PRODUCT CATEGORY BOX TITLE -->*/}
              <p className="product-category-box-title">NFTs</p>
              {/*<!-- /PRODUCT CATEGORY BOX TITLE -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TEXT -->*/}
              <p className="product-category-box-text"><b>Cromy® seal of quality</b> ensures that each collection <br /> has attained our quality standard.</p>
              {/*<!-- /PRODUCT CATEGORY BOX TEXT -->*/}

              {/*<!-- PRODUCT CATEGORY BOX TAG -->*/}
              <p className="product-category-box-tag mt-4">- items</p>
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
                  Bizarrap joined forces with Cromy to create this incredible sticker album. Grab your stikcer packs here!
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
    {/*<!-- app -->*/}
    <script src="/launcher/js/utils/app.js"></script>
    {/*<!-- page loader -->*/}
    <script src="/launcher/js/utils/page-loader.js"></script>
    {/*<!-- simplebar -->*/}
    <script src="/launcher/js/vendor/simplebar.min.js"></script>
    {/*<!-- liquidify -->*/}
    <script src="/launcher/js/utils/liquidify.js"></script>
    {/*<!-- XM_Plugins -->*/}
    <script src="/launcher/js/vendor/xm_plugins.min.js"></script>
    {/*<!-- global.tooltips -->*/}
    <script src="/launcher/js/global/global.tooltips.js"></script>
    {/*<!-- header -->*/}
    <script src="/launcher/js/header/header.js"></script>
    {/*<!-- sidebar -->*/}
    <script src="/launcher/js/sidebar/sidebar.js"></script>
    {/*<!-- form.utils -->*/}
    <script src="/launcher/js/form/form.utils.js"></script>
    {/*<!-- SVG icons -->*/}
    <script src="/launcher/js/utils/svg-loader.js"></script>

    </>
  )
}

export default Launcher;
