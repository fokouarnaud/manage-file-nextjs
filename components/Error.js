import Link from 'next/link';
import React from 'react'

const Error = () => {
  return (
    <div className="container flex flex-col  h-screen justify-center items-center px-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mt-8 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                
                <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
                    500
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                Erreur lors du chargement des donnees.
                    {" "}
                    <Link href={`/`}>
                    <a
                        className="text-purple-600 hover:underline dark:text-purple-300"
                       
                    >
                        
                       cliquez ici pour reesayser.
                    </a>
                    </Link>
                    
                </p>
            </div>
  )
}

export default Error;