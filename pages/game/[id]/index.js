import Head from 'next/head';
import { Album, Navbar, Footer } from '../../../src/components';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Navbar />
        <div className="flex flex-col">
          <Head>
            <title>Cromy</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Album albumId={id} />
        </div>
      <Footer />
    </>
  )
}

export default Games;
