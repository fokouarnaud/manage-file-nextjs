import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';


import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSection = () => {

    const initialFormData = Object.freeze({
            "file": {},
            "nom": "",
            "matricule": "",
            "departement": "",
            "titre_memoire": "",
            "mot_cle": "",
            "membre_jury": "",
            "directeur_memoire": "",
            "description": ""
          
    });
  
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const val= e.target.name=='file'?e.target.files[0]: e.target.value.trim();
        updateFormData({
          ...formData,
          [e.target.name]:val
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const data = new FormData();

        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
               data.append(key, formData[key]);
            }
        }
       
       
        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            }) 
    };


    return (

        <div className="  p-6 pb-4 max-w-2xl  my-10 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div className='w-full'>
                <h4
                    className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
                >
                    Ajouter un document
                </h4>

                <div className="mt-8">
                    <form className="flex flex-col">
                        <label className="mb-6  block ">
                            <span className="text-gray-700 mb-2 form-label inline-block">Nom complet</span>
                            <input name="nom" onChange={handleChange} type="text" className="form-control
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: ERIC  Jama" />
                        </label>
                        <label className="mb-6 block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Matricule</span>
                            <input name="matricule" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: 13Y180" />
                        </label>
                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Departement</span>
                            <input  name="departement" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Psychologie" />
                        </label>
                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Titre memoire</span>
                            <input name="titre_memoire" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Reflexion sur les images de l'education nationnale" />
                        </label>
                        <label className=" mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Mots cles</span>
                            <input name="mot_cle" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Reflexion, images, education nationnale" />
                        </label>
                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Membres du jury</span>
                            <input name="membre_jury" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Dr. Patchenko, Pr. Retri" />
                        </label>
                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Directeur de memoire</span>
                            <input name="directeur_memoire" onChange={handleChange} type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-purple-300  focus:ring focus:ring-purple-200 focus:ring-opacity-50
                  " placeholder="ex: Pr. Zeto" />
                        </label>

                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Description</span>
                            <textarea name="description" onChange={handleChange} className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " rows="3"></textarea>
                        </label>

                        <label className="mb-6  block">
                            <span className="text-gray-700 mb-2 form-label inline-block">Document</span>
                           
                                    
                                    <input name="file" onChange={handleChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                               
                        </label>
                        <ToastContainer />
                        <div className="block">
                            <div className="mt-2">
                                <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                                    <Link href={`/`}>
                                        <button className="w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            Annuler
                                        </button>
                                    </Link>
                                    <button  onClick={handleSubmit} className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default AddSection;