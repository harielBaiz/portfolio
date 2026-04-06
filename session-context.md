# HAriel Baiz · Portfolio — Session Context

> Keep this file in the root of the repo.
> Start each Claude session with:
> "Read context from `https://raw.githubusercontent.com/harielBaiz/portfolio/main/session-context.md` and today I want to work on [X]."

---

## Who I am

- **Name:** Ariel Ortiz
- **Role targeting:** Product Designer / Design Systems Designer
- **Experience:** 5–8 years
- **Domain:** B2B SaaS (Bitsight)
- **Native language:** Spanish (English is secondary)
- **Tools:** Figma, Design Tokens, Prototyping, WCAG/A11y

---

## Repository

- **GitHub:** https://github.com/harielBaiz/portfolio
- **Live site:** https://harielbaiz.github.io/portfolio/ _(GitHub Pages, served from main branch)_

---

## File Structure

```
portfolio/
├── index.html                              ← Landing page (renamed from portfolio-landing.html)
├── case-study-infosec-questionnaire.html   ← Case Study 1 · InfoSec Questionnaire
├── case-study-design-tokens.html           ← Case Study 2 · Design Tokens
├── case-study-personas-ia.html             ← Case Study 3 · Personas & IA
├── css/
│   ├── tokens.css      ← DS tokens: colors, type scale, spacing (EDIT HERE for global changes)
│   ├── base.css        ← Reset, nav, footer, buttons, chips, animations
│   ├── landing.css     ← Landing page specific styles
│   └── case-study.css  ← All case study shared styles + hero cover pattern
└── js/
    └── site.js         ← Theme toggle, language switcher, scroll reveal, progress bar
```

---

## Current Status

| File | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Done | Landing page · nav, hero, 3 cards, skills, about, contact |
| `case-study-infosec-questionnaire.html` | ✅ Structure done | Needs real images in placeholders |
| `case-study-design-tokens.html` | ✅ Structure done | Needs real images in placeholders |
| `case-study-personas-ia.html` | ✅ Structure done | Needs real images in placeholders |
| `css/tokens.css` | ✅ Done | Light + dark mode tokens |
| `css/base.css` | ✅ Done | Shared components |
| `css/landing.css` | ✅ Done | Landing-specific styles |
| `css/case-study.css` | ✅ Done | Case study styles + hero cover |
| `js/site.js` | ✅ Done | Theme toggle · lang scaffold · scroll reveal |

### Pending

- [ ] Add real email address (search for `data-email` in HTML, set `user` + `domain` in `site.js`)
- [ ] Add LinkedIn URL (search for `linkedin.com/in/yourprofile`)
- [ ] Add resume/CV file and link it
- [ ] Replace placeholder images (`<figure class="hero-cover hero-cover--placeholder">`) with real screenshots
- [ ] Fill in Spanish translations in `site.js` → `es: {}` object
- [ ] About page (`about.html`)

---

## Design System

### Design References
- **Figma DS:** https://www.figma.com/design/NrZReZOBki85NDzJlQKQrg/portfolio-DS
- **Visual reference:** https://www.doc.cc/articles/craft-crisis — editorial layout, narrow column, neutral color system

### Color Rules
- **Neutral scale only** for all UI: backgrounds, borders, text, surfaces
- **`--brand` (#4B1EBA purple)** = interactive elements ONLY: buttons, links, active nav, tags text, focus ring
- **Illustration palette** (magenta, purple tints) = NOT for UI — illustration only
- Dark mode is handled by `[data-theme="dark"]` in `tokens.css` — all colors flip automatically

### Typography System (from Figma Typography page)

| Token | Font | Size / Line-height | Weight | Usage |
|-------|------|--------------------|--------|-------|
| Display | Space Grotesk | 40–72px / tight | Bold | Hero h1, big headings |
| Heading/XL | DM Sans | 32px / 40px · −0.5px | ExtraBold | Section h2 |
| Heading/LG | DM Sans | 24px / 32px · −0.25px | ExtraBold | Sub-section h2 |
| Heading/MD | DM Sans | 20px / 28px | Medium | h3 |
| Body/LG | Lora | 18px / 30px | Regular | Hero subtitle |
| Body/MD | Lora | 16px / 26px | Regular | All body paragraphs |
| Label/MD | DM Sans | 14px / 20px | Medium | Buttons, CTAs, labels |
| Nav | DM Sans | 14px / 20px | Regular / Medium active | Navigation |
| Caption | DM Sans | 12px / 16px | Regular | Meta, footer |
| Logo | Space Grotesk | 18px | Bold | Nav name |

### Theme Toggle
- Toggle button is in every page nav (`☾ / ☀` icon swap)
- Persisted in `localStorage` under key `portfolio-theme`
- OS preference detected on first visit
- To test dark mode in browser console: `document.documentElement.setAttribute('data-theme', 'dark')`

### Language Switcher
- `EN / ES` toggle button in every page nav
- Add `data-i18n="key"` to translatable elements in HTML
- Fill Spanish strings in `js/site.js` → `es: { }` object
- Persisted in `localStorage` under key `portfolio-lang`

### Email (anti-Cloudflare obfuscation)
Emails are injected by JS at runtime to prevent Cloudflare from mangling them.
Edit these two lines in `js/site.js`:
```js
const user   = 'your';      // ← your email username
const domain = 'email.com'; // ← your email domain
```

---

## Case Study 1 — InfoSec Questionnaire

- **Role:** Lead designer · reviewer UI (read-only). Collaborated on respondent components.
- **Design System:** Bitsight DS
- **Key design:** 3 toolbar proposals → vertical action rail (review, flag, bookmark)
- **Pain points solved:** flag filtering, bulk document download
- **Outcomes:** −40% review time, −60% clarification requests, +40% satisfaction
- **Bonus:** AI hackathon → became SOC2 Instant Insights product

---

## Case Study 2 — Design Tokens

- **Role:** Led adoption of design tokens for Bitsight Design System
- **Key outcomes:** 160+ tokens shipped, light + dark + color-blind modes, one source of truth
- **Key themes:** design/engineering alignment, scalability, semantic naming
- **Memorable detail:** users were my teammates — I saw the reactions in real time

---

## Case Study 3 — Personas & IA

- **Role:** Lead designer · user research + IA strategy
- **Key outcomes:** 4 research-backed personas, product split (VRM / TMH), 15→2 day assessment turnaround
- **Key themes:** object-oriented IA, mental models, feedback pattern design
- **Research methods:** stakeholder interviews, CS ticket analysis, affinity mapping

---

## How to Work with Claude

### Starting a session
```
Read context from https://raw.githubusercontent.com/harielBaiz/portfolio/main/session-context.md
and today I want to work on [X].
```

### Sharing a specific file
```
The current [filename] is at https://github.com/harielBaiz/portfolio/blob/main/[filename]
Please [do X].
```

### After Claude edits a file
1. Claude outputs the updated file in the chat (or as a downloadable file)
2. Copy the content → save to your local repo
3. `git add [file] && git commit -m "your message" && git push`
4. GitHub Pages updates in ~30 seconds

### CSS-only changes
For changes only in CSS files, Claude can output just the changed rule block.
You paste it into the right file locally — no need to download the whole file.
