import { Album, Footer, Header } from '../../../src/components';

import Head from 'next/head';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
      <>
        <Head>
          <title>Cromy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="flex flex-col">
          <Album albumId={id} />
        </div>
        <Footer />
      </>
  )
}

export default Games;
