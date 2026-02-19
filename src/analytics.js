export function initAnalytics() {
  const GA_ID = process.env.REACT_APP_GA_ID || '';
  if (!GA_ID) return;

  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: true });
}

export function trackPage(path) {
  const GA_ID = process.env.REACT_APP_GA_ID || '';
  if (!GA_ID || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}
