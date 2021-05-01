import dynamic from 'next/dynamic';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Asset from './Asset';
import LoadingIndicator from './LoadingIndicator';

// Dynamic imports with server side rendering disabled
const Album = dynamic(() => import('./Album'), {
  ssr: false,
});

const ConnectWallet = dynamic(() => import('./ConnectWallet'), {
  ssr: false,
});

export {
  ConnectWallet,
  Footer,
  HeroSection,
  Navbar,
  Album,
  Asset,
  LoadingIndicator,
};
