import React from 'react'
import TableRows from './TableRows';
import Pagination from './Pagination';



const TableSection = ({ dataDocs, page, handlePageClick, handleChangeLimit, limit, totalCount, pageCount }) => {

    return (
        <div className=" max-w-7xl my-6 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div className="w-full">
                <div>
                    <div className="flex justify-between mb-6">
                        <div className="flex flex-col  md:flex-row  justify-center  md:justify-start items-center flex-1 ">
                            <div className="flex flex-row mb-1 mr-0 sm:mb-0">
                                <div className="relative ">
                                    <select onChange={handleChangeLimit}
                                        className=" cursor-pointer block w-full mt-1 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                    </select>
                                </div> 
                                <div className="relative ">
                                    <select 
                                        className=" cursor-pointer block w-full mt-1  bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option>Matricule</option>
                                        <option>Nom</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div
                                className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
                            >
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                                {/*className="w-full min-w-0 block px-3 py-2 pr-8 pl-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"*/}
                                <input

                                    className="block w-full pr-8 pl-2 mt-1 text-gray-700 placeholder-gray-600 rounded-tr-md rounded-br-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    type="text"
                                    placeholder="Search by matricule"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" rounded-lg  ">
                    <div className="overflow-x-auto ">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr
                                    className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50"
                                >
                                    <th className="px-4 py-3">Nom & Matricule </th>
                                    <th className="px-4 py-3">Departement</th>
                                    <th className="px-4 py-3">titre</th>
                                    <th className="px-4 py-3">Annee</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody
                                className="bg-white divide-y"
                            >
                                {dataDocs.map((doc, key) => {
                                    return <TableRows
                                        nomEtudiant={doc.nom_etudiant}
                                        matriculeEtudiant={doc.matricule_etudiant}
                                        departementEtudiant={doc.departement_etudiant}
                                        anneeSoutenance={doc.annee_soutenance}
                                        titreDoc={doc.titre_doc}
                                        id={doc.id}
                                        key={key}
                                    />

                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                        <span className="flex items-center col-span-3">
                            Showing {(page - 1) * limit + 1}-{((page - 1) * limit + parseInt(pageCount))} of {totalCount}
                        </span>
                        <span className="col-span-2"></span>
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                            <nav aria-label="Table navigation">
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={page}
                                    totalCount={totalCount}
                                    pageSize={limit}
                                    onPageChange={handlePageClick}
                                />

                            </nav>
                        </span>


                    </div>
                </div>
            </div>
        </div>
    )
}



export default TableSection;