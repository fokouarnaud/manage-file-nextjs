import React from 'react'
import { useState } from 'react';

const FilterTable = (props) => {
   
    const {
        items_departement,
        items_type_doc,
        items_annee,
        onClickFilterBtn

    }=props;

    const [values,setValues]=useState({
        departement:"",
        type_doc:"",
        annee:""
    })
    const onClickBtn=(e)=>{
        e.preventDefault();
        onClickFilterBtn({
            departement:values.departement,
            type_doc:values.type_doc,
            annee:values.annee
        })
    }
    const onChangeDepartement=(e)=>{
        e.preventDefault();
        setValues({
            ...values,
            departement:e.target.value
        })

    }
    const onChangeTypeDoc=(e)=>{
        e.preventDefault();
        setValues({
            ...values,
            type_doc:e.target.value
        })

    }   
    const onChangeAnnee=(e)=>{
        e.preventDefault();
        setValues({
            ...values,
            annee:e.target.value
        })

    }

    return (
        <>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
                <label className="block">
                    <span className="text-gray-700">Departement</span>
                    <select onChange={onChangeDepartement} className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_departement.map(item => (
                        <option key={item.id} value={`${item.name}`}>{item.name}</option>
                    ))}
                    </select>
                </label>
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
                <label className="block">
                    <span className="text-gray-700">Type document</span>
                    <select   onChange={onChangeTypeDoc}  className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_type_doc.map(item => (
                        <option key={item.id} value={`${item.name}`}>{item.name}</option>
                    ))}
                    </select>
                </label>
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
                <label className="block">
                    <span className="text-gray-700">Annee</span>
                    <select  onChange={onChangeAnnee} className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_annee.map(item => (
                        <option key={item.id} value={`${item.name}`}>{item.name}</option>
                    ))}
                    </select>
                </label>
            </div>

            <button type="button" onClick={onClickBtn} className=" mt-6 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Filtrer</button>
        </>
    )
}

export default FilterTable;