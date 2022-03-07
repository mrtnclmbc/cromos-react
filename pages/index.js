import {
  Launcher,
  FeaturedRow,
  HeroSection,
  ServicesRow,
  SubscribeRow,
} from '../src/components';

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="flex flex-col" style={{ height: "100%", overflow: "hidden" }}>
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Launcher />
    </div>
  )
}
