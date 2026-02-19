import React from 'react';
import FallbackImage from './FallbackImage';
import { SITE_URL } from '../config';
import { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    document.title = 'About — Mitra Behboudi';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Learn about Mitra Behboudi, a Qualifying Registered psychotherapist offering compassionate, client-centered psychotherapy in Toronto.');
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}/about`);
  }, []);

  return (
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