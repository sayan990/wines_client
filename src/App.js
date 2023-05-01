
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing"
import Home from "./components/Home"
import UploadWine from './components/UploadWine';
import UploadImg from './components/UploadImg';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path='/' element={<Landing />} ></Route>
          <Route exact path='/home' element={<Home />} ></Route>
          <Route exact path='/soyadmin/uploadwine' element={<UploadImg />} ></Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
