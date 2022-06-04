import React from 'react'

export const Page404 = () => {
    return (
        
            <div className="container flex flex-col  h-screen justify-center items-center px-6 mx-auto">
            
                <svg  className="w-12 h-12 mt-8 text-purple-200"  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
                <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
                    404
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                Page non trouvée. Vérifiez l'adresse ou
                    {" "}
                    <a
                        className="text-purple-600 hover:underline dark:text-purple-300"
                       
                    >
                        
                        retourner a la liste.
                    </a>
                    .
                </p>
            </div>
        
    )
}

export default Page404;