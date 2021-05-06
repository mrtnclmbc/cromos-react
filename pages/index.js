import { Album } from '../src/components';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Album />
    </div>
  )
}