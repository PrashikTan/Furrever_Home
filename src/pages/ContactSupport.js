import React, { useState } from 'react';
import '../styles/ContactSupport.css'; // Import CSS for styling

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-support-container">
      <h1>Contact Support</h1>
      <p>If you need any assistance regarding adoption or have any questions, please reach out to us via the contact information provided.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> 1234567890</p>
        <p><strong>Email:</strong> fureverrPet@gmail.com</p>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default ContactSupport;

