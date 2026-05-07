# 🌿 KAMIAM — Filipino Kamias Gummy Candy Landing Page

> Sour. Wild. Irresistibly Filipino.

A premium, fully responsive React + Vite landing page for **KAMIAM**, a fictional Filipino startup making gummy candy from kamias fruit. Built with a modern startup aesthetic, smooth scroll animations, and a vibrant green/yellow palette.

---

## 📁 Project Structure

```
kamiam/
├── public/
│   └── favicon.svg             # SVG favicon
├── src/
│   ├── components/
│   │   ├── Reveal.jsx          # Scroll-triggered fade-up animation
│   │   ├── Navbar.jsx          # Sticky navbar with mobile drawer
│   │   ├── Hero.jsx            # Hero section with animated blobs
│   │   ├── About.jsx           # About / origin story section
│   │   ├── Features.jsx        # Feature cards grid
│   │   ├── Products.jsx        # Product showcase with hover effects
│   │   ├── Testimonials.jsx    # Customer reviews grid
│   │   ├── FAQ.jsx             # Accordion FAQ section
│   │   ├── Contact.jsx         # Contact form with success state
│   │   ├── Footer.jsx          # Footer with newsletter signup
│   │   └── KamiamLanding.jsx   # Root layout — composes all sections
│   ├── data/
│   │   └── constants.js        # All copy, products, FAQs, testimonials
│   ├── App.jsx                 # App entry — renders KamiamLanding
│   ├── main.jsx                # ReactDOM.createRoot entry
│   └── index.css               # Tailwind directives + global styles
├── index.html                  # HTML shell with meta tags + fonts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme with custom colors
├── postcss.config.js           # PostCSS with Tailwind + Autoprefixer
├── eslint.config.js            # ESLint for React
├── vercel.json                 # Vercel SPA rewrite rules
├── .gitignore
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** v9+ (comes with Node)

### Installation

```bash
# 1. Clone or unzip the project
cd kamiam

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Available Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start dev server at localhost:3000       |
| `npm run build` | Build for production → `/dist`           |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`  | Run ESLint on all source files           |

---

## 🎨 Tech Stack

| Tool           | Version  | Purpose                        |
|----------------|----------|--------------------------------|
| React          | 18.x     | UI framework                   |
| Vite           | 5.x      | Build tool & dev server        |
| Tailwind CSS   | 3.x      | Utility-first CSS              |
| PostCSS        | 8.x      | CSS processing                 |
| Autoprefixer   | 10.x     | Vendor prefixes                |

### Fonts (via Google Fonts)
- **Fraunces** — Distinctive serif used for headings
- **Nunito** — Rounded sans-serif for body and UI text

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: kamiam-landing
# - In which directory is your code? ./
# - Want to override settings? N
```

Vercel auto-detects Vite and sets `npm run build` + `dist` as output.

### Option B — Vercel Dashboard (no CLI)

1. Push this project to a **GitHub** repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-configures everything — click **Deploy**

> The included `vercel.json` handles SPA routing (all paths → `index.html`).

---

## 🐙 Deploy to GitHub Pages

```bash
# Install the gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

Add `base: '/kamiam-landing/'` to `vite.config.js` if your repo name differs.

---

## ✏️ Customization Guide

### Change copy / products
Edit `src/data/constants.js` — all text, product names, FAQs, and testimonials live here.

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors.kamias` and update hex values in component inline styles.

### Add a new section
1. Create `src/components/MySection.jsx`
2. Import and add it inside `src/components/KamiamLanding.jsx`
3. Add a nav link to `NAV_LINKS` in `src/data/constants.js`
4. Give your section `id="mysection"` to enable smooth scroll

### Add real form submission
In `src/components/Contact.jsx`, replace the `setTimeout` in `handleSubmit` with a real API call (e.g., Formspree, EmailJS, or your own backend).

---

## 📦 Production Build

```bash
npm run build
```

Output goes to `dist/`. The build is optimized with:
- Code splitting (React vendor chunk separated)
- Asset hashing for cache busting
- Minified HTML/CSS/JS

---

## 📄 License

MIT — free to use, modify, and deploy. Attribution appreciated but not required.

---

Made with 💚 in the Philippines.
