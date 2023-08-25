import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Home, SearchPage, VideoPage} from './components';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [imagedrop , setImagedrop] = useState(true);
  const [videodrop, setvideodrop] = useState(false);

  return (
    <div>
    <BrowserRouter>
      <Navbar setImagedrop={setImagedrop} setvideodrop={setvideodrop} imagedrop={imagedrop} videodrop={videodrop}/>
      <Routes>
        <Route path="/" element={<Home imagedrop={imagedrop} videodrop={videodrop} />} />
        <Route path='/search/:imageid' element={<SearchPage imagedrop={imagedrop} videodrop={videodrop}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
