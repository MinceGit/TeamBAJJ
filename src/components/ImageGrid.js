import React from 'react'
import useFirestore from '../hooks/useFirestore';

const ImageGrid = (collection_path) => {
    const {docs} = useFirestore(collection_path.collection_path);
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <div className="img-wrap" key={doc.id}>
                    <img src ={doc.url} alt="Picture"></img>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
