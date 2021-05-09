import React from 'react';

const SubscribeRow = () => {
  return (
    <>
      <section className="bg-red-400 flex items-center justify-center py-5">
         <div className="w-full px-5 py-16 md:py-24 text-white font-light">
            <div className="w-full max-w-6xl mx-auto pb-5">
               <div className="-mx-3 md:flex items-center">
                  <div className="px-3 md:w-1/2 mb-10 md:mb-0">
                     <h1 className="text-6xl md:text-6xl font-bold mb-5 leading-tight">Stay <br className="hidden md:block" />updated.</h1>
                     <h3 className="text-white mb-7 leading-tight">Subscribe to our newsletter to receive our NFT sales and development updates!</h3>
                     <div>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                     </div>
                  </div>
                  <div className="px-3 md:w-1/2">
                     <form>
                       <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                         <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                           <input type="text" id="footer-field" name="footer-field" placeholder="Type your email here..." className="w-full bg-red-100 bg-opacity-30 placeholder-white rounded focus:bg-opacity-50 text-sm outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                         </div>
                         <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-red-500 hover:text-white border-0 py-2 px-6 focus:outline-none bg-white hover:bg-red-600 hover:shadow-lg rounded">Subscribe</button>
                       </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default SubscribeRow;
