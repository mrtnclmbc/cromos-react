import Head from 'next/head'
import HeroSection from '../src/components/HeroSection';
import Gallery from '../src/components/Gallery';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Gallery />
    </div>
  )
}
