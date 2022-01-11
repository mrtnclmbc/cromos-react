import AlbumHeader from './AlbumHeader';
import Asset from './Asset';
import AssetInfo from './AssetInfo';
import AudioPlayer from './AudioPlayer';
import ComingSoon from './ComingSoon';
import FeaturedRow from './FeaturedRow';
import Footer from './Footer';
import GameCard from './GameCard';
import Header from './Header';
import HeroSection from './HeroSection';
import Launcher from './Launcher';
import LoadingIndicator from './LoadingIndicator';
import Modal from './Modal';
import ModalContent from './ModalContent';
import Navbar from './Navbar';
import OnboardingSlider from './OnboardingSlider';
import SearchBar from './SearchBar';
import SectionBanner from './SectionBanner';
import ServicesRow from './ServicesRow';
import SubscribeRow from './SubscribeRow';
import ImageSlider from './ImageSlider';
import dynamic from 'next/dynamic';
import Faq from './Faq';
import BoosterPackCard from './BoosterPackCard';

// Dynamic imports with server side rendering disabled
const Album = dynamic(() => import('./Album'), {
  ssr: false,
});

const ConnectWallet = dynamic(() => import('./ConnectWallet'), {
  ssr: false,
});

const Collectible = dynamic(() => import('./Collectible'), {
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
  Launcher,
  OnboardingSlider,
  Header,
  SectionBanner,
  Faq,
  ImageSlider,
  BoosterPackCard,
  Collectible
};
