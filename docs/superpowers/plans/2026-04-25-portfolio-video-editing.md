# Video Editor Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cinematic, dark-themed Vite+React portfolio for video editor Trần Văn Dũng — matching the reference portfolio design (giahuyportfolio.vercel.app) with a dark/warm aesthetic, orange accent color, smooth Framer Motion animations, and all content managed from a single `config.js`.

**Architecture:** Single-page React application. 9 distinct sections rendered top-to-bottom: Hero → About (photo + bio) → Education/Skills/Tools cards → Marquee banner → Projects showcase (dark bg) → Experience timeline (dark bg) → Contact CTA (dark bg) → Footer. Every section uses Framer Motion scroll-triggered reveals. All text/data pulled from `src/config.js`.

**Tech Stack:** React 18, Vite, Tailwind CSS v3, Framer Motion, Lucide React, clsx + tailwind-merge.

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/config.js` | All portfolio content (hero, about, projects, experience, contact) |
| `src/index.css` | Global styles, fonts, Tailwind directives, custom utilities |
| `src/App.jsx` | Root: assembles all sections in order |
| `src/main.jsx` | React root render (Vite default) |
| `src/components/shared/Section.jsx` | Reusable scroll-animated section wrapper |
| `src/components/shared/Marquee.jsx` | Infinite horizontal scrolling text banner |
| `src/components/shared/SectionHeading.jsx` | Reusable section title with optional pill badge |
| `src/components/sections/Hero.jsx` | Full-screen dark hero: dots, pill badge, title, scroll indicator |
| `src/components/sections/About.jsx` | Portrait photo + bio text + edu/skills/tools cards |
| `src/components/sections/Projects.jsx` | Dark project cards with icon, category tag, project count |
| `src/components/sections/Experience.jsx` | Dark timeline with company cards |
| `src/components/sections/Contact.jsx` | Giant CTA typography + contact button + availability badge |
| `src/components/sections/Footer.jsx` | Social pills + copyright |

---

### Task 1: Project Initialization & Dependency Setup

**Files:**
- Create/Modify: `package.json`, `tailwind.config.js`, `index.html`, `vite.config.js`, `src/index.css`, `src/lib/utils.js`, `src/main.jsx`

- [ ] **Step 1: Initialize Vite React project**

```bash
cd /Volumes/Data/Code/freelance/portfolio-2
npm create vite@latest . -- --template react
```

If prompted that directory is not empty, choose to proceed (it only has `port.JPG`, `content.md`, `docs/`).

- [ ] **Step 2: Install all dependencies**

```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react clsx tailwind-merge
```

- [ ] **Step 3: Create utility file**

```bash
mkdir -p src/lib
```

Create `src/lib/utils.js`:
```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 4: Configure tailwind.config.js**

Overwrite `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0D0D0D",
          light: "#F0EBE3",
          card: "#1A1A1A",
          "card-hover": "#222222",
        },
        accent: {
          DEFAULT: "#C05A30",
          light: "#E07A50",
          dark: "#8B3A1A",
        },
        muted: "#888888",
        border: "#2A2A2A",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
        handwriting: ['"Caveat"', "cursive"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "scroll-line": {
          "0%, 100%": { height: "20px", opacity: "0.3" },
          "50%": { height: "40px", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Setup global styles in index.css**

Overwrite `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply box-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bg text-white font-sans antialiased overflow-x-hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }

  ::selection {
    @apply bg-accent text-white;
  }
}

@layer components {
  .section-container {
    @apply max-w-6xl mx-auto px-6 md:px-12;
  }

  .pill-badge {
    @apply inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20
           text-xs font-mono uppercase tracking-widest text-white/70;
  }

  .card-dark {
    @apply bg-bg-card border border-border rounded-2xl
           hover:bg-bg-card-hover transition-all duration-300;
  }

  .grid-bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .glow-border {
    box-shadow:
      0 0 80px rgba(192, 90, 48, 0.08),
      inset 0 0 80px rgba(0, 100, 255, 0.03);
  }
}
```

- [ ] **Step 6: Update index.html with meta tags**

Overwrite `index.html`:
```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Trần Văn Dũng — Video Editor Portfolio. 4 năm kinh nghiệm chuyên edit video cho lĩnh vực Thẩm mỹ và Fitness." />
    <title>Trần Văn Dũng — Video Editor Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Ensure main.jsx is correct**

Overwrite `src/main.jsx`:
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 8: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite dev server starts at `http://localhost:5173/`

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "chore: initialize vite react project with tailwind, framer-motion"
```

---

### Task 2: Create Configuration Data

**Files:**
- Create: `src/config.js`

- [ ] **Step 1: Write config.js with all portfolio content from content.md**

Create `src/config.js`:
```javascript
export const PORTFOLIO_DATA = {
  meta: {
    name: "Trần Văn Dũng",
    shortName: "DŨNG",
    title: "Video Editor",
    year: "2026",
  },

  hero: {
    titleLine1: "PORTFOLIO",
    titleLine2: "VIDEO EDITOR",
    slogan: "make everything looks interesting",
    scrollText: "SCROLL",
  },

  marquee: {
    items: [
      "VIDEO EDITING",
      "COLOR GRADING",
      "MOTION GRAPHICS",
      "PHOTOGRAPHY",
      "VISUAL EFFECTS",
      "STORYTELLING",
    ],
  },

  about: {
    greeting: "Hello! I'm Trần Văn Dũng",
    bio: "Tôi là một Video Editor với 4 năm kinh nghiệm, theo đuổi storytelling điện ảnh, nơi mỗi khung hình, nhịp dựng và âm thanh hòa quyện để dẫn dắt cảm xúc và tạo nên những trải nghiệm thị giác giàu chiều sâu. Tôi đặc biệt có thế mạnh trong việc sản xuất nội dung video cho lĩnh vực Thẩm mỹ và Fitness, nơi hình ảnh không chỉ đẹp mà còn phải truyền tải được cảm xúc và giá trị.",
    avatar: "/avatar.png",
    education: {
      label: "EDU",
      school: "Hà Nội",
      detail: "4 năm kinh nghiệm Video Editing & Photography",
      period: "2020 — 2026",
    },
    skills: [
      "Video Editing",
      "Color Grading",
      "Motion Graphics",
      "Photography",
      "Storytelling",
      "Social Media Content",
    ],
    tools: [
      { name: "Premiere Pro", short: "Pr", color: "#9999FF", bg: "#00005B" },
      { name: "After Effects", short: "Ae", color: "#9999FF", bg: "#00005B" },
      { name: "Photoshop", short: "Ps", color: "#31A8FF", bg: "#001E36" },
      { name: "Illustrator", short: "Ai", color: "#FF9A00", bg: "#330000" },
      { name: "Lightroom", short: "Lr", color: "#31A8FF", bg: "#001E36" },
      { name: "CapCut", short: "Cc", color: "#FFFFFF", bg: "#000000" },
    ],
  },

  projects: [
    {
      title: "EMS Fitness & Yoga",
      category: "FITNESS",
      projectCount: "50+ Videos",
      description: "Edit video chính của team, sản xuất hiệu ứng, quay chụp cùng đội media.",
      thumbnail: "/projects/ems.jpg",
    },
    {
      title: "Thẩm Mỹ Trung Anh",
      category: "BEAUTY",
      projectCount: "Ongoing",
      description: "Editor các kênh bác sĩ và kênh chính Show Giá Thẩm Mỹ.",
      thumbnail: "/projects/trunganh.jpg",
    },
    {
      title: "Commercial Works",
      category: "COMMERCIAL",
      projectCount: "10+ Projects",
      description: "Video quảng cáo cho các thương hiệu, tập trung vào storytelling và visual impact.",
      thumbnail: "/projects/commercial.jpg",
    },
    {
      title: "Social Media Content",
      category: "SOCIAL",
      projectCount: "100+ Reels",
      description: "Nội dung viral cho mạng xã hội, reels và short-form video.",
      thumbnail: "/projects/social.jpg",
    },
  ],

  experience: [
    {
      year: "2024 — 2026",
      company: "Thẩm Mỹ Trung Anh",
      role: "Video Editor",
      description: "Editor các kênh bác sĩ và kênh chính Show Giá Thẩm Mỹ. Sản xuất nội dung video cho lĩnh vực thẩm mỹ.",
      current: true,
    },
    {
      year: "2022 — 2024",
      company: "EMS Fitness & Yoga",
      subtitle: "Hệ thống TTTT Cao Cấp",
      role: "Video Editor & Designer",
      description: "Thiết kế các post Facebook, ấn phẩm. Edit video chính của team. Sản xuất hiệu ứng. Có tham gia đi quay chụp cùng với đội Media.",
      current: false,
    },
    {
      year: "T9/2020 — 2021",
      company: "Công ty CP Trí Tuệ Nhân Tạo Thiên Hà",
      role: "Thực tập sinh Animation",
      description: "Thực tập và hỗ trợ các dự án animation, sản xuất nội dung số.",
      current: false,
    },
    {
      year: "T3 — T9/2020",
      company: "Baskin Robbins Hà Đông",
      role: "Nhân viên thiết kế",
      description: "Thiết kế ấn phẩm quảng cáo, banner và nội dung visual cho cửa hàng.",
      current: false,
    },
  ],

  contact: {
    headingLine1: "Let's",
    headingAccent: "CREATIVE",
    headingLine2: "together",
    ctaLabel: "CONTACT ME NOW",
    ctaHref: "mailto:tr.dung209@gmail.com",
    availability: "Available for hire",
    phone: "0981427148",
    email: "tr.dung209@gmail.com",
    facebook: "https://www.facebook.com/DugDSChip",
  },

  footer: {
    socials: [
      { name: "Hire Me", url: "mailto:tr.dung209@gmail.com?subject=Hiring" },
      { name: "Email", url: "mailto:tr.dung209@gmail.com" },
      { name: "Facebook", url: "https://www.facebook.com/DugDSChip" },
    ],
    copyright: "© 2026 Trần Văn Dũng. All rights reserved.",
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/config.js
git commit -m "feat: add comprehensive portfolio config from content.md"
```

---

### Task 3: Build Shared Components

**Files:**
- Create: `src/components/shared/Section.jsx`, `src/components/shared/Marquee.jsx`, `src/components/shared/SectionHeading.jsx`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p src/components/shared
mkdir -p src/components/sections
```

- [ ] **Step 2: Create Section wrapper component**

Create `src/components/shared/Section.jsx`:
```jsx
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Section({ id, className, children, light = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "py-24 md:py-32 relative",
        light ? "bg-bg-light text-[#111]" : "bg-bg text-white",
        className
      )}
    >
      <div className="section-container relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 3: Create Marquee component**

Create `src/components/shared/Marquee.jsx`:
```jsx
import { cn } from "../../lib/utils";

export function Marquee({ items, className, reverse = false }) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 mx-4">
      <span className="text-lg md:text-xl font-display font-bold uppercase tracking-[0.2em] whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent text-sm">✦</span>
    </span>
  ));

  return (
    <div className={cn("overflow-hidden py-4 bg-accent", className)}>
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create SectionHeading component**

Create `src/components/shared/SectionHeading.jsx`:
```jsx
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SectionHeading({ children, pill, className, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-14", className)}
    >
      {pill && (
        <span className={cn(
          "pill-badge mb-4 inline-flex",
          light && "border-[#111]/20 text-[#111]/60"
        )}>
          {pill}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
        {children}
      </h2>
    </motion.div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/shared/
git commit -m "feat: add shared Section, Marquee, SectionHeading components"
```

---

### Task 4: Implement Hero Section

**Files:**
- Create: `src/components/sections/Hero.jsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/sections/Hero.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";

export function Hero() {
  const { hero, meta } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg overflow-hidden glow-border"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Decorative dots at top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      </div>

      {/* Pill badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-24 mb-10 flex items-center gap-4"
      >
        <span className="pill-badge">
          <span className="text-accent text-base">🎬</span>
          <span>BY {meta.shortName}</span>
        </span>
        <span className="text-white/30 font-mono text-sm">{meta.year}</span>
      </motion.div>

      {/* Main hero typography */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent"
        >
          {hero.titleLine1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-white/40 my-3 md:my-5"
        >
          {hero.slogan}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent"
        >
          {hero.titleLine2}
        </motion.h2>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-14 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/35">
          {hero.scrollText}
        </span>
        <div className="w-px bg-white/25 animate-scroll-line" />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.jsx
git commit -m "feat: implement dark hero with cinematic typography and scroll indicator"
```

---

### Task 5: Implement About Section (Photo + Bio + Edu/Skills/Tools)

**Files:**
- Create: `src/components/sections/About.jsx`

- [ ] **Step 1: Create About component**

Create `src/components/sections/About.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <div className="space-y-24">
      {/* ── Row 1: Photo + Bio ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Portrait */}
        <motion.div {...fadeUp()} className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Orange shadow offset */}
            <div className="absolute inset-0 rounded-2xl bg-accent translate-x-3 translate-y-3" />
            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#222] bg-bg-card">
              <img
                src={about.avatar}
                alt="Trần Văn Dũng"
                className="w-full aspect-[3/4] object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full aspect-[3/4] bg-bg-card flex items-center justify-center"><span class="text-white/20 font-mono text-sm">Photo</span></div>';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeUp(0.2)} className="space-y-6">
          <SectionHeading pill="ABOUT">About Me</SectionHeading>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
            {about.greeting}
          </h3>
          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            {about.bio}
          </p>
        </motion.div>
      </div>

      {/* ── Row 2: Education / Skills / Tools cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education card */}
        <motion.div {...fadeUp(0)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">
            {about.education.label}
          </span>
          <h4 className="font-display text-lg font-bold uppercase mt-3 text-accent">
            {about.education.school}
          </h4>
          <p className="text-white/50 mt-2 text-sm leading-relaxed">
            {about.education.detail}
          </p>
          <p className="font-mono text-xs text-white/30 mt-3">
            {about.education.period}
          </p>
        </motion.div>

        {/* Skills card */}
        <motion.div {...fadeUp(0.1)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">
            SKILLS
          </span>
          <ul className="space-y-3 mt-3">
            {about.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="text-accent text-xs">◆</span>
                <span className="text-white/70 text-sm font-medium uppercase tracking-wide">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools card */}
        <motion.div {...fadeUp(0.2)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">
            TOOLS
          </span>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {about.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:scale-105 transition-transform cursor-default"
                style={{ backgroundColor: tool.bg }}
              >
                <span
                  className="text-xl font-bold font-mono"
                  style={{ color: tool.color }}
                >
                  {tool.short}
                </span>
                <span className="text-[9px] text-white/50 uppercase tracking-wider text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/About.jsx
git commit -m "feat: implement about section with portrait, bio, edu/skills/tools cards"
```

---

### Task 6: Implement Projects Section (Dark Card Showcase)

**Files:**
- Create: `src/components/sections/Projects.jsx`

- [ ] **Step 1: Create Projects component**

Create `src/components/sections/Projects.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <div>
      <SectionHeading pill="WORKS">Branding</SectionHeading>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            {...fadeUp(index * 0.1)}
            className="card-dark rounded-2xl p-6 md:p-8 flex items-center gap-6 group cursor-default"
          >
            {/* Thumbnail / Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-bg flex-shrink-0 border border-border">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-white/20 font-mono text-xs">📹</div>';
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                  {project.category}
                </span>
                <span className="text-white/30 font-mono text-xs">
                  {project.projectCount}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase truncate">
                {project.title}
              </h3>
            </div>

            {/* Expand icon */}
            <span className="text-white/30 text-2xl group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0">
              +
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Projects.jsx
git commit -m "feat: implement dark project cards with category tags"
```

---

### Task 7: Implement Experience Section (Timeline Cards)

**Files:**
- Create: `src/components/sections/Experience.jsx`

- [ ] **Step 1: Create Experience component**

Create `src/components/sections/Experience.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <div>
      <SectionHeading pill="EXPERIENCE">My Journey</SectionHeading>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            {...fadeUp(index * 0.1)}
            className="card-dark rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            {/* Current indicator */}
            {exp.current && (
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-2 text-xs font-mono text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Present
                </span>
              </div>
            )}

            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">
              {exp.company}
            </h3>
            {exp.subtitle && (
              <p className="text-white/30 text-xs font-mono mt-1 uppercase tracking-wider">
                {exp.subtitle}
              </p>
            )}

            <p className="text-accent font-medium mt-2 text-lg uppercase tracking-wide">
              {exp.role}
            </p>

            {/* Date pill */}
            <div className="mt-4">
              <span className="inline-block px-4 py-2 rounded-xl border border-border text-white/40 font-mono text-xs tracking-wider">
                {exp.year}
              </span>
            </div>

            <p className="text-white/50 mt-4 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Experience.jsx
git commit -m "feat: implement experience section with timeline cards"
```

---

### Task 8: Implement Contact CTA Section

**Files:**
- Create: `src/components/sections/Contact.jsx`

- [ ] **Step 1: Create Contact component**

Create `src/components/sections/Contact.jsx`:
```jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../config";

export function Contact() {
  const { contact, meta } = PORTFOLIO_DATA;

  return (
    <div className="text-center py-16 relative">
      {/* Giant typography */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-handwriting text-5xl md:text-7xl text-white/80 italic">
          {contact.headingLine1}
        </h2>
        <h2 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent">
          {contact.headingAccent}
        </h2>
        <h2 className="font-handwriting text-5xl md:text-7xl text-white/80 italic">
          {contact.headingLine2}
        </h2>
      </motion.div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16"
      >
        <a
          href={contact.ctaHref}
          className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-display font-bold uppercase tracking-wider text-sm rounded-full hover:bg-accent-light hover:scale-105 transition-all shadow-lg shadow-accent/20"
        >
          {contact.ctaLabel}
          <ArrowRight size={18} />
        </a>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-bg-card border border-border">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs">
            🎬
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-semibold">{contact.availability}</p>
            <p className="text-white/40 text-xs font-mono">Availability: Now</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Contact.jsx
git commit -m "feat: implement contact CTA with giant typography and availability badge"
```

---

### Task 9: Implement Footer

**Files:**
- Create: `src/components/sections/Footer.jsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/sections/Footer.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";

export function Footer() {
  const { footer } = PORTFOLIO_DATA;

  return (
    <footer className="bg-bg border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="pill-badge hover:bg-accent hover:text-white hover:border-accent transition-all"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs font-mono">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Footer.jsx
git commit -m "feat: implement footer with social pills and copyright"
```

---

### Task 10: Assemble App.jsx (All Sections Together)

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Overwrite App.jsx to assemble all sections**

Overwrite `src/App.jsx`:
```jsx
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Section } from "./components/shared/Section";
import { Marquee } from "./components/shared/Marquee";
import { PORTFOLIO_DATA } from "./config";

function App() {
  return (
    <div className="bg-bg text-white">
      {/* 1 ── Hero (full-screen dark) */}
      <Hero />

      {/* 2 ── About (Photo + Bio + Cards) — dark bg */}
      <Section id="about">
        <About />
      </Section>

      {/* 3 ── Marquee banner (orange separator) */}
      <Marquee items={PORTFOLIO_DATA.marquee.items} />

      {/* 4 ── Projects showcase (dark bg with grid) */}
      <Section id="projects" className="grid-bg">
        <Projects />
      </Section>

      {/* 5 ── Experience timeline (dark bg with grid) */}
      <Section id="experience" className="grid-bg">
        <Experience />
      </Section>

      {/* 6 ── Contact CTA (dark bg) */}
      <Section id="contact">
        <Contact />
      </Section>

      {/* 7 ── Footer */}
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Remove leftover Vite boilerplate files**

```bash
rm -f src/App.css src/assets/react.svg
```

- [ ] **Step 3: Verify dev server — all sections render**

```bash
npm run dev
```

Expected: Full page loads at `http://localhost:5173/` — dark theme, all 7 sections visible when scrolling.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: assemble full portfolio with all sections"
```

---

### Task 11: Visual Polish & Final Review

- [ ] **Step 1: Run dev server and scroll through all sections**

```bash
npm run dev
```

Checklist — verify each section top-to-bottom:

| # | Section | What to check |
|---|---------|--------------|
| 1 | Hero | Dark bg, 3 orange dots, pill badge, giant "PORTFOLIO / VIDEO EDITOR" in accent, scroll indicator animates |
| 2 | About | Portrait with orange shadow offset, bio text, 3 cards (edu/skills/tools) with dark card style |
| 3 | Marquee | Orange banner with ✦ separators scrolling horizontally |
| 4 | Projects | Dark cards with rounded corners, thumbnail, category pill, project count, "+" icon |
| 5 | Experience | Dark cards with company name, role in accent, date pill, description. First item shows "Present" badge |
| 6 | Contact | Giant "Let's CREATIVE together" with handwriting font, orange CTA button with arrow, availability badge |
| 7 | Footer | Social pill links, copyright text |

- [ ] **Step 2: Fix any spacing, alignment, or visual issues found**

Adjust padding, margins, or font sizes in the relevant section file as needed.

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "style: final polish — spacing, alignment, animations"
```
