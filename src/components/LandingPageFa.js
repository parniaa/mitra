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
  { title: 'درمان فردی', desc: 'رشد شخصی و شفای‌بخشی متناسب با نیازهای شما و محیط تورنتو.' },
  { title: 'درمان زناشویی', desc: 'تقویت رابطه و بازسازی حمیمیت برای زوج‌های در تورنتو و نورث یورک.' },
  { title: 'درمان خانوادگی', desc: 'بهبود ارتباط و حل تعارض‌های خانوادگی.' },
  { title: 'درمان نوجوانان', desc: 'پشتیبانی برای نوجوانان مواجه با چالش‌های عاطفی و اجتماعی.' },
  { title: 'درمان شناختی رفتاری (CBT)', desc: 'مدیریت اضطراب، افسردگی و موارد مرتبط.' },
  { title: 'درمان تمرکز بر احساس', desc: 'شفای عاطفی و رشد از طریق تمرکز بر احساسات.' },
];

const issues = [
  'اضطراب', 'افسردگی', 'مشکلات رابطه‌ای', 'غم و سوگ', 'احترام به خود',
  'کمک به والدین', 'چالش‌های شغلی', 'خیانت', 'مشکلات خانوادگی', 'چالش‌های نوجوانی'
];

const testimonials = [
  { text: 'میترا کمک کرد تا آرام شوم، اضطراب خود را درک کنم و کنترل داشته باشم.', author: 'الف، تورنتو' },
  { text: 'سرانجام احساس می‌کنم درک شده‌ام. جلسات ما ملایم اما عملی است.', author: 'س، نورث یورک' },
  { text: 'ما بهتر ارتباط برقرار می‌کنیم و کمتر دعوا می‌کنیم. درمان واقعاً تغییر داد.', author: 'ج و ر, زوج' },
];

const faqs = [
  { q: 'جلسه اول چگونه است؟', a: 'ما درباره آنچه شما را آورده است، آنچه می‌خواهید تغییر دهید و آنچه کار کرده یا نکرده است صحبت می‌کنیم. شما سرعت را تعیین می‌کنید—بدون فشار و قضاوت.' },
  { q: 'چند جلسه نیاز دارم؟', a: 'این به شخص و اهداف شما بستگی دارد. برخی از 6-8 جلسه کوتاه‌مدت سود می‌برند، دیگران حمایت مستمری ترجیح می‌دهند.' },
  { q: 'آیا مشاوره رایگان ارائه می‌دهید؟', a: 'بله. مشاوره رایگان 15 دقیقه‌ای یا ویدیویی به ما کمک می‌کند تا ببینیم آیا ما انتخاب خوبی برای شما هستیم.' },
  { q: 'آیا بیمه پوشش می‌دهد؟', a: 'بسیاری از پلان‌های بهداشت اضافی روان‌درمانگران ثبت‌شده را پوشش می‌دهند. لطفاً با ارائه‌دهنده خود تماس بگیرید.' },
  { q: 'آیا جلسات حضوری یا ویدیویی هستند؟', a: 'فعلاً تمام خدمات ویدیویی امن هستند. در صورت درخواست، جلسات حضوری محدود موجود است.' },
];

const LandingPageFa = () => {
  useEffect(() => {
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
    document.title = 'روان‌درمانگر تورنتو و نورث یورک | میترا بهبودی';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'روان‌درمانی حرفه‌ای در تورنتو و نورث یورک. میترا بهبودی درمان اضطراب، درمان زناشویی و افسردگی ارائه می‌دهد. امروز برای مشاوره رایگان نزد خود را ثبت کنید.');
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${SITE_URL}/fa`);
    
    // Restore English for other tabs/pages
    return () => {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    };
  }, []);

  return (
    <div style={{ background: 'var(--color-bg-page)', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      
      <Header />
      {/* Hero Section */}
      <FadeInSection>
        <section
          className={styles.hero}
          style={{
            backgroundColor: 'teal',
            backgroundPosition: 'center top',
          }}
        >
          <FallbackImage src="/IMG3063.png" alt="بنفشه" style={{ width: 280, marginBottom: 16, borderRadius: 100 }} />
          <h1 className={styles.heroTitle}>روان‌درمانی حرفه‌ای در تورنتو و نورث یورک — اضطراب، درمان زناشویی و افسردگی</h1>
          <p className={styles.heroSubtitle}>
            من میترا بهبودی هستم، روان‌درمانگر و هنر درمانگر در تورنتو و نورث یورک، که حمایت گرم و عملی برای اضطراب، روابط و انتقال‌های زندگی ارائه می‌دهم—تا بتوانید دوباره با خود ارتباط برقرار کنید و با وضوح، اعتماد و آرامش پیش بروید.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className={`btn btn-primary btn-lg ${styles.heroBtn}`}>مشاوره رایگان را رزرو کنید</a>
        </section>
      </FadeInSection>

      {/* About/Values Section */}
      <FadeInSection>
        <div id="about" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>درباره</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className={styles.sectionTitle}>درمانی امن که شما به آن احتیاج دارید</h2>
              <p>درمان باید ایمن، انسانی و واقعاً مفید باشد. من روش‌های مبتنی بر شواهد را با سبکی صادق و درمان می‌کنم، کمک می‌کنم تا الگوها را درک کنید، احساسات سخت را مدیریت کنید و تغییرات ملایم و پایدار انجام دهید.</p>
            </div>
            <div className="col-md-6 text-center">
              <FallbackImage src="/IMG3063.png" alt="کوه" className={styles.aboutImage} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Therapies/Services Section */}
      <FadeInSection>
        <div id="services" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>خدمات</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.servicesGrid}>
            {therapies.map((t, i) => (
              <div className={styles.serviceCard} key={i}>
                <FallbackImage src="/k.webp" alt="درمان" className={styles.serviceIcon} />
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
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>مشکلاتی که کمک می‌کنیم</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.issuesGrid}>
            {issues.map((issue, i) => (
              <div className={styles.issueTile} key={i}>{issue}</div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection>
        <div id="testimonials" style={{textAlign: 'center', paddingTop: '2rem'}}>
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>نظرات</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCard} key={i}>
                <blockquote className="blockquote mb-0">
                  <p style={{ color: 'var(--color-text-main)' }}>«{t.text}»</p>
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
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>سوالات متداول</h3>
        </div>
        <section className={`container ${styles.section}`}>
          <div className={`accordion ${styles.faqAccordion}`} id="faqAccordionFa">
            {faqs.map((faq, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`headingFa${i}`}>
                  <button className={`accordion-button${i !== 0 ? ' collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseFa${i}`} aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`collapseFa${i}`}>
                    {faq.q}
                  </button>
                </h2>
                <div id={`collapseFa${i}`} className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`} aria-labelledby={`headingFa${i}`} data-bs-parent="#faqAccordionFa">
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
          <h3 style={{color: 'var(--color-primary-strong)', letterSpacing: 2, fontWeight: 700}}>تماس</h3>
        </div>
        <section className={`container ${styles.contactSection}`} id="contact">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 style={{ color: 'var(--color-primary-strong)', fontWeight: 600 }}>آماده‌اید سفر خود را شروع کنید؟</h2>
              <p>مشاوره رایگان را رزرو کنید یا با سوالات خود تماس بگیرید. من اینجا هستم تا به شما کمک کنم تعادل و قدرت پیدا کنید.</p>
              <ul className="list-unstyled">
                <li><strong>ایمیل:</strong> <a href="mailto:mitratherapy@gmail.com" style={{ color: 'var(--color-accent)' }}>mitratherapy@gmail.com</a></li>
                <li><strong>تلفن:</strong> <a href="tel:+16478647160" style={{ color: 'var(--color-accent)' }}><span dir="ltr">+1 647-864-7160</span></a></li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className="btn btn-primary mt-3">هم‌اکنون رزرو کنید</a>
            </div>
            <div className="col-md-6 text-center">
              <FallbackImage src="/mb.png" alt="تماس" style={{ maxWidth: 180 }} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className={styles.footer}>
        <FallbackImage src="/mb.png" alt="لوگو" style={{ width: 40, marginBottom: 8 }} />
        <div>© 2024 روان‌درمانی میترا بهبودی. تمام حقوق محفوظ است.</div>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/mitrabehboudi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/mitra_bhb?igsh=bnl3eHFzanozd2Jh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </a>
        </div>
        <div style={{ fontSize: '0.9rem' }}>سیاست حریم خصوصی | شرایط استفاده</div>
      </footer>
    </div>
  );
};

export default LandingPageFa; 
