import { Collectible, Footer, Header } from '../../../src/components';
import { getCollectible } from '../../../src/services/collectiblesService';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Collectibles = () => {
  const router = useRouter();
  const [collectible, setCollectible] = useState(null);

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
      const collectible = await getCollectible(id);
      setCollectible(collectible);
    }
  }, [router.query])

  return (
    <>
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col bg-white">
        <Collectible collectible={collectible} />
      </div>
      <Footer />
    </>
  )
}

export default Collectibles;
