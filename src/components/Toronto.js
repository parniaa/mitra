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
      <div style={{ display: 'flex', gap: '0.9rem', marginTop: '1rem' }}>
        <a
          href="https://www.linkedin.com/in/mitrabehboudi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          style={{
            width: 38,
            height: 38,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '999px',
            background: 'rgba(15, 23, 42, 0.12)',
            color: '#111827',
            textDecoration: 'none'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/mitra_bhb?igsh=bnl3eHFzanozd2Jh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          style={{
            width: 38,
            height: 38,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '999px',
            background: 'rgba(15, 23, 42, 0.12)',
            color: '#111827',
            textDecoration: 'none'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
