import 'tailwindcss/tailwind.css';
import './style.scss';

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
        </Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar {...pageProps} darkMode={darkMode} toggleMode={toggleMode} />
        <Component {...pageProps} isMobile={isMobile} />
        <Footer />
      </ApplicationProvider>
    </>
  );
};

export default App;
