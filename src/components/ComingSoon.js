import Link from 'next/link'
import React from 'react';

const ComingSoon = () => {
  return (
    <section className="text-gray-400 bg-gradient-to-bl from-yellow-400 via-red-500 to-red-500 body-font flex self-stretch h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/img/cromy-logo-full.png" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><b>Cromy</b> is back.<br />Now as <b>NFT</b></h1>
          <div className="flex justify-center">
            <Link href='/game/1'>
              <button className="text-white bg-transparent title-font font-bold border-2 py-3 px-12 flex focus:outline-none hover:bg-white hover:text-red-500 hover:shadow-xl mt-5 transition-all rounded text-lg">Discover +</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon;
