<p align="center">
  <img src="public/sitelogo.png" alt="Ersin Sandal Logo" width="180" />
</p>

<h1 align="center">Ersin Sandal — Portfolio & Digital Ecosystem</h1>

<p align="center">
  <strong>Official Personal Website, Venture Showcase, and Executive Portfolio</strong><br />
  <em>Engineered with React 19, Vite, Framer Motion, and Enterprise-Grade Modern Web Architecture.</em>
</p>

<p align="center">
  <a href="README_TR.md">
    <img src="https://img.shields.io/badge/DOKÜMANTASYON-TÜRKÇE%20İÇİN%20TIKLAYIN-0052cc?style=for-the-badge&logo=readme&logoColor=white" alt="Türkçe Dokümantasyon" />
  </a>
</p>

<p align="center">
  <a href="https://ersinsandal.com" target="_blank"><img src="https://img.shields.io/badge/Production%20Domain-ersinsandal.com-9B111E?style=flat-square&logo=google-chrome&logoColor=white" alt="Domain"></a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Framer_Motion-13.1-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/License-Proprietary%20%2F%20MIT%20Code-brightgreen?style=flat-square" alt="License">
</p>

---

> [!NOTE]
> 🇹🇷 **Türkçe dokümantasyonu okumak için:** [README_TR.md](./README_TR.md) dosyasına göz atabilirsiniz.

---

## 📑 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Architecture & Engineering Standards](#core-architecture--engineering-standards)
3. [Page Directory & Systems Overview](#page-directory--systems-overview)
4. [Featured Projects Showcase](#featured-projects-showcase)
5. [Technology Stack](#technology-stack)
6. [Security, Privacy & Data Integrity](#security-privacy--data-integrity)
7. [Installation & Local Development](#installation--local-development)
8. [Production Build & CI/CD Pipeline](#production-build--cicd-pipeline)
9. [Design Philosophy & UI/UX Principles](#design-philosophy--uiux-principles)
10. [License & Intellectual Property](#license--intellectual-property)

---

## 💡 Executive Summary

This repository contains the source code for the official executive portfolio and digital showcase of **Ersin Sandal** — Tech Entrepreneur, Political Strategist, Media Executive, Computer Engineer, and Founder & CEO of **SliferSoft**.

The application is engineered as a lightning-fast, ultra-responsive Single Page Application (SPA) designed to reflect multidisciplinary leadership across four core pillars:
- **Tech Entrepreneurship & Product Leadership:** Founding and directing scalable ventures (SliferSoft, ATE Digital Arena), transforming high-level product vision into production-ready platforms.
- **Political Strategy & Public Engagement:** Pioneering digital-first youth mobilization movements, opinion polling architectures (A******t, 36,000+ audience), and civic engagement initiatives.
- **Media & Digital Growth:** Architecting viral organic growth models, social media campaigns, community operations (10,000+ audience), and independent esports media ecosystems.
- **Deep Software Engineering:** Advanced systems engineering spanning Zero-Knowledge Proofs (Groth16), spatial cryptographic networks (NaviSecret), high-performance desktop tools with Windows DPAPI (StorySepeti), and experimental network security research (LuckyLick).

The live production deployment is accessible at **[ersinsandal.com](https://ersinsandal.com)**.

---

## 🏛️ Core Architecture & Engineering Standards

The codebase adheres strictly to clean code practices, separation of concerns, and modular reactive design:

```
ErsinSandal-Portfolio/
├── public/
│   ├── .htaccess                   # Apache URL rewrite rules for SPA client-side routing
│   ├── favicon.svg                 # Scalable browser tab icon
│   ├── icons.svg                   # SVG sprite collection
│   └── sitelogo.png                # High-fidelity branding asset
│
├── src/
│   ├── assets/                     # High-resolution media, project logos, and profile images
│   ├── components/                 # Reusable UI molecules & layout components
│   │   ├── BackgroundParticles.jsx # tsParticles canvas particle simulation
│   │   ├── CustomCursor.jsx        # Fluid custom pointer tracking
│   │   ├── Footer.jsx / .css       # Semantic footer with contact and legal links
│   │   ├── Navbar.jsx / .css       # Sticky glassmorphic navbar with smooth scroll-to-top
│   │   ├── PageHeader.jsx / .css   # Uniform typography and page heading wrapper
│   │   └── ScrollToTop.jsx         # Automated viewport restoration across route transitions
│   │
│   ├── data/
│   │   └── projectsData.jsx        # Single source of truth (SSOT) data model for all projects
│   │
│   ├── pages/                      # Top-level view modules and routed views
│   │   ├── About.jsx               # Engineering mindset, philosophy, and biography
│   │   ├── Contact.jsx             # Serverless AJAX contact portal
│   │   ├── Experience.jsx          # Professional timeline and entrepreneurial roadmap
│   │   ├── Expertise.jsx           # Technical skills matrix and proficiency ratings
│   │   ├── Home.jsx / Home.css     # Hero presentation, typography, and portrait showcase
│   │   ├── Media.jsx               # Awards, hackathons, and published articles
│   │   ├── ProjectDetail.jsx/.css  # Dynamic deep-dive case studies per project ID
│   │   └── Projects.jsx            # Multi-category project grid with animated cards
│   │
│   ├── App.jsx                     # Root application container with Framer Motion route transitions
│   ├── main.jsx                    # React 19 DOM entry point
│   ├── index.css                   # Global design tokens, typography, CSS variables
│   └── App.css                     # Application-wide utility classes and scroll progress bar
│
├── .gitignore                      # Security-hardened git exclusion manifest
├── index.html                      # HTML5 shell with responsive viewports and SEO meta tags
├── package.json                    # Project dependencies and script declarations
└── vite.config.js                  # Vite bundler configuration and build optimizations
```

---

## 🧭 Page Directory & Systems Overview

### 1. Home (`/`)
- Dynamic role presentation displaying core professional identities (Computer Engineer, Tech Entrepreneur, SliferSoft Founder & CEO).
- Premium portrait container with layered decorative geometry and error-fallback image handlers.
- Quick navigation pathways to key portfolio hubs.

### 2. About (`/hakkimda`)
- Detailed breakdown of personal engineering philosophy: the intersection of rigorous systems analysis, user-centric product strategy, and scalable code.
- Overview of academic background and continuous multi-domain research.

### 3. Experience (`/deneyim`)
- Chronological timeline charting founding ventures, startup leadership, and professional corporate software engineering internships (e.g., ARGEYA).
- Demonstrates ownership from initial problem formulation through architectural design to production deployment.

### 4. Projects & Vision (`/projeler`)
- Comprehensive interactive showcase displaying commercial products, open-source utilities, experimental security research, and academic benchmarks.
- Dynamic metadata badges for project status (`Aktif`, `Geliştirme`, `Tamamlandı`, `Gizli Proje`).

### 5. Project Detail (`/projeler/:id`)
- Deep-dive technical whitepaper presentation for each individual project.
- Structured **Detail Meta Grid** displaying project category, platform, team role, repositories, and exact technology stack.
- In-depth architectural analysis, problem statements, mathematical foundations, and implementation diagrams.

### 6. Expertise (`/uzmanlik`)
- Technical proficiency matrix spanning Software Engineering, Distributed Systems, Desktop & Reverse Engineering, Machine Learning, and Cloud Infrastructure.

### 7. Media & Honors (`/medya`)
- Documented record of competitive hackathons, regional startup recognition, media appearances, and academic milestones.

### 8. Contact (`/iletisim`)
- Direct communication portal featuring serverless AJAX dispatch via Formspree, preventing intrusive page redirects and maintaining continuous state.

---

## 🚀 Featured Projects Showcase

The portfolio dynamically renders detailed case studies for all major engineering ventures:

| Project | Category | Key Technologies | Description |
| :--- | :--- | :--- | :--- |
| **[SliferSoft](https://slifersoft.com)** | Tech Company & Studio | React, Next.js, Spring Boot, Java | Independent technology company building proprietary digital products and scalable systems. |
| **[NaviSecret](https://github.com/ersinsandal/NaviSecret)** | Cryptographic Spatial Network | React 19, Fastify, Circom (ZKP), PostgreSQL, Docker | Zero-Knowledge spatial social network with geofenced AES-256-GCM capsules and proximity discovery. |
| **[StorySepeti](https://github.com/ersinsandal/StorySepeti)** | Desktop Software & Security | Python 3.10+, CustomTkinter, FFmpeg, Windows DPAPI | Maximum-fidelity Instagram story archiver bypassing the 720p cap via DASH stream lossless multiplexing. |
| **[SliferJump 2.0](https://github.com/ersinsandal/SliferJump)** | 2D Game Engine & Web Audio | Vanilla JS, HTML5 Canvas, p5.js, Web Audio API | Vertical platformer featuring Newtonian physics, anti-camping dynamic lava, and procedural oscillator synthesis. |
| **[LuckyLick](https://github.com/ersinsandal/LuckyLick-showcase)** | Cybersecurity Research | Python, DoH, TLS SNI Injection, HTTP 206 Streaming | Experimental censorship bypass research validating VPN-less media streaming through DNS tunneling. |
| **[ATE Digital Arena](https://github.com/ersinsandal/Alanya-Taudra-Esports)** | Competitive Esports Platform | Next.js 15, React 19, Tailwind CSS v4, Prisma, PostgreSQL | Full-scale digital esports infrastructure with ATE ID athlete passports, tournament engines, and audit logs. |
| **Site Defteri** | Property Management System | Spring Boot, Next.js, React, MySQL | Centralized multi-tenant management software for residential complexes and building administrations. |
| **B2X LoRa Mesh** | IoT & Hardware Mesh | LoRa, C++, Embedded Systems | Low-power, long-distance wireless telecommunication protocol for sensor networks. |
| **CV Feature Benchmark** | Machine Learning Research | Python, Scikit-Learn, SVM, HOG, LBP | Empirical evaluation comparing raw pixels, HOG, and LBP feature extractors across diverse vision datasets. |
| **İlanZeka** | Enterprise Software | Corporate System Architecture | Professional enterprise engineering experience completed within ARGEYA. |

---

## 🛠️ Technology Stack

### Frontend & Rendering Layer
- **Core Library:** [React 19](https://react.dev/) (Concurrent rendering, fine-grained state management)
- **Build Engine & Bundler:** [Vite 8](https://vitejs.dev/) (Instant HMR, ES-module native bundling)
- **Routing:** [React Router v7](https://reactrouter.com/) (Declarative client-side routing)
- **Motion & Physics:** [Framer Motion 13](https://www.framer.com/motion/) (Hardware-accelerated layout and mount transitions)
- **Canvas Particle Engine:** [react-tsparticles](https://particles.js.org/) & `tsparticles-slim`
- **Iconography:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Styling & Design System
- **Pure CSS3 Modules & Variables:** Modern vanilla CSS utilizing design tokens (`--color-primary`, `--color-background`, `--glass-bg`).
- **Glassmorphism Pipeline:** Multi-layer backdrop filters (`backdrop-filter: blur(20px)`), frosted glass borders, and subtle radial gradients.
- **Fluid Responsive Layouts:** CSS Grid and Flexbox with `clamp()` typography for seamless scaling from 320px mobile screens to 4K ultra-wide monitors.

---

## 🔒 Security, Privacy & Data Integrity

Security and zero-trust engineering are foundational to this portfolio:

1. **Zero Tracking / Zero Telemetry:** No third-party ad networks, surveillance beacons, or Google Analytics tracking scripts are embedded.
2. **Hardened Secrets Management:**
   - Zero credentials, API private keys, or internal tokens exist within client-side code.
   - Contact form transactions leverage serverless tokenized endpoints without exposing backend mail servers.
3. **Strict `.gitignore` Policy:** Compiled binaries, deployment ZIP archives, environment definitions (`.env*`), and sensitive local artifacts are rigorously excluded from git tracking.
4. **Resilient Routing & Apache Hardening:** Distributed with an enterprise-ready `.htaccess` configuration ensuring strict rewrite boundaries and single-entry SPA routing.

---

## 💻 Installation & Local Development

### Prerequisites
- **Node.js:** `v20.x` or higher (LTS recommended)
- **Package Manager:** `npm` (v10+) or `pnpm`

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ersinsandal/ErsinSandal-Portfolio.git
   cd ErsinSandal-Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   *The local server will start instantly at `http://localhost:5173/` with hot module replacement (HMR).*

4. **Execute local build verification:**
   ```bash
   npm run build
   ```
   *Compiles and optimizes all assets into the production-ready `dist/` directory.*

5. **Preview the production bundle:**
   ```bash
   npm run preview
   ```

---

## 🚢 Production Build & CI/CD Pipeline

The project is structured for automated continuous integration and continuous deployment (CI/CD):

- **Optimized Asset Pipeline:** During `npm run build`, images, SVGs, and stylesheets are processed with hash fingerprints (`dist/medya/*`) for permanent browser caching.
- **Automated Deployment Compatibility:** The codebase is pre-configured for automated deployment to Hostinger via GitHub Actions (`FTP-Deploy-Action`) or modern edge platforms (Vercel, Cloudflare Pages).

---

## 🎨 Design Philosophy & UI/UX Principles

The user interface reflects an executive aesthetic characterized by:
- **Restraint and Elegance:** Deep dark background palettes (`#08080A`, `#101014`) accented by signature imperial crimson (`#9B111E` / `#B81D24`) and crisp typography.
- **Spatial Hierarchy:** High-contrast typographic hierarchy ensuring instant legibility across complex technical case studies.
- **Interactive Tactility:** Hover micro-interactions, smooth scrolling behavior, and fluid route transitions designed to evoke the tactile feel of an operating system.

---

## ⚖️ License & Intellectual Property

- **Source Code Architecture:** Available under the [MIT License](LICENSE) for educational and portfolio demonstration.
- **Personal Content, Logos, Project IP, and Brand Identity:** All rights reserved. The name **Ersin Sandal**, **SliferSoft**, **ATE (Alanya Taudra Esports)**, corresponding logos, and biographical texts are proprietary assets and may not be reproduced without written permission.

---

<div align="center">
  <strong>© 2026 Ersin Sandal. All Rights Reserved.</strong><br />
  <em>Designed and engineered with passion and precision.</em>
</div>
