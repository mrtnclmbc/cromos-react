import dynamic from 'next/dynamic';
import Footer from './Footer';
import AlbumHeader from './AlbumHeader';
import Navbar from './Navbar';
import Asset from './Asset';
import LoadingIndicator from './LoadingIndicator';
import SearchBar from './SearchBar';
import HeroSection from './HeroSection';
import FeaturedRow from './FeaturedRow';
import ServicesRow from './ServicesRow';
import SubscribeRow from './SubscribeRow';
import GameCard from './GameCard';
import ComingSoon from './ComingSoon';
import AudioPlayer from './AudioPlayer';
import AssetInfo from './AssetInfo';
import Modal from './Modal';
import ModalContent from './ModalContent';

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
  AlbumHeader,
  Navbar,
  Album,
  Asset,
  LoadingIndicator,
  SearchBar,
  HeroSection,
  FeaturedRow,
  ServicesRow,
  SubscribeRow,
  GameCard,
  ComingSoon,
  AudioPlayer,
  AssetInfo,
  Modal,
  ModalContent,
};
