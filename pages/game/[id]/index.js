import { Album, Footer, Header } from '../../../src/components';
import { getDapp } from '../../../src/services/dappsService';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const [album, setAlbum] = useState(null);

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
      const album = await getDapp(id);
      setAlbum(album);
    }
  }, [router.query])

  return (
      <>
        <Head>
          <title>Cromy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header minorOpacityOnScroll title={album?.title || 'Loading...'} subtitle={album?.description} />
        <div className="flex flex-col">
          <Album album={album} />
        </div>
        <Footer />
      </>
  )
}

export default Games;
