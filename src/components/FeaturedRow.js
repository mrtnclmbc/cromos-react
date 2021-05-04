import React from 'react';

const FeaturedRow = (props) => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-gray-900">Try our NFT Experiences</h1>
          <p className="mb-8 leading-relaxed text-center">Buy, collect and trade NTFs with playable value. Use your NTFs in our gamified experiences. Welcome to Cromy.</p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
            <div className="sm:w-1/2 mb-10 px-4 max-w-md">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="Featured experience" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 max-w-md">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="Featured experience" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">The Catalyzer</h2>
              <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedRow;
