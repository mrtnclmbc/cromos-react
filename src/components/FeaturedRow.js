import React from 'react';
import { GameCard } from './';

const placeholderUrl = 'https://dummyimage.com/1201x501';

const FeaturedRow = (props) => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-gray-900">Try our NFT Experiences</h1>
          <p className="mb-8 leading-relaxed text-center sm: px-20 md:px-10 lg:px-96">We are in BETA, but we already want to show you a bit of what you will be able to experience with our NFT collections on Ethereum's Rinkeby Testnet.</p>
        </div>
        <div className="container px-5 pt-2 pb-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
            <GameCard
              isAvailable={true}
              title={'Nakamoto\'s Adventures Vol. 1'}
              category={'Comic'}
              author={'Santos de los correos'}
              image={placeholderUrl}
            />
            <GameCard
              isAvailable={false}
              title={'YSY Album'}
              category={'Music Album'}
              author={'Raven Jaelani'}
              image={placeholderUrl}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedRow;
