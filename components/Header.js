import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
 
  const [isHidden, setIsHidden] = useState(true);
  const handleClickMenuButton=()=>{
    setIsHidden(!isHidden);
  }


  return (
    <header className=' sticky top-0 z-30 w-full  bg-white  shadow-xl'>
      <nav
        className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-white
       "
      >
        <div>
          <a href="#" className='text-purple-400'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>{" "}
Logo
          </a>
        </div>

     
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClickMenuButton} className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <div className={` ${isHidden&&"hidden"} w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
          >
             <Link href={`/home`}><li><a href="#" className="md:p-4 py-2 block hover:text-purple-400">Accueil</a></li></Link>
            <Link href={`/`}><li><a href="#" className="md:p-4 py-2 block hover:text-purple-400">Documents</a></li></Link>
            <Link href={`/add`}><li><a href="#" className="md:p-4 py-2 block hover:text-purple-400">Deposer</a></li></Link>
            <Link href={`/ficheDepot`}><li><a href="#" className="md:p-4 py-2 block hover:text-purple-400">fiche depot</a></li></Link>
            
          </ul>
        </div>
      </nav>
    </header>


  );
}

export default Header;