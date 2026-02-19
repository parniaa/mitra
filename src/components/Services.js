import React, { useEffect } from 'react';
import { SITE_URL } from '../config';

const Services = () => {
  useEffect(() => {
    document.title = 'Services — Psychotherapy & Counseling | Mitra Behboudi';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Services: individual therapy, couples counseling, group therapy in Toronto & North York — evidence-based, compassionate care.');
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}/services`);
  }, []);

  return (
  <div className="container">
    <h2>Services in Toronto & North York</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item bg-transparent">
        <strong>Individual Therapy in Toronto & North York</strong>
        <p>Personalized sessions to address anxiety, depression, stress, and life transitions. Tailored to your needs and location.</p>
      </li>
      <li className="list-group-item bg-transparent">
        <strong>Couples Counseling</strong>
        <p>Support for couples to improve communication, resolve conflict, and strengthen relationships.</p>
      </li>
      <li className="list-group-item bg-transparent">
        <strong>Group Therapy</strong>
        <p>Small group sessions focused on shared experiences and mutual support.</p>
      </li>
    </ul>
  </div>
);

export default Services; 