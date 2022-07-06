import React from 'react'
import { useState } from 'react';

const SearchForm = ({ handleOnClick,defautTerm }) => {
    const [searchTerm, setSearchTerm] = useState(defautTerm);
    const onChangeSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    const onClickSearchBtn = (e) => {
        e.preventDefault();
        handleOnClick(searchTerm);
    }
    return (
        <>
            <input
            defaultValue={defautTerm}
                onChange={onChangeSearchTerm}
                className="block w-full pr-8 pl-2 mt-1 text-gray-700 placeholder-gray-600 rounded-tr-md rounded-br-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button onClick={onClickSearchBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

        </>
    )
}

export default SearchForm;