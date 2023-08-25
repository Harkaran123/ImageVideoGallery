import React from 'react'

const ImageCard = ({ image }) => {

    return (
        <div className='w-[300px] h-[300px] flex flex-col gap-3' >
            <img className='w-full h-[100%]' src={image.largeImageURL} alt="" />
            <div className='text-blue-400'>
                <h1>Views: {image.views}</h1>
                <h1>Downloads: {image.downloads}</h1>
                
            </div>
        </div>
    )
}

export default ImageCard
