import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './utils/navbar/Navbar';
import Footer from './utils/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Suporte from './components/suporte/Suporte';
import MetodoPagamento from './components/metodoPagamento/MetodoPagamento';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/suporte" element={<Suporte/>}/>
          <Route path="/metodo-pagamento" element={<MetodoPagamento/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
