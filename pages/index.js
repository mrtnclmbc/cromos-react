import Head from 'next/head'
import { Album, HeroSection } from '../src/components';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Album />
    </div>
  )
}
