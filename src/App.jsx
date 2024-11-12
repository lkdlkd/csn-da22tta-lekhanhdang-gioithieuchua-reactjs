import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import './App.css';

const App = () => {
  return (
    <HelmetProvider>
      <Header />
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gioithieu" element={<About />} />
        <Route path="/Sukien" element={<Events />} />
        <Route path="/Lienhe" element={<Contact />} />
      </Routes>
      <Footer/>
      </HelmetProvider>  
  );
};

export default App;
