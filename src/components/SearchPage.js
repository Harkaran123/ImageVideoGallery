import SearchImage from './SearchImage';
import SearchVideo from './SearchVideo';


const SearchPage = ({ imagedrop, videodrop }) => {


    return (
        <>
           {imagedrop && <SearchImage />} 
           {videodrop && <SearchVideo />}
        </>
    )
}

export default SearchPage
