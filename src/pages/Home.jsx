// src/pages/Home.js
import React from 'react';
import ChuaCard from '../components/ChuaCard';
// import Sidebar from '../components/Sidebar';
// import Content from '../components/Content';
import chuadata from '../data/chuadata'; // Import dữ liệu từ file chuaData.js
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className='Home'>
      <Helmet>
        <title>Chùa Trà Vinh - Lịch sử và Di sản Văn hóa</title>
        <meta name="description" content="Khám phá lịch sử và di sản văn hóa của các ngôi chùa nổi tiếng tại Trà Vinh. Tìm hiểu về kiến trúc độc đáo và các lễ hội truyền thống." />
      </Helmet>
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
      <div className="anh-video">
        
      </div>
    </div>
  );
};

export default Home;
