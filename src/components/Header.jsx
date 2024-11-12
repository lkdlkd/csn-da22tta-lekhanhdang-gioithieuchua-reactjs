import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header =() =>{
    return(
        <header>
            <div className='header-container'>
                <div className="header-logo">
                    <Link to="/"><img src="../assets/img/logo.png" alt="logo" /></Link>
                </div>
                <nav className='header-menu'>
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/Sukien">Sự kiện</Link></li>
                    <li><Link to="/Gioithieu">Giới thiệu</Link></li>
                    <li><Link to="/Lienhe">Liên hệ</Link></li>
                </ul>
            </nav>
            </div>

        </header>
    )
};
export default Header;