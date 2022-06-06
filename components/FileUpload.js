import React from 'react'
import axios from 'axios'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const apiEndPoint = `https://express-doc.herokuapp.com/upload`;
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post(apiEndPoint, formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (

        <label className="block" >
            <span className="text-gray-700">Joindre le document</span>

            <div className=" cursor-pointer bg-purple-50 mt-2 flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">

                    <div className=" text-gray-300 flex items-center justify-center max-h-48 w-2/5 mx-auto -mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>

                    </div>
                    <p className="  pointer-none text-gray-500 "><span className="text-sm">Fichiers supportes : PDF</span></p>
                    <p className="pointer-none text-gray-500 "> <a className="cursor-pointer text-purple-600 hover:underline">Clicquez ici </a> pour selectionner un fichier sur votre ordinateur</p>
                </div>
                <input type="file" className="hidden" onChange={uploadHandler} />
            </div>

        </label>

    )
}

export default FileUpload;