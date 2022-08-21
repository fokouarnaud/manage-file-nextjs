import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';



const FileUploader = ({onSuccess,onInputChange,}) => {
    const [files, setFiles] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
        const apiEndPoint = "https://express-doc.herokuapp.com/upload";
        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post(apiEndPoint, data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    };

    return (
        <form method="post" action="#" id="#" encType="multipart/form-data" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

  
        </form>
    )
};

export default FileUploader;