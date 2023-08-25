import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchvideoAPI } from './fetchfromAPI';
import VideoCard from './VideoCard';

const SearchVideo = () => {

    const { imageid } = useParams();
    const id = imageid;

    return (
        <>
            <Videos id={id} />
        </>
    )
}

export default SearchVideo
