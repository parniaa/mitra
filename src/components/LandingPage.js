import React, { useRef, useEffect, useState } from 'react';
import FallbackImage from './FallbackImage';
import Header from './Header';
import { CALENDLY_URL, SITE_URL } from '../config';
import styles from './LandingPage.module.css';

function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`fade-in-section${isVisible ? ' is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
}

const therapies = [
  { title: 'Individual Therapy', desc: 'Personal growth and healing tailored to you.' },
  { title: 'Couple Therapy', desc: 'Strengthen your relationship and rebuild intimacy.' },
  { title: 'Family Therapy', desc: 'Improve communication and resolve conflicts.' },
  { title: 'Adolescent Therapy', desc: 'Support for teens facing emotional and social challenges.' },
  { title: 'Relationship Therapy', desc: 'Guidance for navigating relationship challenges.' },
  { title: 'Child Therapy', desc: 'Support your child\'s emotional and mental well-being.' },
];

const issues = [
  'Anxiety', 'Depression', 'Relationship Issues', 'Grief and Loss', 'Self-Esteem',
  'Parenting', 'Career Challenges', 'Infidelity', 'Family Issues', 'Teen Challenges'
];

// const team = [
//   { name: 'Mitra Behboudi', title: 'Qualifying Registered psychotherapist', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
// ];

const testimonials = [
  { text: 'Mitra helped me slow down, make sense of my anxiety, and feel in control again. I do recommend her', author: 'A., Toronto' },
  { text: 'I finally feel understood. Our sessions are gentle but very practical. I leave with expected clarity.', author: 'S., North York' },
  { text: 'We communicate better and fight less. Therapy with Mitra truly changed our relationship.', author: 'J. & R., Couple' },
];
const expertise = [
  { text: 'I offer collaborative, trauma-informed, and culturally sensitive psychotherapy grounded in a client-centered and strengths-based framework. My work integrates CBT, DBT, IFS, ACT, mindfulness-based practices, and Art Therapy to support emotional awareness, regulation, and meaningful growth within a compassionate and safe therapeutic space.', title: 'My Approach' },
  { text: 'With over six years of experience in mental health and rehabilitation settings, I have supported individuals living with acquired brain injuries, as well as refugees and newcomers navigating complex life transitions.I work with adults, youth, and families facing anxiety, depression, trauma, grief, identity concerns, and relationship challenges.Registered', title: 'My Experience' },
  { text: 'I believe healing begins with awareness, the light that reveals what has always lived within us. What we search for in the world is often already present inside, waiting to be seen with compassion. Through mindful reflection and gentle understanding, we rediscover the strength, wisdom, and resilience that were never truly lost. Therapy is a space to turn inward, to soften, and to remember who you are beneath the noise of pain and expectation.', title: 'My Beleif' },
];

const faqs = [
  { q: 'What does a first session look like?', a: 'We talk about what brings you in, what you’d like to change, and what’s worked or not worked before. You set the pace—no pressure, no judgment.' },
  { q: 'How many sessions will I need?', a: 'It varies by person and goals. Some benefit from short‑term focused work (6–8 sessions), others prefer ongoing support.' },
  { q: 'Do you offer a free consultation?', a: 'Yes. A free 15‑minute phone or video consultation helps us see if we’re a good fit before booking.' },
  { q: 'Are sessions covered by insurance?', a: 'Many extended health plans cover Qualifying Registered psychotherapists. Please check with your provider for your specific coverage.' },
  { q: 'Do you offer in‑person or virtual sessions?', a: 'Currently virtual by secure video. Limited in‑person availability may be offered seasonally.' },
];

const LandingPage = () => {
  useEffect(() => {
    document.title = 'Psychotherapist Toronto & North York | Mitra Behboudi';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Compassionate psychotherapy in Toronto and North York. Mitra Behboudi offers therapy for anxiety, couples counseling, and life transitions. Book a free consultation today.');
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}/`);
  }, []);

  return (
    <div style={{ background: 'var(--color-bg-page)', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      
      <Header />
      {/* Hero Section */}
      <FadeInSection>
        <section
          className={styles.hero}
          style={{
            backgroundImage: 'url(/hero.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <FallbackImage src="/IMG3063.png" alt="Lotus" style={{ width: 280, marginBottom: 16, borderRadius: 100,}} /> */}
          <div className={styles.overlay}>
            <h1 className={styles.heroTitle}>Psychotherapy & Art Therapy for Anxiety, Trauma, and Life Transitions</h1>
            <p className={styles.heroSubtitle}>
              In the Light of Awareness and Compassion, the Self Begins to Heal
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className={`btn btn-primary btn-lg ${styles.heroBtn}`}>Book Free Consultation</a>
          </div>
        </section>
      </FadeInSection>

      {/* About/Values Section */}
      <FadeInSection>
        <div id="about" style={{textAlign: 'center', marginTop: '1rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>About Me</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              {/* <h2 className={styles.sectionTitle}>Care that Meets You Where You Are</h2> */}
              <p>I am a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO) and an Art Therapist trained through the Canadian Art Therapy Association (CATA). I provide culturally sensitive, trauma-informed psychotherapy to adults, youth, and families navigating anxiety, depression, trauma, identity concerns, and life transitions.</p>
              <p>My approach is collaborative, compassionate, and client-centered. I strive to create a safe, respectful, and non-judgmental space where you can explore your experiences, process emotions, and move toward meaningful growth and healing.</p>      
              <p>When appropriate, I integrate creative and expressive processes to support clients in accessing emotions and insights that may be difficult to express through words alone.</p>      
              <p>I offer therapy in English and Persian and am committed to culturally attuned care that honours each individual’s story and lived experience.</p>      
            
            </div>
            <div className="col-md-6 text-center">
              <FallbackImage src="/IMG3063.png" alt="Mountain" className={styles.aboutImage} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Expertise Section */}
      <FadeInSection>
        <div id="expertise" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Expertise</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.expertiseGrid}>
            {expertise.map((t, i) => (
              <div className={styles.expertiseCard} key={i}>
                <h5 style={{ color: 'var(--color-primary-strong)', fontWeight: 600 }}>{t.title}</h5>
                <p style={{ color: 'var(--color-text-main)' }}>{t.text}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Therapies/Services Section */}
      <FadeInSection>
        <div id="services" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Services</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.servicesGrid}>
            {therapies.map((t, i) => (
              <div className={styles.serviceCard} key={i}>
                <FallbackImage src="/k.webp" alt="Therapy" className={styles.serviceIcon} />
                <h5 style={{ color: 'var(--color-primary-strong)', fontWeight: 600 }}>{t.title}</h5>
                <p style={{ color: '#4a4a4a' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Issues Treated Section */}
      <FadeInSection>
        <div id="issues" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Issues We Help With</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.issuesGrid}>
            {issues.map((issue, i) => (
              <div className={styles.issueTile} key={i}>{issue}</div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Team Section */}
      {/* <FadeInSection>
        <div id="team" style={{textAlign: 'center'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Our Team</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div className={styles.teamCard} key={i}>
                <FallbackImage src={member.img} alt={member.name} className={styles.teamImg} />
                <h5 style={{ color: 'var(--color-primary-strong)', fontWeight: 600 }}>{member.name}</h5>
                <p style={{ color: 'var(--color-accent)' }}>{member.title}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection> */}

      {/* Testimonials Section */}
      <FadeInSection>
        <div id="testimonials" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Testimonials</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCard} key={i}>
                <blockquote className="blockquote mb-0">
                  <p style={{ color: 'var(--color-text-main)' }}>&ldquo;{t.text}&rdquo;</p>
                  <footer className="blockquote-footer">{t.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection>
        <div id="faq" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Frequently Asked Questions</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={`accordion ${styles.faqAccordion}`} id="faqAccordion">
            {faqs.map((faq, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button className={`accordion-button${i !== 0 ? ' collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`collapse${i}`}>
                    {faq.q}
                  </button>
                </h2>
                <div id={`collapse${i}`} className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`} aria-labelledby={`heading${i}`} data-bs-parent="#faqAccordion">
                  <div className="accordion-body">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Contact/Call to Action Section */}
      <FadeInSection>
        <div id="contact" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>Contact</h3>
        </div>
        <section className={`container ${styles.contactSection}`} id="contact">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 style={{ color: 'var(--color-primary-strong)', fontWeight: 600 }}>Ready to start your journey?</h2>
              <p>Book a free consultation or reach out with your questions. We're here to help you find balance and strength.</p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> <a href="mailto:mitratherapy@gmail.com" style={{ color: 'var(--color-accent)' }}>mitratherapy@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+16478647160" style={{ color: 'var(--color-accent)' }}>+1 647-864-7160</a></li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className="btn btn-primary mt-3">Book Now</a>
            </div>
            <div className="col-md-6 text-center">
              <FallbackImage src="/mb.png" alt="Contact" style={{ maxWidth: 180 }} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className={styles.footer}>
        <FallbackImage src="/mb.png" alt="Logo" style={{ width: 40, marginBottom: 8 }} />
        <div>© 2024 Mitra Behboudi Psychotherapy. All rights reserved.</div>
        <div style={{ fontSize: '0.9rem' }}>Privacy Policy | Terms of Use</div>
      </footer>
    </div>
  );
};

export default LandingPage; 