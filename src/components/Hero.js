import React from 'react';
import FallbackImage from './FallbackImage';

const Hero = () => (
  <section style={{
    background: 'linear-gradient(120deg, #f6d6e1 0%, #d6eaf6 100%)',
    padding: '4rem 0',
    textAlign: 'center',
    borderRadius: '0 0 32px 32px',
    boxShadow: '0 4px 24px rgba(200,200,200,0.12)'
  }}>
    <FallbackImage
      src="https://undraw.co/api/illustrations/relaxing-pastel.svg"
      alt="Calm and relaxing illustration"
      style={{ maxWidth: 220, marginBottom: 24 }}
    />
    <h1 style={{ color: '#a27ba6', fontWeight: 700, fontSize: '2.5rem' }}>
      Welcome to Your Path to Wellbeing
    </h1>
    <p style={{ color: '#6a7ba2', fontSize: '1.25rem', maxWidth: 600, margin: '1rem auto 0' }}>
      Compassionate psychotherapy in a safe, supportive, and calming environment. Begin your journey to healing and self-discovery today.
    </p>
  </section>
);

export default Hero; 