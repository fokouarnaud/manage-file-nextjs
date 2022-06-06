import axios from 'axios'
import React from 'react'
import FileItem from './FilteItem'

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        const apiEndPoint = `https://express-doc.herokuapp.com/upload`;
        axios.delete(`${apiEndPoint}?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList;