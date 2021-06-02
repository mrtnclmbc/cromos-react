import {
  FeaturedRow,
  HeroSection,
  ServicesRow,
  SubscribeRow,
  ComingSoon,
} from '../src/components';

import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Coming Soon Replacement
        <Head>
          <title>Cromy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroSection />
        <FeaturedRow />
        <ServicesRow />
        <SubscribeRow />
      */}
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />
    </div>
  )
}
