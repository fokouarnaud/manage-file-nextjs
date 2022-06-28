import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="#">
          <span className="text-2xl font-extrabold text-blue-600">Logo</span>
        </a>
        <div className="flex items-center space-x-1">
          <ul className="hidden space-x-2 md:inline-flex">
            <Link href={`/home`}><li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Accueil</a></li></Link>
            <Link href={`/`}><li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Documents</a></li></Link>
            <Link href={`/add`}><li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Deposer</a></li></Link>
            <Link href={`/show/1`}><li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">fiche depot</a></li></Link>

          </ul>
          <div className="inline-flex md:hidden">
            <button className="flex-none px-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
            <ul className="hidden space-x-2 md:inline-flex">
              <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">one</a></li>
              <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">two</a></li>
              <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">three</a></li>
              <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">foor</a></li>

            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header;