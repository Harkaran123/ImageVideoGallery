import React, { useEffect, useState } from 'react';
import { fetchvideoAPI } from './fetchfromAPI';
import VideoCard from './VideoCard';

const Videos = ({ id }) => {

    const [videos, setVideos] = useState([]);
    const fetchvideo = async () => {
        const data = await fetchvideoAPI(`q=${id}`);
        setVideos(data.hits);
    }

    useEffect(() => {
        fetchvideo();
    }, [id])

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center px-6 py-8'>
        
        {videos.map((video) => {
            return (
                <VideoCard key={video.id} video={video} />
            )
        })}
    </div>
  )
}

export default Videos
