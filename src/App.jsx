import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChuaDetail from './pages/ChuaDetail';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/contact';

import './App.css';
const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chua/:id" element={<ChuaDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
