import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

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
