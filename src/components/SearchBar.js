import React from 'react';
import { SearchCircleIcon } from '@heroicons/react/outline';

const SearchBar = (props) => {
  return (
    <>
    <div className="flex items-center justify-start w-full">
        <div className="relative lg:w-full md:w-80 sm:w-56 rounded-lg text-gray-800 relative overflow-hidden max-w-3xl">
            <input type="text" id="search" className="w-full pl-3 pr-10 py-2 border-2 bg-gray-100 text-gray-500 rounded-lg hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Find Games here..." />
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
              <SearchCircleIcon />
            </button>
        </div>
    </div>
    </>
  )
}

export default SearchBar;
