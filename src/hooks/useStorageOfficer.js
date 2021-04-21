import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase';

const useStorageOfficer = (file, collection_path, name, contact, description) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection(collection_path)

        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) =>{
            setError(err)
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp;

            const Name = name;
            const Descriptions = description;
            const Contacts = contact;

            collectionRef.add({url,createdAt,Name,Descriptions,Contacts})
            setUrl(url);
        })
    }, [file])

    return {progress, url, error}

}

export default useStorageOfficer;