import { Album, Footer, Header } from '../../../src/components';
import { getAlbum } from '../../../src/services/collectionsService';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState(null);

  useEffect(async () => {
    const album = await getAlbum(id);
    setAlbum(album);
  }, [id])

  return (
      <>
        <Head>
          <title>Cromy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header minorOpacityOnScroll title={album?.title} subtitle={album?.description} />
        <div className="flex flex-col">
          <Album album={album} />
        </div>
        <Footer />
      </>
  )
}

export default Games;
