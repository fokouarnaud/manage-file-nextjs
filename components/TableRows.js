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
        <tr className="text-gray-700">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">

                    <div>
                        <p className="font-semibold">{nomEtudiant}</p>
                        <p className="text-sm text-gray-60 pt-2">
                            {matriculeEtudiant}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">
                {departementEtudiant}
            </td>
            <td className="px-4 py-3 text-sm">
                <Link href={`/show/${id}`}>
                    <a className='font-medium leading-5 text-purple-600 underline underline-offset-4' hreh="#">{titreDoc}</a>
                </Link>

            </td>
            <td className="px-4 py-3 text-sm">
                {anneeSoutenance}
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center space-x-4 text-sm">

                    <Link href={`/show/${id}`}>
                        <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                            aria-label="Info"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>


                        </button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default TableRows;