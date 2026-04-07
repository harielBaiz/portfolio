// Mark JS as available immediately — prevents .reveal opacity:0 flash
document.documentElement.classList.add('js');

/**
 * site.js
 * ─────────────────────────────────────────────────────────
 * Héctor Ariel Baiz · Portfolio
 *
 * Features:
 *   1. Theme toggle   (light ↔ dark)  — persisted to localStorage
 *   2. Language switcher scaffold     — data-i18n hooks, EN/ES strings
 *   3. Scroll reveal  (IntersectionObserver on .reveal)
 *   4. Reading progress bar           (case study pages)
 * ─────────────────────────────────────────────────────────
 */

/* ─────────────────────────────────────────────────────────
   1. THEME TOGGLE
   ─────────────────────────────────────────────────────────
   Writes data-theme="dark" | "light" on <html>.
   Falls back to OS preference, persists via localStorage.
───────────────────────────────────────────────────────── */
(function initTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
}

/* ─────────────────────────────────────────────────────────
   2. LANGUAGE SWITCHER
   ─────────────────────────────────────────────────────────
   Usage: add data-i18n="key" to any element.
   Call setLang('es') to switch to Spanish.
   Call setLang('en') to switch back to English.

   Keys follow BEM-ish dot notation: "section.key"
   Add Spanish translations to the `es` object below.
───────────────────────────────────────────────────────── */
const i18n = {
  en: {
    /* Nav */
    'nav.work':    'Work',
    'nav.about':   'About',
    'nav.resume':  'Resume',
    'nav.contact': 'Contact ↗',

    /* Landing — hero */
    'hero.eyebrow': 'Product Designer · Design Systems',
    'hero.title':   'I design products that scale — and systems that hold them together.',
    'hero.sub':     '5+ years building B2B SaaS at Bitsight. I bridge design and engineering through token-based systems, research-driven decisions, and interfaces that make sense.',
    'hero.cta.work':  'See my work ↓',
    'hero.cta.about': 'About me',

    /* Landing — work section */
    'work.label': 'Featured Work',
    'work.title': 'Three projects. One consistent thread.',
    'work.sub':   'Research-backed decisions, systems thinking, and a focus on outcomes — not just deliverables.',

    /* Card CTAs */
    'card.cta': 'Read Case Study →',

    /* Landing — skills */
    'skills.label': 'Skills & Tools',
    'skills.title': 'What I bring to the table',

    /* Landing — about */
    'about.label': 'About',
    'about.title': 'Design that earns its place',
    'about.p1': "I'm a product designer with 5+ years building B2B SaaS tools. Most of that time was spent at Bitsight — a cybersecurity company where design decisions have real consequences for security teams managing hundreds of vendors.",
    'about.p2': "I care most about the work that happens between wireframes and shipping: the alignment conversations, the edge-case inventory, the moment a token system makes a color-blind mode trivially easy to add. Good design is often invisible. Broken design always isn't.",
    'about.p3': 'Outside of product work, I\'m drawn to typography, editorial design, and building things that feel considered — not assembled.',
    'about.cta.resume': 'View Resume ↗',
    'about.cta.hello':  'Say hello',

    /* Landing — contact */
    'contact.title': "Let's work together",
    'contact.sub':   'Open to product design and design systems roles. Remote-friendly.',

    /* Footer */
    'footer.copy': '© 2025 Héctor Ariel Baiz · Product Designer',
  },

  es: {
    /* Nav */
    'nav.work':    'Proyectos',
    'nav.about':   'Sobre mí',
    'nav.resume':  'CV',
    'nav.contact': 'Contacto ↗',

    /* Landing — hero */
    'hero.eyebrow': 'Diseñador de Producto · Design Systems',
    'hero.title':   'Diseño productos que escalan — y los sistemas que los sostienen.',
    'hero.sub':     'Más de 5 años construyendo SaaS B2B en Bitsight. Conecto diseño e ingeniería a través de sistemas de tokens, decisiones basadas en investigación e interfaces que realmente tienen sentido.',
    'hero.cta.work':  'Ver proyectos ↓',
    'hero.cta.about': 'Sobre mí',

    /* Landing — work */
    'work.label': 'Proyectos',
    'work.title': 'Tres proyectos. Un hilo conductor.',
    'work.sub':   'Decisiones respaldadas por investigación, pensamiento sistémico y foco en resultados — no solo en entregables.',

    /* Card CTAs */
    'card.cta': 'Ver Case Study →',

    /* Landing — skills */
    'skills.label': 'Habilidades y Herramientas',
    'skills.title': 'Lo que aporto al equipo',

    /* Landing — about */
    'about.label': 'Sobre mí',
    'about.title': 'Diseño que se justifica solo',
    'about.p1': 'Soy diseñador de producto con más de 5 años construyendo herramientas SaaS B2B. La mayor parte de ese tiempo lo pasé en Bitsight — una empresa de ciberseguridad donde las decisiones de diseño tienen consecuencias reales para los equipos de seguridad.',
    'about.p2': 'Me importa el trabajo que ocurre entre los wireframes y el lanzamiento: las conversaciones de alineación, el inventario de edge cases, el momento en que un sistema de tokens hace que el modo daltónico sea trivialmente fácil de implementar.',
    'about.p3': 'Fuera del trabajo de producto, me atrae la tipografía, el diseño editorial y construir cosas que se sientan pensadas — no ensambladas.',
    'about.cta.resume': 'Ver CV ↗',
    'about.cta.hello':  'Hola',

    /* Landing — contact */
    'contact.title': 'Trabajemos juntos',
    'contact.sub':   'Abierto a roles de diseño de producto y design systems. Trabajo remoto.',

    /* Footer */
    'footer.copy': '© 2025 Héctor Ariel Baiz · Diseñador de Producto',
  },
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const str = i18n[lang][key];
    if (str !== undefined) el.textContent = str;
  });

  // Update all elements with data-i18n-placeholder (inputs)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const str = i18n[lang][key];
    if (str !== undefined) el.setAttribute('placeholder', str);
  });

  // Update lang button active state
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelector('.lang-active').textContent = lang.toUpperCase();
    btn.querySelector('.lang-label').textContent =
      lang === 'en' ? 'ES' : 'EN';
  });
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'es' : 'en');
}

/* ─────────────────────────────────────────────────────────
   3. SCROLL REVEAL
   ─────────────────────────────────────────────────────────
   Any element with class .reveal animates in when visible.
───────────────────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   4. READING PROGRESS BAR
   ─────────────────────────────────────────────────────────
   Updates .progress-fill width based on scroll position.
   Only runs when the element exists (case study pages).
───────────────────────────────────────────────────────── */
function initProgressBar() {
  const fill = document.getElementById('progressFill');
  if (!fill) return;

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    fill.style.width = pct + '%';
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────
   INIT — runs after DOM is ready
───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Wire theme toggle button(s)
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Wire lang toggle button(s)
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

  // Apply stored language on page load
  setLang(currentLang);

  // Scroll reveal
  initReveal();

  // Progress bar (case studies)
  initProgressBar();

  // Sync OS theme preference change (no stored value)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('portfolio-theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
});


/* ─────────────────────────────────────────────────────────
   5. EMAIL INJECTION — avoids Cloudflare obfuscation
   All mailto: links are written by JS at runtime.
   Replace YOUR_EMAIL below with your actual address.
───────────────────────────────────────────────────────── */
(function injectEmail() {
  // Split the email to prevent static scraping too
  const user   = 'your';
  const domain = 'email.com';
  const email  = user + '@' + domain;
  const mailto = 'mailto:' + email;

  document.querySelectorAll('[data-email]').forEach(el => {
    el.href        = mailto;
    el.textContent = email;
  });
  document.querySelectorAll('[data-email-href]').forEach(el => {
    el.href = mailto;
  });
})();
