// src/pages/Home.js
import React from 'react';
import ChuaCard from '../components/ChuaCard';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import chuadata from '../data/chuadata'; // Import dữ liệu từ file chuaData.js

const Home = () => {
  return (
    <div className='Home'>
      <h2>Các Ngôi Chùa Nổi Tiếng Tại Trà Vinh</h2>
      <div className="container">
        {/* <Sidebar/> */}
          <div className="chua-list">
            {chuadata.map(chua => (
              <ChuaCard key={chua.id} chua={chua} />
            ))}
          </div>
        {/*<Content/> */}
      </div>
    </div>
  );
};

export default Home;
