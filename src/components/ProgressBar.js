import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';

export const ProgressBar = ({file,setFile,collection_path,text}) => {
const {url, progress} = useStorage(file,collection_path.collection_path,text);


    useEffect(() => {
        if(url){
        setFile(null);
        }
    }, [url, setFile])


    return(
        <div className ="progress-bar" style={{width: progress + '%'}}>Uploading...</div>
    )


}

export default ProgressBar;