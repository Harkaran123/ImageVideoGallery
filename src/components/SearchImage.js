import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchfromAPI } from './fetchfromAPI';
import ImageCard from './ImageCard';

const SearchImage = () => {

    const { imageid } = useParams();
    const id = imageid;

    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);

    const fetchimages = async () => {

        try{
            const data = await fetchfromAPI(`q=${id}`);
            setImages(data.hits);
        }
        catch{
            setError(true);
        }
        
    }

    useEffect(() => {
        fetchimages();
    }, [id])

    return (
        <>
            {error && <h1>oops not found..please check the spelling</h1>}
            <h1 className='text-2xl ml-[30px] text-white'>Showing Results for: <span className='uppercase'>{id}</span></h1>

            <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center px-6 py-8'>
                {images.map((image) => {
                    return (
                        <ImageCard key={image.id} image={image} />
                    )
                })}

            </div>
        </>
    )
}

export default SearchImage
