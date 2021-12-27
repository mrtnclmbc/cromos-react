import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";

import { Footer, Header } from './';

const Launcher = (props) => {
  const [experienceTextOpacity, setExperienceTextOpacity] = useState(0)
  const [cryptoTextOpacity, setCryptoTextOpacity] = useState(0)
  const [collectiblesTextOpacity, setCollectiblesTextOpacity] = useState(0)
  const [windowHeight, setWindowHeight] = useState(700)
  const contentDivRef = useRef(null)
  
  useEffect(() => {
    setTimeout(() => setExperienceTextOpacity(1), 2000);
    setTimeout(() => setCryptoTextOpacity(1), 3000);
    setTimeout(() => setCollectiblesTextOpacity(1), 4000);
    setWindowHeight(window?.innerHeight);
  }, [])

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

        <Header transparency />

        <div style={{ display: 'block', position: 'relative', minHeight: windowHeight, width: "100%", overflow: 'hidden', zIndex: 0 }} className="w-full">
          <div className="overlay bg-gradient-to-tl from-yellow-300 via-red-500 to-red-800"></div>

          <video playsInline autoPlay muted loop id="hero-section-video">
            <source src={"/videos/hero_background.mp4"} type="video/mp4" />
          </video>

          <div className="hero-content flex flex-col items-center justify-center">
            <div style={{ marginTop: 30 }} className={"flex lg:flex-row text-center flex-col text-center" + (collectiblesTextOpacity === 1 ? " translate-hero-title" : "")}>
              <h2 style={{ fontSize: '4.7em', opacity: experienceTextOpacity }} className="section-title text-white drop-shadow-xl">Experience</h2>
              <h2 style={{ fontSize: '4.7em', opacity: cryptoTextOpacity }} className="section-title text-white drop-shadow-xl sm:ml-5">Crypto</h2>
              <h2 style={{ fontSize: '4.7em', opacity: collectiblesTextOpacity }} className="section-title text-white drop-shadow-xl sm:ml-5">Collectibles</h2>
            </div>

            <p style={{ opacity: 0, fontSize: '1.12em' }} className={"text-center text-white" + (collectiblesTextOpacity === 1 ? " fade-hero-subtitle" : "")}>Select your favorite NFT experience in our DAPPSTER® and start playing now in the CromyVerse!</p>
            <button onClick={() => contentDivRef.current.scrollIntoView({behavior: 'smooth'})} style={{ position: 'absolute', bottom: 50, borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 25, height: 50, width: 150, opacity: 0 }} className={"text-white flex items-center justify-center" + (collectiblesTextOpacity === 1 ? " fade-hero-button fade-hero-button-animation-loop" : "")}>
              PRESS START
            </button>
          </div>
        </div>

        {/*<!-- CONTENT GRID -->*/}
        <div ref={contentDivRef} className="content-grid">

          {/* <div className="p-7 rounded-2xl ">
            <Fade direction="up" fraction={0.8} triggerOnce>
              <div id="start" className="section-header justify-center">
                <div className="section-header-info text-center">
                  <p className="section-pretitle">Welcome To The CromyVerse 👋</p>
                  <h2 className="section-title">Choose Your Destiny</h2>
                </div>
              </div>
            </Fade>
            <Fade direction="up" fraction={1} triggerOnce>
              <div className="grid grid-half centered lg:px-12">
                <Tilt>
                  <a className="product-category-box category-all rounded-full shadow-lg" href="#">
                    <p className="product-category-box-title">Browse NFT Experiences</p>
                    <p className="product-category-box-text">Check out all our own & 3rd party NFT Experiences.</p>
                    <p className="product-category-box-tag">4 Experiences</p>
                  </a>
                </Tilt>
                <Tilt>
                  <a className="product-category-box category-featured" href="#">
                    <p className="product-category-box-title">Browse NFT Collections</p>
                    <p className="product-category-box-text"><b>Cromy®</b> seal of quality ensures that each collection <br /> has attained our quality standard.</p>
                    <p className="product-category-box-tag">5 Collections</p>
                  </a>
                </Tilt>
              </div>
            </Fade>
          </div> */}

          <Fade triggerOnce>
            <div className="section-header justify-center flex p-5 rounded-2xl">
              <div className="section-header-info text-center">
                <p className="section-pretitle">See what's new in our DAPPSTER®!</p>
                <h2 className="section-title">Discover NFT Experiences 🔥</h2>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce>
            <div className="grid grid-3-3-3-3 centered">
              <Tilt>
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
                    <p className="text-sticker"><span className="highlighted"></span>Limited Edition</p>
                    {/*<!-- /TEXT STICKER -->*/}

                    {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                    <p className="product-preview-title"><a href="game/comic">The Walking Dead</a></p>
                    {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                    {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                    <p className="product-preview-category digital"><a href="game/comic">Comic</a></p>
                    {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                    {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                    <div className="product-preview-text-container">
                      <p className="product-preview-text">
                        The world we knew is gone. Collect this awesome comic to survive the zombie apocalypse!
                      </p>
                    </div>
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
              </Tilt>
              {/*<!-- /PRODUCT PREVIEW -->*/}

              {/*<!-- PRODUCT PREVIEW -->*/}
              <Tilt>
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
                    <p className="text-sticker"><span className="highlighted"></span>Artist Collection</p>
                    {/*<!-- /TEXT STICKER -->*/}

                    {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                    <p className="product-preview-title"><a href="game/sticker-album">Bizarrap Sticker Album</a></p>
                    {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                    {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                    <p className="product-preview-category digital"><a href="game/sticker-album">Sticker album</a></p>
                    {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                    {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                    <div className="product-preview-text-container">
                      <p className="product-preview-text">
                        Bizarrap joined forces with Cromy to create this incredible sticker album. Grab your sticker packs here!
                      </p>
                    </div>
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
              </Tilt>
              {/*<!-- /PRODUCT PREVIEW -->*/}

              {/*<!-- PRODUCT PREVIEW -->*/}
              <Tilt>
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
                    <p className="product-preview-title"><a href="game/musical-booklet-vol-2">Gorillaz Music Booklet</a></p>
                    {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                    {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                    <p className="product-preview-category digital"><a href="game/musical-booklet-vol-2">Music booklet</a></p>
                    {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                    {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                    <div className="product-preview-text-container">
                      <p className="product-preview-text">
                        Exclusive gorillaz NFTs collection in collaboration with Cromy. Get your unique Gorillaz NFTs!
                      </p>
                    </div>
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
              </Tilt>
              {/*<!-- /PRODUCT PREVIEW -->*/}

              {/*<!-- PRODUCT PREVIEW -->*/}
              <Tilt>
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
                    <div className="product-preview-text-container">
                      <p className="product-preview-text">
                        Collect all the parts to uncover and own this awesome IOTA Cromy collectible made by the community.
                      </p>
                    </div>
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
              </Tilt>
              {/*<!-- /PRODUCT PREVIEW -->*/}

              {/*<!-- PRODUCT PREVIEW -->*/}
              <a href="mailto:hello@cromy.io">
                <Tilt>
                  <div className="product-preview">
                    {/*<!-- PRODUCT PREVIEW IMAGE -->*/}
                      <figure className="product-preview-image liquid bg-gray-300" />
                    {/*<!-- /PRODUCT PREVIEW IMAGE -->*/}

                    {/*<!-- PRODUCT PREVIEW INFO -->*/}
                    <div className="product-preview-info">
                      {/*<!-- TEXT STICKER -->*/}
                      <p className="text-sticker"><span className="highlighted"></span>To Be Defined</p>
                      {/*<!-- /TEXT STICKER -->*/}

                      {/*<!-- PRODUCT PREVIEW TITLE -->*/}
                      <p className="product-preview-title">Build your NFT experience!</p>
                      {/*<!-- /PRODUCT PREVIEW TITLE -->*/}

                      {/*<!-- PRODUCT PREVIEW CATEGORY -->*/}
                      <p className="product-preview-category digital">To be defined</p>
                      {/*<!-- /PRODUCT PREVIEW CATEGORY -->*/}

                      {/*<!-- PRODUCT PREVIEW TEXT -->*/}
                      <div className="product-preview-text-container">
                        <p className="product-preview-text">
                          Do you have a license or brand and want to monetize your community through NFTs? Let's build your NFT experience together!
                        </p>
                      </div>
                      {/*<!-- /PRODUCT PREVIEW TEXT -->*/}
                    </div>
                    {/*<!-- /PRODUCT PREVIEW INFO -->*/}

                    {/*<!-- PRODUCT PREVIEW META -->*/}
                    <div className="product-preview-meta">
                      {/*<!-- PRODUCT PREVIEW AUTHOR -->*/}
                      <div className="product-preview-author pl-10">
                        {/*<!-- PRODUCT PREVIEW AUTHOR IMAGE -->*/}
                        <a className="product-preview-author-image user-avatar micro no-border">
                          {/*<!-- USER AVATAR CONTENT -->*/}
                          <div className="user-avatar-content w-8 h-8 bg-gray-300 rounded-full" />
                          {/*<!-- /USER AVATAR CONTENT -->*/}
                        </a>
                        {/*<!-- /PRODUCT PREVIEW AUTHOR IMAGE -->*/}

                        {/*<!-- PRODUCT PREVIEW AUTHOR TITLE -->*/}
                        <p className="product-preview-author-title">Published By</p>
                        {/*<!-- /PRODUCT PREVIEW AUTHOR TITLE -->*/}

                        {/*<!-- PRODUCT PREVIEW AUTHOR TEXT -->*/}
                        <p className="product-preview-author-text">You</p>
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
                          <svg className="rating-icon icon-star">
                            <use xlinkHref="#svg-star"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </a>
            </div>
          </Fade>

        {/*<!-- BUILDER SECTION -->*/}
        <Fade direction="left" triggerOnce>
          <div style={{ marginTop: 80, marginBottom: 30 }} className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 xl:py-0 px-5 bg-gradient-to-tl from-yellow-400 via-red-500 to-red-800 rounded-2xl shadow-lg">
              <div className="flex justify-center items-center self-center">
                <div className="section-header-info text-center items-center flex flex-col">
                  <p style={{ color: 'white' }} className="section-pretitle">Coming Soon™</p>
                  <h2 style={{ fontSize: '2.9em' }} className="section-title text-white drop-shadow-md">Cromy Experience Builder 🧩</h2>
                  <p className="mt-5 md:mb-0 text-white">With the Experience Builder, you will be able to create personalized NFT experiences for your community, enabling new possibilities. No coding skills required, just drag & drop.<br /><br /><b>Probably nothing.</b></p>
                  <span style={{ marginTop: 50, borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 25, height: 50, width: 150 }} className="mt-10 flex text-white items-center justify-center fade-hero-button-animation-loop">
                    <a className="text-white" href="mailto:hello@cromy.io">CONTACT US</a>
                  </span>
                </div>
              </div>
              <div className="flex justify-center self-center lg:p-10">
                <Tilt>
                  <img className="shadow-md rounded-lg flex" src="/img/builder.png" />
                </Tilt>
              </div>
            </div>
          </div>
        </Fade>
        {/*<!-- /BUILDER SECTION -->*/}

        {/*<!-- BLOG SECTION -->*/}
        <Fade direction="right" triggerOnce>
          <div id="start" className="section-header justify-center">
            <div className="section-header-info text-center">
              <p className="section-pretitle">Learn More About Cromy & NFTs</p>
              <h2 className="section-title">Latest From Our Blog ✍️</h2>
            </div>
          </div>

          <div className="grid blog centered">
            <Tilt>
              <div className="product-preview shadow-xl" style={{ width: 400 }}>
                <a>
                  <figure className="product-preview-image liquid bg-gray-300" />
                </a>

                <div className="product-preview-info">
                  <p className="product-preview-title text-center"><a>Coming Soon</a></p>
                  <div className="product-preview-text-container">
                    <p className="product-preview-text text-center">
                      There are no posts yet. Stay tuned to be the first one to know about new entries in our blog!
                    </p>
                  </div>
                </div>

                <div className="product-preview-meta">
                  <div style={{ paddingLeft: 0 }} className="product-preview-author">
                    <p className="product-preview-author-title">Published By</p>
                    <p className="product-preview-author-text"><a>Brian Sztamfater</a></p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </Fade>
        {/*<!-- /BLOG SECTION -->*/}

        {/*<!-- CONTACT & COMMUNITY SECTION -->*/}
        <div style={{ marginTop: 50 }} className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 xl:py-0 px-5">
            <Fade direction="left" triggerOnce>
              <div style={{ height: 280, background: 'linear-gradient(to right, #eb3136, #eb4f35)' }} className="flex justify-center items-center self-center px-5 rounded-2xl shadow-lg">
                <div className="section-header-info flex flex-col items-center">
                  <h2 style={{ fontSize: '2.5em' }} className="section-title drop-shadow-md text-white">Contact us</h2>
                  <p className="mt-5 md:mb-0 text-white text-center">We would love to meet you and help you to make gamified NFT experiences. We are sure you'll join Cromy family.</p>
                  <span style={{ marginTop: 30, borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 25, height: 50, width: 130 }} className="mt-10 flex text-white items-center justify-center fade-hero-button-animation-loop">
                    <a className="text-white" href="mailto:hello@cromy.io">Get in touch</a>
                  </span>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
            <div style={{ height: 280, background: 'linear-gradient(to right, #eb4f35, #FFD700)' }} className="flex justify-center items-center self-center px-5 rounded-2xl shadow-lg">
              <div className="section-header-info flex flex-col items-center">
                <h2 style={{ fontSize: '2.5em' }} className="section-title drop-shadow-md text-white text-center">Join the community</h2>
                <p className="mt-5 md:mb-0 text-white text-center">Feel free to join our community on Discord and Telegram. We need you to be involved to build the best platform possible.</p>
                <div className="flex flex-row">
                  <span style={{ marginTop: 30, marginRight: 5, borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 25, height: 50, width: 130 }} className="mt-10 flex text-white items-center justify-center fade-hero-button-animation-loop">
                    <a className="text-white">Discord</a>
                  </span>
                  <span style={{ marginTop: 30, marginLeft: 5, borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 25, height: 50, width: 130 }} className="mt-10 flex text-white items-center justify-center fade-hero-button-animation-loop">
                    <a className="text-white">Telegram</a>
                  </span>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
        {/*<!-- /CONTACT & COMMUNITY SECTION -->*/}
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
