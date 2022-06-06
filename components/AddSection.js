import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Preview from './Preview';
import FileUploader from './FileUploader';
const AddSection = () => {

    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

    return (
        <div className=" my-10 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div >
                <h4
                    className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
                >
                    Ajouter un document
                </h4>

                <div className="mt-8 max-w-md">
                    <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-gray-700">Nom complet</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: ERIC  Jama" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Matricule</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: 13Y180" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Departement</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Psychologie" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Titre memoire</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Reflexion sur les images de l'education nationnale" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Mots cles</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Reflexion, images, education nationnale" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Membres du jury</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Dr. Patchenko, Pr. Retri" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Directeur de memoire</span>
                            <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Pr. Zeto" />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Description</span>
                            <textarea className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " rows="3"></textarea>
                        </label>

                        <FileUploader onSuccess={onSuccess} />
                        <Preview files={files} />
                        <ToastContainer />
                        <div className="block">
                            <div className="mt-2">
                                <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                                    <Link href={`/`}>
                                        <button className="w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            Annuler
                                        </button>
                                    </Link>
                                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddSection;