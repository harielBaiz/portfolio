# Héctor Ariel Baiz · Portfolio — Session Context

> Keep this file in the root of the repo.
> Start each Claude session with:
> "Read context from `https://raw.githubusercontent.com/harielBaiz/portfolio/main/session-context.md` and today I want to work on [X]."

---

## Who I am

- **Name:** Héctor Ariel Baiz
- **Role targeting:** Product Designer / Design Systems Designer
- **Experience:** 5–8 years
- **Domain:** B2B SaaS · Last company: Bitsight (cybersecurity) — [add current/target domain if different]
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
├── index.html                              ← Landing page
├── about.html                              ← About Me page
├── case-study-design-tokens.html           ← Case Study 1 · Design Tokens
├── case-study-infosec-questionnaire.html   ← Case Study 2 · InfoSec Questionnaire
├── case-study-personas-ia.html             ← Case Study 3 · Personas & IA
├── css/
│   ├── tokens.css      ← DS tokens: colors, type scale, spacing (EDIT HERE for global changes)
│   ├── base.css        ← Reset, nav, footer, buttons, chips, animations
│   ├── landing.css     ← Landing page specific styles
│   ├── case-study.css  ← All case study shared styles + hero cover pattern
│   └── about.css       ← About page specific styles
├── js/
│   └── site.js         ← Theme toggle, language switcher, scroll reveal, progress bar
├── images/
│   ├── cs-tokens-cover.jpg
│   ├── elevation.png
│   ├── token-naming-structure.jpg
│   └── token-reference-chain.png
└── downloads/
    ├── resumeCV-EN.pdf
    └── resumeCV-ES.pdf
```

---

## Current Status

| File | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Done | Nav, hero, 3 project cards, skills, about, contact |
| `about.html` | ✅ Done | Bio, PVP, personal section, contact |
| `case-study-design-tokens.html` | ✅ Structure done | Needs real images in placeholders |
| `case-study-infosec-questionnaire.html` | ✅ Structure done | New sections added (see CS2 notes below). Needs real images in placeholders |
| `case-study-personas-ia.html` | ✅ Structure done | Needs real images in placeholders |
| `css/tokens.css` | ✅ Done | Light + dark mode tokens |
| `css/base.css` | ✅ Done | Shared components |
| `css/landing.css` | ✅ Done | Landing-specific styles |
| `css/case-study.css` | ✅ Done | Case study styles + hero cover |
| `css/about.css` | ✅ Done | About page styles |
| `js/site.js` | ✅ Done | Theme toggle · lang scaffold · scroll reveal · progress bar |
| `downloads/resumeCV-EN.pdf` | ✅ In repo | Linked from `about.html` nav |
| `downloads/resumeCV-ES.pdf` | ✅ In repo | Available |

### Pending

- [ ] Add real email address — edit `js/site.js`: set `user` and `domain` variables
- [ ] Add LinkedIn URL — search `linkedin.com/in/yourprofile` across all HTML files
- [ ] Replace placeholder images (`<figure class="hero-cover hero-cover--placeholder">`) with real screenshots in all 3 case studies
- [ ] Fill in Spanish translations in `js/site.js` → `es: {}` object
- [ ] Rename CV files to match `about.html` nav link: `downloads/Hector-Ariel-Baiz-Resume-EN.pdf` (or update the href to match current filenames)

---

## Design System

### References
- **Figma DS:** https://www.figma.com/design/NrZReZOBki85NDzJlQKQrg/portfolio-DS
- **Wireframe page node:** `242:40156` (wireframe page — custom questionnaire lo-fi frames live here)
- **Visual reference:** https://www.doc.cc/articles/craft-crisis — editorial layout, narrow column, neutral color system

### Color Rules
- **Neutral scale only** for all UI: backgrounds, borders, text, surfaces
- **`--brand` (`#4B1EBA` purple)** = interactive elements ONLY: buttons, links, active nav, tag text, focus ring
- **Illustration palette** (magenta, purple tints) = NOT for UI — illustration only
- Dark mode handled by `[data-theme="dark"]` in `tokens.css` — all colors flip automatically

### Typography System

| Token | Font | Size / Line-height | Weight | Usage |
|-------|------|--------------------|--------|-------|
| Display | DM Sans | 40–72px / tight | Bold | Hero h1, big headings |
| Heading/XL | DM Sans | 32px / 40px · −0.5px | ExtraBold | Section h2 |
| Heading/LG | DM Sans | 24px / 32px · −0.25px | ExtraBold | Sub-section h2 |
| Heading/MD | DM Sans | 20px / 28px | Medium | h3 |
| Body/LG | Lora | 18px / 30px | Regular | Hero subtitle |
| Body/MD | Lora | 16px / 26px | Regular | All body paragraphs |
| Label/MD | DM Sans | 14px / 20px | Medium | Buttons, CTAs, labels |
| Nav | DM Sans | 14px / 20px | Regular / Medium active | Navigation |
| Caption | DM Sans | 12px / 16px | Regular | Meta, footer |
| Logo | DM Sans | 18px | Bold | Nav name |

### Theme Toggle
- Button in every page nav (`☾ / ☀` icon swap)
- Persisted in `localStorage` under key `portfolio-theme`
- OS preference detected on first visit
- Test in console: `document.documentElement.setAttribute('data-theme', 'dark')`

### Language Switcher
- `EN / ES` toggle in every page nav
- Add `data-i18n="key"` to translatable elements in HTML
- Fill Spanish strings in `js/site.js` → `es: { }` object
- Persisted in `localStorage` under key `portfolio-lang`

### Email (anti-Cloudflare obfuscation)
Injected by JS at runtime. Edit in `js/site.js`:
```js
const user   = 'your';      // ← your email username
const domain = 'email.com'; // ← your email domain
```

---

## Case Study 1 — Design Tokens

- **File:** `case-study-design-tokens.html`
- **Role:** Led adoption of design tokens for Bitsight Design System
- **Key outcomes:** 160+ tokens shipped, light + dark + color-blind modes, one source of truth
- **Key themes:** design/engineering alignment, scalability, semantic naming
- **Memorable detail:** users were my teammates — I saw their reactions in real time
- **Images in repo:** `cs-tokens-cover.jpg`, `token-naming-structure.jpg`, `token-reference-chain.png`, `elevation.png`

---

## Case Study 2 — InfoSec Questionnaire

- **File:** `case-study-infosec-questionnaire.html`
- **Role:** Lead designer · reviewer UI (read-only). Collaborated on respondent components.
- **Design System:** Bitsight DS
- **Key design:** 3 toolbar proposals → vertical action rail (review, flag, bookmark)
- **Pain points solved:** flag filtering, bulk document download
- **Outcomes:** −40% review time, −60% clarification requests, +40% satisfaction
- **Bonus:** AI hackathon → became SOC2 Instant Insights product

### Sections added this session

**"Feature inventory first"** (Design Decisions section)
- Added reverse engineering context: no formal documentation existed, inventory was built from scratch by mapping the live product.

**"Mapping the domain before the UI"** (new subsection in Design Decisions)
- OO domain analysis: 6 core objects (Questionnaire, Question, Score, Finding, Message, Internal Note, Document)
- Inline SVG UML conceptual model — styled with DM Mono, warm paper palette, dark mode aware
- Key insight: Question is the unit of work; toolbar scoped to Question, not the page
- Callout explaining the three distinct communication channels (Finding / Message / Internal Note)
- Placeholder for Figma domain model image (to add when ready)

**"Surfacing the score without exposing the formula"** (new subsection in Design Decisions)
- Problem: score formula was opaque — reviewers couldn't link the number back to inputs
- Solution: surface inputs (answer score + priority) inline at question level
- Score uses five-state icon + color system: Good, Fair, Warn, Bad, N/A — adopted from Bitsight DS (icon + color, replacing color-only scale → accessibility improvement)
- At category/questionnaire level: numerical with same icon for comparison
- Tooltip copy for N/A: *"Questions haven't been answered or graded yet"*
- Tooltip range for Bad: **0–24** (0 included as safe default; confirm minimum with engineering)
- Placeholder for scoring UI screenshots

**"What this project taught me"** (Lessons section — rewritten)
- Consolidated from 5 numbered items to 4 unnumbered paragraphs
- Lessons now reflect: domain-first thinking, structural decisions (three channels + score transparency), dual research methods, system-level decisions that compound

### Artifacts produced this session

| Artifact | File | Notes |
|----------|------|-------|
| Object Analysis spreadsheet | `oo-object-analysis-v2.xlsx` | 2 sheets: Object Analysis (with deferred rows) + Prioritization Matrix |
| Figma wireframes script | `figma-wireframes-questionnaire.js` | Paste into Figma › Plugins › Development › Open Console — builds 4 lo-fi frames for Custom Questionnaire creation wizard |

### Image placeholders still to fill

| Placeholder | What to add |
|-------------|-------------|
| Feature inventory audit | Annotated screenshot or spreadsheet of old platform |
| Domain model (Figma) | Export from Figma — OO model deduced from existing questionnaire |
| Question iterations | `images/question-iterations.png` (already referenced) |
| Final question design | Figma screenshot of vertical rail |
| Scoring UI | Question-level (qualitative) + questionnaire-level (numerical) side by side |
| Light/dark | `images/questionnaire-light-dark.png` (already referenced) |
| Categories panel | `images/categories-panel.png` (already referenced) |
| Questions view | `images/questions.png` (already referenced) |
| Prioritization matrix | Your impact vs. feasibility matrix image |

---

## Case Study 3 — Personas & IA

- **File:** `case-study-personas-ia.html`
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

### Claude's GitHub access
Claude can read public repo pages via `github.com` URLs. **`raw.githubusercontent.com` is blocked** in Claude's sandbox — upload files directly to the chat instead.

**Workflow after Claude edits a file:**
1. Claude outputs the updated file as a download
2. Save it to your local repo (replace the existing file)
3. `git add [file] && git commit -m "your message" && git push`
4. GitHub Pages updates in ~30 seconds

**Do not share GitHub tokens in chat.** If automation is needed, use GitHub Actions secrets or environment variables. Revoke any token shared in a previous session immediately at https://github.com/settings/tokens