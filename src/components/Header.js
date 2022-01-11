import React, { useContext, useEffect, useRef, useState } from 'react';
import { ConnectWallet, SearchBar } from './';
import { useRect } from '@reactour/utils'
import Mask from '@reactour/mask'
import { ApplicationContext } from '../state/store';

const Header = ({ title, subtitle, transparency, minorOpacityOnScroll }) => {
  const { isTourOpen, setIsTourOpen } = useContext(ApplicationContext);
  const refConnectWalletButton = useRef(null);
  const [updater, setUpdater] = useState([])
  const [scrolled, setScrolled] = useState(0)
  const sizes = useRect(refConnectWalletButton, updater);

  useEffect(() => {
    setTimeout(() => setUpdater([]), 1000);
    window.addEventListener('scroll', () => {
      setUpdater([]);
      setScrolled(window.scrollY);
    });
    return () => window.removeEventListener('scroll', null);
  }, []);

  return (
    <>
      {/*<!-- HEADER -->*/}
      <header style={!transparency && !(minorOpacityOnScroll && scrolled > 0) ? { backgroundColor: '#dc2626' } : {}} className={"header" + ((transparency && scrolled >= 520) ? ' sticky' : (minorOpacityOnScroll && scrolled > 0) ? ' sticky-transparent' : '')}>
        {/*<!-- HEADER ACTIONS -->*/}
        <div className="header-actions">
          {/*<!-- HEADER BRAND -->*/}
          <div className="header-brand">
            {/*<!-- LOGO -->*/}
            <div className="logo">
              {/*<!-- ICON LOGO VIKINGER -->*/}
              <a href="/">
                <img
                  className="h-auto w-24"
                  src="/logo.svg"
                  alt="Cromy logo"
                />
              </a>
              {/*<!-- /ICON LOGO VIKINGER -->*/}
            </div>
            {/*<!-- /LOGO -->*/}
          </div>
          {/*<!-- /HEADER BRAND -->*/}
        </div>
        {/*<!-- /HEADER ACTIONS -->*/}

        {/*<!-- HEADER ACTIONS -->*/}
        {title === undefined && (
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
          {title === undefined && (
            <nav className="navigation">
            {/*<!-- MENU MAIN -->*/}
            <ul className="menu-main">
              {/*<!-- MENU MAIN ITEM -->*/}
              <li className="menu-main-item">
                {/*<!-- MENU MAIN ITEM LINK -->*/}
                <a className="menu-main-item-link" href="#">Explore</a>
                {/*<!-- /MENU MAIN ITEM LINK -->*/}
              </li>
              {/*<!-- /MENU MAIN ITEM -->*/}

              {/*<!-- MENU MAIN ITEM -->*/}
              <li className="menu-main-item">
                {/*<!-- MENU MAIN ITEM LINK -->*/}
                <a className="menu-main-item-link" href="https://blog.cromy.io">About</a>
                {/*<!-- /MENU MAIN ITEM LINK -->*/}
              </li>
              {/*<!-- /MENU MAIN ITEM -->*/}

              {/*<!-- MENU MAIN ITEM -->*/}
              <li className="menu-main-item">
                {/*<!-- MENU MAIN ITEM LINK -->*/}
                <a className="menu-main-item-link" href="/faq">FAQs</a>
                {/*<!-- /MENU MAIN ITEM LINK -->*/}
              </li>
              {/*<!-- /MENU MAIN ITEM -->*/}

            </ul>
            {/*<!-- /MENU MAIN -->*/}
            </nav>
          )}
          {/*<!-- /NAVIGATION -->*/}
          </div>
        )}
        {/*<!-- /HEADER ACTIONS -->*/}

        {/*<!-- HEADER ACTIONS -->*/}
        {title === undefined && <SearchBar />}
        {/*<!-- /HEADER ACTIONS -->*/}

        {/*<!-- HEADER ACTIONS -->*/}
        {title?.length && (
          <div id="header-title" className="flex items-center justify-center header-title flex-col" style={{ marginLeft: 80 }}>
            <span className="text-white font-bold">{title}</span>
            {subtitle?.length > 0 && <span style={{ fontSize: '0.8em', marginTop: 0 }} className="text-white">{subtitle}</span>}
          </div>
        )}
        {/*<!-- /HEADER ACTIONS -->*/}

        {/*<!-- HEADER ACTIONS -->*/}
        <div className="header-actions" style={{ display: 'none'}}>
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
            <div className="my-auto" ref={refConnectWalletButton}>
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
          <div className="progress-stat hidden">
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
      {isTourOpen ? <Mask sizes={sizes} onClick={() => setIsTourOpen(false)} /> : null}
      {isTourOpen && (
        <div className="text-center text-xs pt-1 pb-1 pl-2 pr-2" style={{ position: 'absolute', top: sizes.bottom + scrolled + 20, left: sizes.left + 5, backgroundColor: 'black', borderRadius: 1000, zIndex: 99999 }}>
          <a className="text-white">👆 Connect your wallet to start</a>
        </div>
      )}
    </>
  );
}

export default Header;
