import React, { useEffect } from 'react';

export default function Toronto() {
  useEffect(() => {
    document.title = 'Psychotherapist Toronto — Anxiety & Couples Therapy | Mitra Behboudi';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Toronto-based registered psychotherapist offering evidence-based therapy for anxiety, couples therapy, and life transitions. Virtual & in-person appointments available. Book a free consultation.');
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'ld-toronto';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mitra Behboudi Psychotherapy",
      "url": "https://www.mitrabehboudi.com/toronto",
      "telephone": "+1-647-864-7160",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "17:00" }
      ],
      "makesOffer": [
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Individual Therapy"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Couples Therapy"}}
      ]
    });
    document.head.appendChild(ld);
    return () => {
      const existing = document.getElementById('ld-toronto');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>Psychotherapy in Toronto & North York</h1>
      <p>I'm Mitra Behboudi, a Registered Psychotherapist (Qualifying) offering warm, practical support for anxiety, relationships, and life transitions. I offer individual and couples therapy in Toronto and North York — virtual and in-person sessions available.</p>
      <h2>Services</h2>
      <ul>
        <li>Individual therapy for anxiety and depression</li>
        <li>Couples and relationship therapy</li>
        <li>Premarital and marriage therapy</li>
      </ul>
      <h2>Book a free consultation</h2>
      <p>Email: <a href="mailto:mitratherapy@gmail.com">mitratherapy@gmail.com</a> — Phone: <a href="tel:+16478647160">+1 647-864-7160</a></p>
    </main>
  );
}
