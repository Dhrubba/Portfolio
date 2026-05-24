import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">Have something to say? Send me a message!</p>
      </div>

      <div className="contact-form-wrapper">
        {submitted ? (
          <div className="success-box">
            <span className="success-icon">✅</span>
            <h3>Message Sent!</h3>
            <p>Thanks <strong>{formData.name}</strong>, I'll get back to you at <strong>{formData.email}</strong> soon.</p>
            <button className="btn-primary" onClick={handleReset}>Send Another</button>
          </div>
        ) : (
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. abc@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button className="btn-primary send-btn" onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
