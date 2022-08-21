import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../axiosConfig';
import { useState, useEffect } from 'react';
import { ficheDepotSchema } from '../schemas';
import { useRouter } from 'next/router'


import { useFormik } from "formik";

const FicheDepot = () => {
    const router = useRouter()

    const [myState, setMyState] = useState({
        isLoading: false,
        id: []
    });

    useEffect(() => {
        if (myState.id.length > 0) {
            router.push('/show/' + myState.id[0]);
        }
    }, [myState,router])
    const onSubmit = async (values, actions) => {
        const matricule = values["matricule"];

        setMyState({
            ...myState,
            isLoading: true,
            id: []
        })


        axiosInstance.get(`/documents?page=1&limit=1&matricule=${matricule}`).then((response) => {
           
            const { data: res } = response;
            if (res.data.length > 0 || res.data.length >1 ) {
                toast.success('veuillez patienter svp..');
                actions.resetForm();
                setMyState({
                    ...myState,
                    isLoading: false,
                    id: [res.data[0].id]

                })
            }else{
                toast.error('Matricule inexistant');
                setMyState({
                    ...myState,
                    isLoading: false,
                    id: []
    
                })
            }


        }).catch((error) => {

            toast.error('Error');

            setMyState({
                ...myState,
                isLoading: false,
                id: []

            })
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
            "matricule": "",

        },
        validationSchema: ficheDepotSchema,
        onSubmit,
    });
    return (
        <div className="  p-6 pb-4 max-w-2xl  my-10 flex flex-col  h-full justify-center items-center px-6 mx-auto">
            <div className='w-full'>
                <h4
                    className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
                >
                    Fiche de depot
                </h4>
                <div className="mt-8">
                    <ToastContainer />
                    <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col">


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





                        <div className="block">
                            <div className="mt-2">
                                <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">

                                    <button type="submit" disabled={isSubmitting || myState.isLoading} className={`${(isSubmitting || myState.isLoading) && "cursor-not-allowed"} inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple`}>
                                        {(isSubmitting || myState.isLoading) && <svg className="w-5 h-5 mr-3 -ml-1  animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>}
                                        Consulter
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

export default FicheDepot;