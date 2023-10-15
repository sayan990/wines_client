
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing"
import Home from "./components/Home"
import Login from './pages/Login';
import UploadImg from './components/UploadImg';
import SingIn from './pages/SingIn';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path='/' element={<Landing />} ></Route>
          <Route exact path='/home' element={<Home />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/SignIn' element={<SingIn />} ></Route>
          <Route exact path='/det/:id' element={<Detail />} ></Route>
          <Route exact path='/soyadmin/uploadwine' element={<UploadImg />} ></Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
