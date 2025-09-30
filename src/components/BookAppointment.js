import React, { useState } from 'react';

const BookAppointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="container">
      <h2>Book Appointment</h2>
      {submitted ? (
        <div className="alert alert-success">Thank you! Your appointment request has been received.</div>
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
            <label className="form-label">Preferred Date</label>
            <input type="date" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Book</button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment; 