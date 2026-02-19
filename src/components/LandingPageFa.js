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
        <div style={{ fontSize: '0.9rem' }}>سیاست حریم خصوصی | شرایط استفاده</div>
      </footer>
    </div>
  );
};

export default LandingPageFa; 
