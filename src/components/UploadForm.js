import React, { useState } from 'react'
import { ProgressBar } from './ProgressBar';


const UploadForm = (collection_path) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [text, setText] = useState(null);

    const types =['image/png','image/jpeg','image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }

    }

    const handleChange = (e) =>{
        let input = e.target.value;
        setText(input)
    }

    return (
        <form>
            <label className="uploadForm">
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className = "uploadText">
                <input type="text" onChange ={handleChange} placeholder="Please enter a caption"/>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} collection_path={collection_path} text={text}/>}
            </div>
        </form>
    )
}


export default UploadForm;