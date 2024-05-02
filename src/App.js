import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/auth/Register/Register';
import Login from './pages/auth/Login/Login';
import HomePage from './pages/HomePage/HomePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
