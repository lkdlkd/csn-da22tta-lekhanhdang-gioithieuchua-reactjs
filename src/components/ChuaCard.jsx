import React from 'react';
import { Link } from 'react-router-dom';

const ChuaCard = ({ chua }) => {
  return (
    <div className="chua-card">
      <img loading="lazy" src={chua.image} alt={chua.name} />
      <h2>{chua.name}</h2>
      <p>{chua.description}</p>
      <Link to={`/chua/${chua.id}`}>Xem Chi Tiết</Link>
    </div>
  );
};

export default ChuaCard;
