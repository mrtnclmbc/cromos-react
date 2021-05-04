import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';

const HeroSection = (props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We give you real reasons
              <br className="hidden lg:inline-block" />to collect NTFs.
            </h1>
            <p className="mb-8 leading-relaxed">Buy, collect and trade NTFs with playable value. Use your NTFs in our gamified experiences. Welcome to Cromy.</p>
            <div className="flex justify-center">
              <button className="text-white bg-indigo-500 border-0 py-3 px-6 w-80 flex focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Discover NFTs Experiences
                <ArrowCircleRightIcon className="w-7 h-7 self-end ml-2"/>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;
