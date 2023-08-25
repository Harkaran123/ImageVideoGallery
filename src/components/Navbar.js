import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({setImagedrop, setvideodrop, imagedrop, videodrop}) => {

    const [Id, setId] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {

        e.preventDefault();

        if (Id) {
            navigate(`search/${Id}`);
        }

        setId("");

    }

    const handleselect = () => {

        setImagedrop(!imagedrop);
        setvideodrop(!videodrop);
    }

    return (
        <div className='flex flex-col md:flex-row gap-2 justify-between items-center py-4 px-4 w-[75%] m-auto'>
            <h1 className='text-2xl text-blue-400'>Happics</h1>
            <form onSubmit={handlesubmit} className='flex flex-row justify-between bg-white py-3 px-3 rounded-3xl' action="" >
                <input onChange={(e) => setId(e.target.value)} value={Id} className='w-[250px] md:w-[400px] border-none outline-none ' type="text" name="" id="" placeholder='Search for any pic' />
                <Link><BsSearch onClick={handlesubmit} size={20} /></Link>
            </form>


            <select className='px-2 py-1 rounded-xl' onChange={handleselect}>
                <option>Images</option>
                <option>Videos</option>
            </select>

        </div>
    )
}

export default Navbar
