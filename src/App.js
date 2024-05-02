import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
