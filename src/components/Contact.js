import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
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