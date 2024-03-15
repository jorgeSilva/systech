import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './utils/navbar/Navbar';
import Footer from './utils/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Suporte from './components/suporte/Suporte';
import MetodoPagamento from './components/metodoPagamento/MetodoPagamento';
import SaibaMais from './components/saibaMais/SaibaMais';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/saiba-mais" element={<SaibaMais/>}/>
            <Route path="/suporte" element={<Suporte/>}/>
            <Route path="/metodo-pagamento" element={<MetodoPagamento/>}/>
          </Routes>
          <Analytics/>
          <SpeedInsights/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
