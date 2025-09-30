import React from 'react';
import FallbackImage from './FallbackImage';

const AboutMe = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4 text-center mb-3 mb-md-0">
        <FallbackImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Therapist" className="img-fluid rounded-circle shadow" style={{maxWidth: 180}} />
      </div>
      <div className="col-md-8">
        <h2>About Me</h2>
        <p><strong>Mitra Behboudi</strong></p>
        <p>Qualifying Registered psychotherapist • Compassionate, client‑centred care</p>
        <p>Hi, I’m Mitra. I work with anxiety, stress, relationship difficulties, and life transitions. Together we’ll slow things down, understand what’s happening, and build practical tools you can use right away. My approach is warm, collaborative, and evidence‑based—drawing from CBT, EFT, and mindfulness.</p>
      </div>
    </div>
  </div>
);

export default AboutMe; 