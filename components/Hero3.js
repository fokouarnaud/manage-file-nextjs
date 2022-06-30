import Link from 'next/link';
import React from 'react'


const Hero = () => {
    return (
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center">
            <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                <div className="flex flex-col">
                    <h1 className="font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
                        sauvegarde et recherche de documents
                    </h1>
                    <h2 className="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
                        sauvegarder vos documents important telles que des documents officiels et autres factures, leur principal argument étant la sécurité et les services associés.
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <Link href={`/`}> 
                        <a className="uppercase py-2 px-4 bg-purple-800 border-2 border-transparent text-white text-md mr-4 hover:bg-purple-900">
                            Documents
                        </a>
                        </Link>
                        <Link href={`/add`}> 
                        <a className="uppercase py-2 px-4 bg-transparent border-2 border-purple-800 text-gray-800 dark:text-white hover:bg-purple-800 hover:text-white text-md">
                            Deposer
                        </a></Link>
                    </div>
                </div>
                <div className="block w-full mx-auto mt-6 md:mt-0 relative">

                   

                </div>
            </div>
        </div>
    )
}

export default Hero