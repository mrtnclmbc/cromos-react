import Head from 'next/head';
import { Album } from '../../../src/components';
import { useRouter } from 'next/router';

const Games = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col">
      <Head>
        <title>Cromy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Album albumId={id} />
    </div>
  )
}

export default Games;
