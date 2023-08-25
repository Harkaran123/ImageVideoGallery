import React, { useEffect, useState } from 'react';
import { fetchfromAPI } from './fetchfromAPI';
import ImageCard from './ImageCard';

const ImagePage = () => {

  const [images, setImages] = useState([]);

  const fetchimages = async () => {
    const data = await fetchfromAPI(`q=blue`);
    setImages(data.hits);
  }

  useEffect(() => {
    fetchimages();
  }, [])

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center px-6 py-8'>

      {images.map((image) => {
        return (
          <ImageCard key={image.id} image={image} />
        )
      })}
      
    </div>
  )
}

export default ImagePage
