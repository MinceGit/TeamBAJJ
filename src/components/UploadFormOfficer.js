import React, { useState } from 'react'
import { ProgressBarOfficer } from './ProgressBarOfficer';


const UploadFormOfficer = (collection_path) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const [contact, setContact] = useState(null);
    const [description, setDescription] = useState(null);
    const types =['image/png','image/jpeg','image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            document.getElementById("nameIn").value = "";
            document.getElementById("contactIn").value = "";
            document.getElementById("descriptionIn").value = "";
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');

        }

    }

    const handleName = (e) =>{
        let input = e.target.value;
        setName(input)
    }

    const handleContact = (e) =>{
        let input = e.target.value;
        setContact(input)
    }

    const handleDescription = (e) =>{
        let input = e.target.value;
        setDescription(input)
    }

    return (
        <form>
            <label className="uploadForm">
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className = "uploadText">
                <input type="text" onChange ={handleName} id="nameIn" placeholder="Please enter a name"/>
            </div>
            <div className = "uploadText">
                <input type="text" onChange ={handleContact} id="contactIn" placeholder="Please enter contact info"/>
            </div>
            <div className = "uploadText">
                <input type="text" onChange ={handleDescription} id="descriptionIn" placeholder="Please enter descriptions"/>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBarOfficer file={file} setFile={setFile} collection_path={collection_path} name={name} contact={contact} description={description}/>}
            </div>
        </form>
    )
}


export default UploadFormOfficer;