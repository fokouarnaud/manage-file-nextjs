import React from 'react'
import Link from 'next/link'

const TableRows = ({
    nomEtudiant,
    matriculeEtudiant,
    departementEtudiant,
    anneeSoutenance,
    titreDoc,
    id
}) => {
    return (
        <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">

                    <div>
                        <p className="font-semibold">{nomEtudiant}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            {matriculeEtudiant}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">
                {departementEtudiant}
            </td>
            <td className="px-4 py-3 text-sm">

                {titreDoc}

            </td>
            <td className="px-4 py-3 text-sm">
                {anneeSoutenance}
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center space-x-4 text-sm">
                    
                    <Link href={`/show/${id}`}>
                        <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Info"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>


                        </button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default TableRows;