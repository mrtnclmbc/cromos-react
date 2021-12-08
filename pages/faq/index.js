import { Faq, Footer, Header } from '../../src/components';

import Head from 'next/head';
import { useRouter } from 'next/router';

const FaqPage = () => {
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
          <Faq />
        </div>
        <Footer />
      </>
  )
}

export default FaqPage;
