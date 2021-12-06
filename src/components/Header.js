import React, { useContext, useEffect, useRef, useState } from 'react';
import { ConnectWallet } from './';
import { useRect } from '@reactour/utils'
import Mask from '@reactour/mask'
import { ApplicationContext } from '../state/store';

const Header = (props) => {
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
      <header className="header bg-gradient-to-b from-red-500 to-red-600">
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
