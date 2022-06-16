import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import ProfileDetailse from './Components/ProfileDetailse/ProfileDetailse';
import Login from './Components/Pages/Login/Login';
import Registar from './Components/Pages/Registar/Registar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<ProfileDetailse />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registar' element={<Registar />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
