# RPA.ro - New Website Structure

## Sitemap

```
/ (Home)
├── /about          — Despre Noi / About Us
├── /services       — Servicii / Services
│   ├── /services/research        — Cercetare & Design
│   ├── /services/implementation  — Implementare
│   └── /services/support         — Suport & Mentenanță
├── /industries     — Industrii / Industries
│   ├── /industries/automotive
│   ├── /industries/food-beverage
│   ├── /industries/logistics
│   └── /industries/electronics
├── /portfolio      — Proiecte / Portfolio (case studies)
├── /contact        — Contact
├── /privacy        — Politica de Confidențialitate (GDPR)
└── /cookies        — Politica de Cookie-uri (GDPR)
```

## Page Strategy

### Home (/)
- Hero: animated blue infinity logo + tagline
- 3 service pillars (Research → Implementation → Support)
- Industry carousel/grid
- Trust signals (years of experience, projects completed, partners)
- CTA → Contact form
- Language switcher (RO/EN)

### About (/about)
- Company history & mission (needs real content from Calin)
- Team section with photos
- Core values
- Partners/certifications (SICK, etc.)

### Services (/services)
- Overview with 3 pillars
- Each sub-page: detailed description, process flow, benefits
- CTAs to contact

### Industries (/industries)
- Industry-specific landing pages
- Relevant solutions for each vertical
- Good for SEO targeting

### Portfolio (/portfolio)
- Case studies (need content from Calin)
- Before/after, metrics, client testimonials

### Contact (/contact)
- Form → sends to Telegram (TODO: bot/group)
- Map embed
- Phone, email, address
- Business hours

### GDPR Pages
- Privacy Policy (Romanian law compliant)
- Cookie Policy
- Cookie consent banner (opt-in)

## SEO Strategy
- Bilingual (RO/EN) with proper hreflang tags
- Each page optimized for specific keywords
- Schema.org structured data (Organization, LocalBusiness, Service)
- Meta descriptions in both languages
- OG/Twitter cards for social sharing
- Sitemap.xml + robots.txt
- Fast load times (SvelteKit SSR/SSG + Tailwind = tiny bundles)

## Tech Stack
- **Framework:** SvelteKit (latest)
- **Styling:** Tailwind CSS v4
- **i18n:** Custom or paraglide-js
- **Deployment:** Railway (SSR) or Cloudflare Pages (SSG)
- **Contact form:** API route → Telegram Bot API
- **Analytics:** Plausible or Umami (GDPR-friendly, no cookies)
- **CMS:** Markdown files or simple headless CMS for content updates
