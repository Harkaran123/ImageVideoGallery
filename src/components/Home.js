import ImagePage from './ImagePage';
import VideoPage from './VideoPage';


const Home = ({ imagedrop, videodrop }) => {

  return (
    <div>
      {imagedrop && <ImagePage />}
      {videodrop && <VideoPage />}
    </div>
  )
}

export default Home
