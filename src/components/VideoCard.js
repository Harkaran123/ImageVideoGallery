import React from 'react';
import ReactPlayer from 'react-player';

const VideoCard = ({ video }) => {
    
    const { videos, downloads, views, tags } = video; 

  return (
    <div className='w-[300px] h-[300px] flex flex-col gap-4 '>
        <ReactPlayer volume={1} controls={true} width={"100%"} url={videos.tiny.url}/>
        <div className='text-blue-400'>
            <h1>#{tags}</h1>
            <h1>Views: {views}</h1>
            <h1>Download: {downloads}</h1>
        </div>
    </div>
  )
}

export default VideoCard
