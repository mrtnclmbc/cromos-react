import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";

import { Footer, Header, BoosterPackCard, GameCard } from './';
import { getDapps } from '../services/dappsService';
import { getCollectibles } from '../services/collectiblesService';

const Launcher = (props) => {
  const [experienceTextOpacity, setExperienceTextOpacity] = useState(0)
  const [cryptoTextOpacity, setCryptoTextOpacity] = useState(0)
  const [collectiblesTextOpacity, setCollectiblesTextOpacity] = useState(0)
  const [windowHeight, setWindowHeight] = useState(700)
  const [isLoadingDapps, setIsLoadingDapps] = useState(true)
  const [dapps, setDapps] = useState([])
  const [isLoadingCollectibles, setIsLoadingCollectibles] = useState(true)
  const [collectibles, setCollectibles] = useState([])
  const contentDivRef = useRef(null)
  
  useEffect(async () => {
    setTimeout(() => setExperienceTextOpacity(1), 2000);
    setTimeout(() => setCryptoTextOpacity(1), 3000);
    setTimeout(() => setCollectiblesTextOpacity(1), 4000);
    setWindowHeight(window?.innerHeight);
    const dapps = await getDapps();
    setDapps(dapps || []);
    setIsLoadingDapps(false);
    const collectibles = await getCollectibles();
    setCollectibles(collectibles || []);
    setIsLoadingCollectibles(false);
    window.app.updateGridPosition();
  }, [])

  return (
    <>
      {/*<!-- /STYLES -->*/}
        {/*<!-- PAGE LOADER -->*/}
        <div className="page-loader bg-gradient-to-bl from-yellow-400 via-red-500 to-red-800">
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
              {isLoadingDapps ? (
                <>
                  <GameCard isLoading={true} />
                  <GameCard isLoading={true} />
                  <GameCard isLoading={true} />
                  <GameCard isLoading={true} />
                </>
              ) : (
                <>
                  {dapps.map(dapp => (
                    <Tilt>
                      <GameCard
                        id={dapp?.id}
                        title={dapp?.title}
                        featuredImage={dapp?.featuredImage}
                        featuredText={dapp?.featuredText}
                        featuredTag={dapp?.featuredTag}
                        type={dapp?.type}
                        author={dapp?.author}
                      />
                    </Tilt>
                  ))}

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
                </>
              )}
            </div>
          </Fade>

          <Fade triggerOnce>
            <div className="section-header justify-center flex p-5 rounded-2xl">
              <div className="section-header-info text-center">
                <p className="section-pretitle">Start Collecting... Wen? Now!</p>
                <h2 className="section-title">Cromy Booster Packs</h2>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce>
            <div id="collectibles" className="grid grid-3-3-3-3 centered">
              {isLoadingCollectibles ? (
                <>
                  <BoosterPackCard isLoading={true} />
                  <BoosterPackCard isLoading={true} />
                  <BoosterPackCard isLoading={true} />
                  <BoosterPackCard isLoading={true} />
                </>
              ) : (
                <>
                  {collectibles.map(collectible => (
                    <Tilt>
                      <BoosterPackCard
                        id={collectible?.id}
                        title={collectible?.title}
                        description={collectible?.description}
                        featuredImage={collectible?.assetUrl}
                        price={collectible?.price}
                        currency={collectible?.currency}
                      />
                    </Tilt>
                  ))}
                </>
              )}
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
                  <p className="mt-5 md:mb-0 text-white">With the Experience Builder, you will be able to create personalized NFT experiences for your community, enabling new possibilities. No coding skills required, just your creativity.<br /><br /><b>Probably nothing.</b></p>
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
