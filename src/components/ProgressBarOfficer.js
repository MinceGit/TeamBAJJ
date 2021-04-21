import React,{useEffect} from 'react';
import useStorageOfficer from '../hooks/useStorageOfficer';

export const ProgressBarOfficer = ({file,setFile,collection_path, name, contact, description}) => {
const {url, progress} = useStorageOfficer(file,collection_path.collection_path, name, contact, description);


    useEffect(() => {
        if(url){
        setFile(null);
        }
    }, [url, setFile])


    return(
        <div className ="progress-bar" style={{width: progress + '%'}}>Uploading...</div>
    )


}

export default ProgressBarOfficer;