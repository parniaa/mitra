import React, { useState, useEffect } from 'react';
import { SITE_URL } from '../config';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  useEffect(() => {
    document.title = 'Contact — Mitra Behboudi';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Contact Mitra Behboudi to book a consultation for psychotherapy and counseling in Toronto.');
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}/contact`);
  }, []);

  return (
    <div className="container">
      <h2>Contact</h2>
      {submitted ? (
        <div className="alert alert-success">Thank you for reaching out! I will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact; 