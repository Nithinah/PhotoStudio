import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: '100px' }}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </main>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px'
};

const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Contact;
