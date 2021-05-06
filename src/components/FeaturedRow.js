import React from 'react';
import Link from 'next/link'

const FeaturedRow = (props) => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-gray-900">Try our NFT Experiences</h1>
          <p className="mb-8 leading-relaxed text-center sm: px-20 md:px-10 lg:px-96">We are in BETA, but we already want to show you a bit of what you will be able to experiencewith our NFT collections on Ethereum's Rinkeby Testnet.</p>
        </div>
        <div className="container px-5 pt-2 pb-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
            <div className="sm:w-1/2 mb-10 px-4 max-w-md">
              <div className="rounded-lg h-xl overflow-hidden">
                <img alt="Featured experience" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-lg font-medium text-indigo-800 mt-6 mb-3">Comic</h2>
              <p className="leading-relaxed font-bold text-black">Nakamoto's Adventure</p>
              <p className="leading-relaxed text-base">Santos de los correos</p>
              <Link href="/game/1">
                <button className="flex mx-auto mt-6 text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 shadow hover:shadow-xl rounded">Coming Soon</button>
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 max-w-md">
              <div className="rounded-lg h-xl overflow-hidden">
                <img alt="Featured experience" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
              </div>
              <h2 className="title-font text-lg font-medium text-indigo-800 mt-6 mb-3">Music Album</h2>
              <p className="leading-relaxed font-bold text-black">YSY Album</p>
              <p className="leading-relaxed text-base">Raven Jaelani</p>
              <button className="flex mx-auto mt-6 text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 shadow hover:shadow-xl rounded">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedRow;
