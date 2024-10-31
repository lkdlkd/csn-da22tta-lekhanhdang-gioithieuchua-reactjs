import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
  return (
    <header>
      <div className='logo'><Link to="/"><img src="../assets/img/logo.png" alt="logo" /></Link></div>
      <nav  className='menu'>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/About/">Giới thiệu</Link></li>
          <li><Link to="/Contact/">Liên hệ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
