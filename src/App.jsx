import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <HelmetProvider>
      <Header />
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </HelmetProvider>  
  );
};

export default App;
