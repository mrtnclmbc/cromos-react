import React from 'react';
import Link from 'next/link'

const GameCard = (props) => {

  const { isAvailable, title, category, author, image } = props;

  return (
    <>
      <div className="sm:w-1/2 mb-10 px-4 max-w-md">
        <div className="rounded-lg h-xl overflow-hidden">
          <img alt="Featured experience" className="object-cover object-center h-full w-full" src={image} />
        </div>
        <h2 className="title-font text-lg font-medium text-indigo-800 mt-6 mb-3">{category}</h2>
        <p className="leading-relaxed font-bold text-black">{title}</p>
        <p className="leading-relaxed text-base">{author}</p>
        {/* Using separate buttons for Tailwind not applying disabled styles workaround when hover variant present */}
        {isAvailable ? (
          <Link href="/game/1">
            <button className="flex mx-auto mt-6 text-white bg-red-600 rounded border-0 py-2 px-5 hover:bg-red-700 shadow hover:shadow-xl focus:outline-none">Take me there!</button>
          </Link>
          ) : <button className="flex mx-auto mt-6 text-white bg-red-600 rounded border-0 py-2 px-5 opacity-50 shadow cursor-not-allowed" disabled>Coming Soon</button> 
        }
      </div>
    </>
  )
}

export default GameCard;
