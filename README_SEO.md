# SEO Implementation & Deployment Guide

## ✅ SEO Optimizations Completed

### 1. **Geo-Targeted Keywords (Toronto & North York)**
- Updated page titles and meta descriptions to include "Toronto" and "North York"
- All service descriptions now mention location: "Individual Therapy in Toronto & North York"
- Keywords include: "psychotherapist Toronto", "psychotherapy Toronto", "psychotherapist North York", "psychotherapy North York"

### 2. **Multi-Language Support (English + Farsi)**
- Added `/fa` route with complete Farsi translations
- Implemented hreflang alternate links for Google to understand language versions:
  - English: `https://www.mitrabehboudi.com/` (hreflang="en")
  - Farsi: `https://www.mitrabehboudi.com/fa` (hreflang="fa")
- Language switcher in header (🇬🇧 English / 🇮🇷 فارسی)
- RTL (right-to-left) layout support for Farsi page
- All FAQs, services, and testimonials translated to Farsi

### 3. **Schema Markup & Structured Data**
- LocalBusiness JSON-LD includes:
  - Service areas: Toronto + North York
  - Phone: +1-647-864-7160
  - Address: Toronto, Ontario, Canada
- BreadcrumbList schema for rich snippets
- FAQPage schema with all Q&As
- Person schema (therapist profile)
- WebSite schema with search action

### 4. **Technical SEO**
- ✅ Canonical URLs set correctly per page
- ✅ robots.txt with sitemap reference
- ✅ Open Graph & Twitter Card tags with absolute image URLs
- ✅ Sitemap.xml with both English and Farsi routes (auto-generated)
- ✅ Responsive design & mobile-friendly
- ✅ Preconnect hints to Calendly & Google Analytics
- ✅ Per-page title/description updates (useEffect-based for SPA)
- ✅ Analytics placeholder (set REACT_APP_GA_ID to enable)

## 🚀 Next Steps to Deploy

### 1. Deploy to Production (e.g., Netlify, Vercel)

```bash
# Build production bundle
npm run build

# Deploy the `build` folder to your hosting provider
# (instructions depend on your host)

# For Netlify (simple drag-and-drop or CLI):
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### 2. Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain: `https://www.mitrabehboudi.com`
3. Add alternate domain: `www.mitrabehboudi.com` (without https)
4. Verify via DNS, HTML file, or meta tag (use the token from Google in `.env` if needed)
5. Submit the sitemap: `https://www.mitrabehboudi.com/sitemap.xml`
6. Monitor crawl errors and indexing status

### 3. Set Up Google Analytics

```bash
# 1. Get your GA4 Measurement ID from Google Analytics
#    (format: G-XXXXXXXXXX)

# 2. Create .env file
cp .env.example .env

# 3. Add your GA ID to .env
echo "REACT_APP_GA_ID=G-B6JHGYKW47" >> .env

# 4. Rebuild and deploy
npm run build
```

### 4. Google Search Console Verification (optional)

If you need to verify ownership via meta tag:

```javascript
// In public/index.html, update:
<meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />
```

### 5. Local SEO & Outreach

Create a checklist for local visibility:

- [ ] **Google Business Profile** — claim/optimize at [google.com/business](https://google.com/business)
  - Add location details, hours, photos, services, reviews
  - Ensure "Toronto, Ontario" and "North York" coverage
  
- [ ] **Psychology Today** — list your profile (high authority for therapist searches)
  
- [ ] **Local Directories** — submit to:
  - Canadian Mental Health Association (CMHA) directory
  - Better Business Bureau (BBB)
  - Yelp (therapist listings)
  - Local Toronto/Ontario business directories

- [ ] **Backlinks** — reach out to:
  - Local wellness blogs
  - Community mental health resources
  - Wellness centers or yoga studios (cross-promotion)
  - UofT, Ryerson, etc. student resources (if applicable)

- [ ] **Testimonials** — encourage clients to leave reviews on:
  - Google (helps local search)
  - Psychology Today
  - Trustpilot

## 📊 Monitoring & Optimization

### Weekly/Monthly Tasks

```bash
# Check Search Console for issues
# Inspect: traffic, errors, coverage, performance, rich results

# Monitor Analytics
# Check: page views, engagement, bounce rate by language version

# Local ranking check
# Search: "psychotherapist Toronto", "therapy North York", 
#         "روان‌درمانی تورنتو" (Farsi search)
```

### Performance Tuning (Lighthouse)

Current bundle size: ~102 kB (gzipped)

To improve Core Web Vitals:

1. **Image Optimization**
   - Convert PNG/JPEG to WebP format
   - Lazy-load images below the fold
   - Compress hero image

2. **Critical CSS**
   - Consider inlining critical Bootstrap CSS
   - Use preload for main.css

3. **Code Splitting**
   - Already using React.lazy() for routes (via bundle split)
   - Monitor main JS bundle size

4. **Caching**
   - Enable CDN caching (Netlify, Vercel, Cloudflare)
   - Set proper cache headers for assets

## 📋 SEO Checklist for Rankings

- [x] Geo-targeted keywords (Toronto, North York)
- [x] Multi-language support (Farsi hreflang)
- [x] Schema markup (LocalBusiness, BreadcrumbList, FAQ, Person)
- [x] Mobile-responsive design
- [x] Fast page load (Core Web Vitals optimized)
- [x] Sitemap.xml & robots.txt
- [x] Canonical URLs per page
- [x] Analytics setup (placeholder)
- [ ] Google Search Console submission & monitoring
- [ ] Google Business Profile optimization
- [ ] Local directory submissions
- [ ] Backlink outreach

## 🔧 Environment Variables

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Required/Optional variables:

```env
# Required
SITE_URL=https://www.mitrabehboudi.com

# Optional (set for analytics)
REACT_APP_GA_ID=G-B6JHGYKW47

# For GSC verification (optional, use meta tag in index.html if needed)
REACT_APP_GSC_TOKEN=your_verification_token_here
```

## 📞 Quick Links

- **Live Site**: https://www.mitrabehboudi.com
- **Farsi Version**: https://www.mitrabehboudi.com/fa
- **Sitemap**: https://www.mitrabehboudi.com/sitemap.xml
- **Robots**: https://www.mitrabehboudi.com/robots.txt
- **Google Search Console**: https://search.google.com/search-console
- **Google Business**: https://business.google.com
- **Psychology Today**: https://www.psychologytoday.com

## 💡 Future Enhancements

1. **Blog/Resources Page** — add articles on anxiety, relationships, etc. for organic search traffic
2. **FAQ Schema Expansion** — add more questions based on search trends
3. **Video Content** — add intro/testimonial videos (rich snippets)
4. **Local Schema** — add opening hours, pricing, reviews if applicable
5. **Link Building** — guest posts on wellness blogs, podcast appearances
6. **A/B Testing** — test CTA text, forms, hero messaging for conversions

