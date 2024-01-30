import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import Accordion from './pages/Accordion';
import {Container} from '@mui/material'
import Footer from './components/Footer';

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/accordion' element={<Accordion />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
