// src/pages/ChuaDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import chuadata from '../data/chuadata';


const ChuaDetail = () => {
  const { id } = useParams();
  const chua = chuadata.find(item => item.id === parseInt(id));

  if (!chua) {
      return <h2>Không tìm thấy thông tin ngôi chùa.</h2>;
  }
  return (
    <div className="chua-detail">
    <h1>{chua.name}</h1>
    {/*<p>{chua.description}</p>*/}

    {chua.history.map((history, index) => (
        <div key={index} className="section">
            <h2>{index + 1}. {history.title}</h2>
            
            {/* Kiểm tra caption, nếu là mảng thì render từng mục, nếu là chuỗi thì chỉ hiển thị chuỗi */}
            {Array.isArray(history.caption) ? (
                history.caption.map((cap, i) => (
                    <div key={i}>
                        <h3>{cap.title}</h3>
                        <p className="content-chua">{cap.content}</p>
                        
                        {/* Kiểm tra nếu cap.img tồn tại thì mới render ảnh và chú thích bên dưới */}
                        {cap.img && (
                            <>
                                <img src={cap.img} alt={history.title} className="section-image" />
                                {cap.note && <p className="image-caption">{cap.note}</p>}
                            </>
                        )}
                    </div>
                ))
            ) : (
                <p className="content-chua">{history.caption}</p>
            )}
        </div>
    ))}
</div>

  );
};

export default ChuaDetail;
