import { useState } from 'react'
import Link from 'next/link'
import axiosInstance from '../axiosConfig';

import { useFormik } from "formik";
import { registerSchema } from '../schemas';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //actions.resetForm();
};

const AddSection = () => {

    const styles = {
        label: 'text-gray-700 mb-2 form-label inline-block',
        field: 'form-control mt-1 block w-full rounded-md bg-gray-100 border-transparent  focus:border-purple-500  focus:ring-0 focus:bg-white',
        file: 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
        button:
            ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
        errorMsg: 'mt-2 text-sm text-red-600',
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
            "departement": "",
            "titre_memoire": "",
            "mot_cle": "",
            "membre_jury": "",
            "directeur_memoire": "",
            "description": ""
        },
        validationSchema: registerSchema,
        onSubmit,
    });
    console.log(errors);
    console.log(values);






    const handleSubmit_old = (e) => {
        e.preventDefault();


        const data = new FormData();

        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                data.append(key, formData[key]);
            }
        }


        axiosInstance.post(`/documents`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                toast.success('Upload Success');

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
                    <ToastContainer />
                    <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col">

                        <label className="mb-6  block ">
                            <span htmlFor="nom" className={styles.label}>Nom complet</span>
                            <input
                                value={values.nom}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="nom"
                                name="nom"
                                type="text"
                                className={styles.field}
                                placeholder="ex: ERIC  Jama" />
                            {errors.nom && touched.nom && <p className={styles.errorMsg} >{errors.nom}</p>}
                        </label>

                        <label className="mb-6 block">
                            <span htmlFor="matricule" className={styles.label}>Matricule</span>
                            <input
                                value={values.matricule}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="matricule"
                                name="matricule"
                                type="text"
                                className={styles.field}
                                placeholder="ex: 13Y180" />
                            {errors.matricule && touched.matricule && <p className={styles.errorMsg} >{errors.matricule}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="departement" className={styles.label}>Departement</span>
                            <input
                                value={values.departement}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="departement"
                                name="departement"
                                type="text"
                                className={styles.field}
                                placeholder="ex: Psychologie" />
                            {errors.departement && touched.departement && <p className={styles.errorMsg} >{errors.departement}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="titre_memoire" className={styles.label}>Titre memoire</span>
                            <input
                                value={values.titre_memoire}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="titre_memoire"
                                name="titre_memoire"
                                type="text"
                                className={styles.field}
                                placeholder="ex: Reflexion sur les images de l'education nationnale" />
                            {errors.titre_memoire && touched.titre_memoire && <p className={styles.errorMsg} >{errors.titre_memoire}</p>}
                        </label>

                        <label className=" mb-6  block">
                            <span htmlFor="mot_cle" className={styles.label}>Mots cles</span>
                            <input
                                value={values.mot_cle}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="mot_cle"
                                name="mot_cle"
                                type="text"
                                className={styles.field}
                                placeholder="ex: Reflexion, images, education nationnale" />
                            {errors.mot_cle && touched.mot_cle && <p className={styles.errorMsg} >{errors.mot_cle}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="membre_jury" className={styles.label}>Membres du jury</span>
                            <input
                                value={values.membre_jury}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="membre_jury"
                                name="membre_jury"
                                type="text"
                                className={styles.field}
                                placeholder="ex: Dr. Patchenko, Pr. Retri" />
                            {errors.membre_jury && touched.membre_jury && <p className={styles.errorMsg} >{errors.membre_jury}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="directeur_memoire" className={styles.label}>Directeur de memoire</span>
                            <input
                                value={values.directeur_memoire}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="directeur_memoire"
                                name="directeur_memoire"
                                type="text"
                                className={styles.field}
                                placeholder="ex: Pr. Zeto" />
                            {errors.directeur_memoire && touched.directeur_memoire && <p className={styles.errorMsg} >{errors.directeur_memoire}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="description" className={styles.label}>Description</span>
                            <textarea
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="description"
                                name="description"
                                className={styles.field} rows="3" />
                            {errors.description && touched.description && <p className={styles.errorMsg} >{errors.description}</p>}
                        </label>

                        <label className="mb-6  block">
                            <span htmlFor="file" className={styles.label} >Document</span>
                            <input
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}
                                id="file" name="file"
                                className={styles.file}
                                type="file" />
                                {errors.file && touched.file && <p className={styles.errorMsg} >{errors.file}</p>}

                        </label>

                        <div className="block">
                            <div className="mt-2">
                                <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
                                    <Link href={`/`}>
                                        <button className="w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                                            Annuler
                                        </button>
                                    </Link>
                                    <button disabled={isSubmitting} className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
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