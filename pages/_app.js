import './style.scss';
import 'tailwindcss/tailwind.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../public/launcher/css/styles.css';

import { Footer, Navbar } from '../src/components';
import React, { useEffect, useState } from 'react';

import ApplicationProvider from '../src/state/store';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Setup darkmode
    setDarkMode(
      localStorage.getItem('mode') ? parseInt(localStorage.getItem('mode')) : 0,
    );
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
        </Head>
        <Component {...pageProps} isMobile={isMobile} />
      </ApplicationProvider>
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
      {/*<!-- global.accordions -->*/}
      <script src="/launcher/js/global/global.accordions.js"></script>
      {/*<!-- global.hexagons -->*/}
      <script src="/launcher/js/global/global.hexagons.js"></script>
      {/*<!-- header -->*/}
      <script src="/launcher/js/header/header.js"></script>
      {/*<!-- sidebar -->*/}
      <script src="/launcher/js/sidebar/sidebar.js"></script>
      {/*<!-- form.utils -->*/}
      <script src="/launcher/js/form/form.utils.js"></script>
      {/*<!-- SVG icons -->*/}
      <script src="/launcher/js/utils/svg-loader.js"></script>
      {/* <!-- sidebar --> */}
      <script src="/launcher/js/sidebar/sidebar.js"></script>
      {/* <!-- SVG icons --> */}
      <script src="/launcher/js/utils/svg-loader.js"></script>
    </>
  );
};

export default App;
