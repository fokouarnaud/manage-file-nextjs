import { useState } from 'react'
import Link from 'next/link'
import axiosInstance from '../axiosConfig';

import { useFormik } from "formik";
import { registerSchema } from '../schemas';
import { items_departement, items_type_doc, items_annee } from '../lib/data';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSection = () => {

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (values, actions) => {

        const data = new FormData();

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                data.append(key, values[key]);
            }
        }
     

        setIsLoading(true);

        axiosInstance.post(`/documents`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            toast.success('Upload Success');
            actions.resetForm();
            setIsLoading(false);
        }).catch((e) => {
            toast.error('Upload Error');
            setIsLoading(false);
        });


    };

    const styles = {
        block: 'mb-6  block',
        label: 'text-gray-700 mb-2 form-label inline-block',
        field: 'form-control mt-1 block w-full rounded-md bg-gray-100 border-transparent  focus:border-purple-500  focus:ring-0 focus:bg-white',
        file: 'form-control block w-full px-3 py-3 text-base font-normal bg-gray-100 border-transparent  rounded transition ease-in-out m-0 focus:border-purple-500  focus:ring-0 focus:bg-white',
        button:
            ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
        errorMsg: 'flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1',
        /*errorField:'bg-red-50 border border-red-500 text-red-400 placeholder-red-400 focus:ring-red-500 focus:border-red-500'*/
        errorField: 'bg-red-50  text-red-500 placeholder-red-500 focus:ring-red-500 focus:border-red-500'
    }
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue
    } = useFormik({
        initialValues: {

            "file": null,
            "nom": "",
            "matricule": "",
            "departement": items_departement.filter(item => item.id != 1)[0].name,
            "type_doc": items_type_doc.filter(item => item.id != 1)[0].name,
            "annee_soutenance": items_annee.filter(item => item.id != 1)[0].name,
            "titre_memoire": "",
            "mot_cle": "",
            "membre_jury": "",
            "description": ""
        },
        validationSchema: registerSchema,
        onSubmit,
    });



    return (

        <div className="  p-6 pb-4 max-w-2xl  my-10 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div className='w-full'>
                <h4
                    className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
                >
                    Ajouter un document
                </h4>

                <div className="mt-8">
                    <ToastContainer />
                    <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col">

                        <label className={styles.block}>
                            <span htmlFor="nom" className={styles.label}>Nom complet</span>
                            <input
                                value={values.nom}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="nom"
                                name="nom"
                                type="text"
                                className={`${styles.field} ${errors.nom && touched.nom ? styles.errorField : ""}`}
                                placeholder="ex: ERIC  Jama" />
                            {errors.nom && touched.nom && <p className={styles.errorMsg} >{errors.nom}</p>}
                        </label>

                        <label className={styles.block}>
                            <span htmlFor="matricule" className={styles.label}>Matricule</span>
                            <input
                                value={values.matricule}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="matricule"
                                name="matricule"
                                type="text"
                                className={`${styles.field} ${errors.matricule && touched.matricule ? styles.errorField : ""}`}
                                placeholder="ex: 13Y180" />
                            {errors.matricule && touched.matricule && <p className={styles.errorMsg} >{errors.matricule}</p>}
                        </label>
                        <label className={styles.block}>
                            <span className={styles.label}>Annee</span>
                            <select
                                onChange={(event) => {
                                    setFieldValue("annee_soutenance", event.currentTarget.value);
                                }}
                                className={`${styles.field} ${errors.annee_soutenance && touched.annee_soutenance ? styles.errorField : ""}`}>

                                {items_annee.filter(item => item.id != 1).map(item => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}

                            </select>
                            {errors.annee_soutenance && touched.annee_soutenance && <p className={styles.errorMsg} >{errors.annee_soutenance}</p>}
                        </label>

                        <label className={styles.block}>
                            <span className={styles.label}>Departement</span>
                            <select 
                             onChange={(event) => {
                                setFieldValue("departement", event.currentTarget.value);
                            }}
                            className={`${styles.field} ${errors.departement && touched.departement ? styles.errorField : ""}`}>

                                {items_departement.filter(item => item.id != 1).map(item => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}

                            </select>

                            {errors.departement && touched.departement && <p className={styles.errorMsg} >{errors.departement}</p>}
                        </label>

                        <label className={styles.block}>
                            <span className={styles.label}>Type document</span>
                            <select 
                             onChange={(event) => {
                                setFieldValue("type_doc", event.currentTarget.value);
                            }}
                            className={`${styles.field} ${errors.type_doc && touched.type_doc ? styles.errorField : ""}`}>

                                {items_type_doc.filter(item => item.id != 1).map(item => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}

                            </select>

                            {errors.type_doc && touched.type_doc && <p className={styles.errorMsg} >{errors.type_doc}</p>}
                        </label>

                        <label className={styles.block}>
                            <span htmlFor="titre_memoire" className={styles.label}>Titre</span>
                            <input
                                value={values.titre_memoire}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="titre_memoire"
                                name="titre_memoire"
                                type="text"
                                className={`${styles.field} ${errors.titre_memoire && touched.titre_memoire ? styles.errorField : ""}`}
                                placeholder="ex: Reflexion sur les images de l'education nationnale" />
                            {errors.titre_memoire && touched.titre_memoire && <p className={styles.errorMsg} >{errors.titre_memoire}</p>}
                        </label>

                        <label className={styles.block}>
                            <span htmlFor="mot_cle" className={styles.label}>Mots cles</span>
                            <input
                                value={values.mot_cle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="mot_cle"
                                name="mot_cle"
                                type="text"
                                className={`${styles.field} ${errors.mot_cle && touched.mot_cle ? styles.errorField : ""}`}
                                placeholder="ex: Reflexion, images, education nationnale" />
                            {errors.mot_cle && touched.mot_cle && <p className={styles.errorMsg} >{errors.mot_cle}</p>}
                        </label>

                        <label className={styles.block}>
                            <span htmlFor="membre_jury" className={styles.label}>Membres du jury</span>
                            <input
                                value={values.membre_jury}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="membre_jury"
                                name="membre_jury"
                                type="text"
                                className={`${styles.field} ${errors.membre_jury && touched.membre_jury ? styles.errorField : ""}`}
                                placeholder="ex: Dr. Patchenko, Pr. Retri" />
                            {errors.membre_jury && touched.membre_jury && <p className={styles.errorMsg} >{errors.membre_jury}</p>}
                        </label>



                        <label className={styles.block}>
                            <span htmlFor="description" className={styles.label}>Resume</span>
                            <textarea
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="description"
                                name="description"
                                className={`${styles.field} ${errors.description && touched.description ? styles.errorField : ""}`}
                                rows="3"
                                placeholder="Entrez le resume du document"
                            />
                            {errors.description && touched.description && <p className={styles.errorMsg} >{errors.description}</p>}
                        </label>

                        <label className={styles.block}>
                            <span htmlFor="file" className={styles.label} >Document</span>
                            <input
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}
                                id="file" name="file"
                                className={`${styles.file} ${errors.file && touched.file ? styles.errorField : ""}`}
                                type="file" />
                            {errors.file && touched.file && <p className={styles.errorMsg} >{errors.file}</p>}

                        </label>

                        <div className="block">
                            <div className="mt-2">
                                <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                                    <Link href={`/`}>
                                        <button className=" disabled w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            Annuler
                                        </button>
                                    </Link>
                                    <button type="submit" disabled={isSubmitting || isLoading} className={`${(isSubmitting || isLoading) && "cursor-not-allowed"} inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple`}>
                                        {(isSubmitting || isLoading) && <svg className="w-5 h-5 mr-3 -ml-1  animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>}
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