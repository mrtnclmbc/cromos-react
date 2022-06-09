import './style.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

import '../public/launcher/css/styles.css';
import '../public/launcher/css/vendor/tiny-slider.css';

import { Footer, LoadingIndicator, Navbar } from '../src/components';
import React, { useEffect, useState } from 'react';

import ApplicationProvider from '../src/state/store';
import Head from 'next/head';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuth, setIsAuth] = useState(null);
  const [isWrongPass, setIsWrongPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Setup darkmode
    setDarkMode(
      localStorage.getItem('mode') ? parseInt(localStorage.getItem('mode')) : 0,
    );

    // Check if authorized
    setIsAuth(localStorage.getItem('authorized') === 'true');
    
    // Naive check for mobile
    setIsMobile(
      navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
    );
  }, []);

  const toggleMode = () => {
    localStorage.setItem('mode', (1 - darkMode).toString());
    setDarkMode(1 - darkMode);
  };

  return (
    <>
      <ApplicationProvider>
        <Head>
          <title>Cromy</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                {/*<!-- app -->*/}
                {/*<!-- liquidify -->*/}
        </Head>
        {isAuth === null ? null :
        isAuth && !isLoading ? <Component {...pageProps} isMobile={isMobile} /> : (
          <div>
            <div style={{ height: '100vh' }} className="flex items-center justify-center flex-col">
              <div style={{ width: 300 }} >
                <a style={{ fontWeight: 600 }}>Restricted access.</a>
              </div>
              <div style={{ width: 300 }} className="relative">
                <input style={{ height: 45, borderRadius: 5 }} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full h-full bg-red-100 bg-opacity-30 placeholder-white rounded focus:bg-opacity-50 text-sm outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button style={{ width: 300 }} onClick={() => {
                setIsWrongPass(false)
                if (password === "TheCromyNeta2022") {
                  localStorage.setItem('authorized', true);
                  setIsLoading(true);
                  setIsAuth(true);
                  window.location.reload(false);
                } else {
                  setIsWrongPass(true)
                }
              }} className="w-50 text-black mt-3 hover:text-white border-0 py-2 px-6 focus:outline-none bg-white hover:bg-red-600 hover:shadow-lg rounded">Login</button>
              {isWrongPass && (
                <div style={{ width: 300, marginTop: 5}}>
                  <a style={{ fontWeight: 600, fontSize: 13 }} className="text-red-600">Wrong password.</a>
                </div>)}
            </div>
          </div>
        )}
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          style={{ zIndex: 99999999999999999, width: 400 }}
        />
      </ApplicationProvider>
      <script src="/launcher/js/utils/app.js"></script>
      <Script strategy="afterInteractive" src="/launcher/js/utils/liquidify.js" async></Script>
      {/*<!-- page loader -->*/}
      <Script src="/launcher/js/utils/page-loader.js"></Script>
      {/*<!-- simplebar -->*/}
      <script src="/launcher/js/vendor/simplebar.min.js"></script>
      {/*<!-- page loader -->*/}
      <script src="/launcher/js/utils/page-loader.js" />
      {/*<!-- simplebar -->*/}
      <script src="/launcher/js/vendor/simplebar.min.js" />
      {/*<!-- liquidify -->*/}
      <script src="/launcher/js/utils/liquidify.js" />
      {/*<!-- XM_Plugins -->*/}
      <script src="/launcher/js/vendor/xm_plugins.min.js" />
      {/*<!-- global.tooltips -->*/}
      <Script src="/launcher/js/global/global.tooltips.js"></Script>
      {/*<!-- global.accordions -->*/}
      <Script src="/launcher/js/global/global.accordions.js"></Script>
      {/*<!-- global.hexagons -->*/}
      <Script src="/launcher/js/global/global.hexagons.js"></Script>
      {/*<!-- header -->*/}
      <Script src="/launcher/js/header/header.js"></Script>
      {/*<!-- sidebar -->*/}
      <Script src="/launcher/js/sidebar/sidebar.js"></Script>
      {/*<!-- form.utils -->*/}
      <Script src="/launcher/js/form/form.utils.js"></Script>
      {/*<!-- SVG icons -->*/}
      <Script src="/launcher/js/utils/svg-loader.js"></Script>
      {/*<!-- Slider -->*/}
      <script src="/launcher/js/vendor/tiny-slider.min.js" />
      <Script src="/launcher/js/content/content.js"></Script>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </>
  );
};

export default App;
