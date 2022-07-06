import React from 'react'
import TableRows from './TableRows';
import Pagination from './Pagination';
import SearchForm from './SearchForm';



const TableSection = ({ dataDocs,
     page,
      handlePageClick, 
      handleChangeLimit,
      handleChangeSearchBy,
      handleChangeSearchValue,
       limit,
        totalCount, 
        pageCount,
        searchBy,
        searchValue }) => {
            
console.log(limit);
    return (
        <div className=" max-w-7xl my-6 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div className="w-full">
                <div>
                    <div className="flex justify-between mb-6">
                        <div className="flex flex-col  md:flex-row  justify-center  md:justify-start items-center flex-1 ">
                            <div className="flex flex-row mb-1 mr-0 sm:mb-0">
                                <div className="relative ">
                                    <select defaultValue={limit}  onChange={handleChangeLimit}
                                        className=" cursor-pointer block w-full mt-1 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option >5</option>
                                        <option >10</option>
                                        <option >20</option>
                                    </select>
                                </div> 
                                <div className="relative ">
                                    <select defaultValue={searchBy}
                                    onChange={handleChangeSearchBy}
                                        className=" cursor-pointer block w-full mt-1  bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option  value="matricule">Matricule</option>
                                        <option  value="nom">Nom</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div
                                className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
                            >
                               <SearchForm handleOnClick={handleChangeSearchValue} defautTerm={searchValue}/>
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