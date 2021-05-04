import React from 'react';

const SubscribeRow = () => {
  return (
    <>
      <div className="bg-gray-50 flex items-center justify-center py-5">
         <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 font-light">
            <div className="w-full max-w-6xl mx-auto pb-5">
               <div className="-mx-3 md:flex items-center">
                  <div className="px-3 md:w-2/3 mb-10 md:mb-0">
                     <h1 className="text-6xl md:text-8xl font-bold mb-5 leading-tight">Stay <br className="hidden md:block" />updated.</h1>
                     <h3 className="text-gray-600 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
                     <div>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                     </div>
                  </div>
                  <div className="px-3 md:w-1/3">
                     <form>
                        <div className="flex mb-3">
                           <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                           <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email@example.com" />
                        </div>
                        <div>
                           <button className="block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">Subscribe now.</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default SubscribeRow;
