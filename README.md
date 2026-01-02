<img width="1893" height="873" alt="image" src="https://github.com/user-attachments/assets/9141a61f-5157-4d59-99e3-65166c9538d0" />




This repository is a Vite + React + Tailwind CSS personal portfolio website that showcases projects, skills, contact information, and a short bio.

---

## Table of contents

* [About](#about)
* [Live Demo](#live-demo)
* [Tech stack](#tech-stack)
* [Features](#features)
* [Screenshot](#screenshot)
* [Project structure](#project-structure)
* [Local setup](#local-setup)
* [Build & deploy](#build--deploy)
* [Accessibility, SEO & Performance](#accessibility-seo--performance)
* [Contributing](#contributing)
* [Known issues / TODO](#known-issues--todo)
* [License](#license)
* [Contact](#contact)

---

## About

This is my personal portfolio website intended to present my projects, skills, and contact details in a clean, modern layout. It uses a component-driven React structure with Tailwind CSS for styling and is deployed on Vercel.

## Live Demo

View the live site here: [https://portfolio-saravanan-k.vercel.app/](https://portfolio-saravanan-k.vercel.app/)

---
<img width="1918" height="786" alt="image" src="https://github.com/user-attachments/assets/23e3fdfb-c4d0-4d80-9ef3-214b0d1e195a" />

---
## Tech stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Bundler / Dev server:** Vite
* **Deployment:** Vercel
* **Linting / Formatting:** ESLint (config present)

## Features

* Responsive hero / About section
* Projects listing with short descriptions
* Contact section with links to LinkedIn / GitHub / Email
* Smooth scrolling and simple animations
* Dark/light-ready layout (if implemented)

## Screenshot

*Add a screenshot here to show the homepage. Replace `assets/screenshot.png` with a real image in the repo and update the path below.*

```
![Homepage screenshot](assets/screenshot.png)
```

## Project structure (high level)

```
├─ public/
├─ src/
│  ├─ components/      # Reusable UI components
│  ├─ pages/           # Page-level components (if used)
│  ├─ assets/          # Images, icons, fonts
│  └─ main.jsx         # App entrypoint
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

## Local setup

1. Clone the repo

```bash
git clone https://github.com/SaRaVaNaN0504/Personal_portfolio.git
cd Personal_portfolio
```

2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run dev server

```bash
npm run dev
# opens at http://localhost:5173 by default
```

## Build & deploy

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

**Deploy on Vercel**

1. Connect this GitHub repo to your Vercel account.
2. Ensure the build command is `npm run build` and the output directory is `dist` (Vite default).
3. Vercel will automatically deploy on push to the default branch.

*Config note:* this repo already contains a `vercel.json` file—verify its settings in Vercel if you need custom redirects or headers.

## Accessibility, SEO & Performance (quick checklist)

* Add meaningful `alt` attributes to all images.
* Ensure heading structure is semantic (`h1` → `h2` → ...).
* Add meta tags: `title`, `description`, `og:*` tags for social previews.
* Add `rel="noopener noreferrer"` to external links.
* Use `loading="lazy"` for offscreen images.
* Keep bundle size small: avoid including large libraries unnecessarily.
* Run Lighthouse audit locally and fix high-priority accessibility and performance issues.

## Contributing

If you want to suggest improvements:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-change`.
3. Commit your changes and open a pull request describing what you changed and why.

## Known issues / TODO

* Add a contact form that posts to a serverless function or third-party (Formspree/Netlify/Vercel function).
* Add unit/integration tests (Jest + React Testing Library).
* Improve SEO metadata and add sitemap / robots.txt.

## License

This repo is open for others to fork. Add a LICENSE file if you want a specific license (MIT is common for personal portfolios).

## Contact

* GitHub: [https://github.com/SaRaVaNaN0504](https://github.com/SaRaVaNaN0504)
* Live site: [https://portfolio-saravanan-k.vercel.app/](https://portfolio-saravanan-k.vercel.app/)

---

*This project is made with :heart:*
