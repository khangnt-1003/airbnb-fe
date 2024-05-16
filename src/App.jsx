import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  // Modal.show({
    
  // })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
