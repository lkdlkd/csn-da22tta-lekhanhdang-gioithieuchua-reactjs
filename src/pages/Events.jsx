import React from 'react';
import { Helmet } from 'react-helmet-async';

const eventsData = [
  {
    id: 1,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },
  {
    id: 2,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },
  {
    id: 3,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },
  {
    id: 4,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },
  {
    id: 5,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },  {
    id: 6,
    title: 'Triển lãm Văn hóa Trà Vinh',
    description: 'Triển lãm giới thiệu các sản phẩm văn hóa và nghệ thuật đặc trưng của Trà Vinh.',
    date: '15/12/2024',
    location: 'Trung tâm Văn hóa Trà Vinh',
    imageUrl: '/assets/img/chuaang1.jpg',
  },
  // Các sự kiện khác
];

const Events = () => {
  return (
    <div className='event-container'> 
      <Helmet>
        <title>Sự kiện tại Trà Vinh</title>
        <meta name="description" content="Danh sách các sự kiện nổi bật tại tỉnh Trà Vinh, bao gồm lễ hội, triển lãm và các hoạt động văn hóa đặc sắc." />
      </Helmet>
      <h2 className='event-h2'>Sự kiện tại Trà Vinh</h2>
      
      <div className="events-list">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Thời gian:</strong> {event.date}</p>
            <p><strong>Địa điểm:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
