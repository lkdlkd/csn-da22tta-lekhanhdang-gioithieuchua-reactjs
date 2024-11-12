import React, { useState } from 'react';
import '../App.css'; // Đảm bảo bạn đã tạo file CSS cho contact

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Thêm state theo dõi việc gửi form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setIsSubmitted(false); // Khi có thay đổi trong form, reset lại trạng thái submitted
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log('Thông tin liên hệ đã được gửi:', formData);
    setIsSubmitted(true); // Đánh dấu form đã được gửi thành công
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h2>Liên Hệ Với Chúng Tôi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Họ và Tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tin Nhắn:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Gửi</button>
      </form>
      {isSubmitted && (
        <div className="success-message">
          Cảm ơn bạn! Thông tin liên hệ của bạn đã được gửi thành công.
        </div>
      )}
    </div>
  );
};

export default Contact;
