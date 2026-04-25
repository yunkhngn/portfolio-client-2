# Video Editor Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a comprehensive Vite+React portfolio website for video editor Trần Văn Dũng. The structure includes all full-page sections (Hero, About, Projects, Experience, Contact, Footer, Marquee), but the **design concept** strictly follows the Behance reference: a light, editorial, modern-brutalist aesthetic (warm gray/beige backgrounds, thick black borders, prominent typography, and orange accents).

**Architecture:** Single-page React application using Vite. All portfolio content is stored in `src/config.js` for easy management. Sections are rendering top-to-bottom with Framer Motion scroll-triggered reveals tailored to the editorial style (sharp translations, stiff springs rather than slow fades).

**Tech Stack:** React 18, Vite, Tailwind CSS v3, Framer Motion, Lucide React, clsx + tailwind-merge.

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/config.js` | All portfolio content data (extracted from content.md) |
| `src/index.css` | Global styles, fonts, editorial Tailwind directives (thick borders, shadows) |
| `src/App.jsx` | Root layout, assembling all sections with border separators |
| `src/components/shared/Section.jsx` | Reusable section wrapper with editorial layout constraints |
| `src/components/shared/Marquee.jsx` | Infinite scrolling text banner (editorial style) |
| `src/components/shared/SectionHeading.jsx` | Reusable section title with bold typography |
| `src/components/sections/Hero.jsx` | Editorial hero: Name, philosophy, roles, software icons |
| `src/components/sections/About.jsx` | Bio, education, skills, tools in border-boxed layout |
| `src/components/sections/Projects.jsx` | Video project showcase cards with brutalist borders |
| `src/components/sections/Experience.jsx` | Work experience list with sharp borders and typography |
| `src/components/sections/Contact.jsx` | CTA "Let's work together" with large display text |
| `src/components/sections/Footer.jsx` | Social links, contact info, copyright |

---

### Task 1: Project Initialization & Dependency Setup

**Files:**
- Create/Modify: `package.json`, `tailwind.config.js`, `index.html`, `vite.config.js`, `src/index.css`, `src/lib/utils.js`, `src/main.jsx`

- [ ] **Step 1: Initialize Vite React project**

```bash
cd /Volumes/Data/Code/freelance/portfolio-2
npm create vite@latest . -- --template react
```

Select `React` and `JavaScript` if prompted (it may just execute if using `.`).

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

- [ ] **Step 4: Configure tailwind.config.js (Editorial Theme)**

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
        background: "#F4F4F0", // Light warm gray/beige from the Behance concept
        foreground: "#111111", // Deep black for text and borders
        accent: "#E25A27", // Orange accent color
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        handwriting: ["Caveat", "cursive"], // Used for "make everything looks interesting"
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "marquee": "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
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
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Setup global styles in index.css**

Overwrite `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Caveat:wght@700&family=JetBrains+Mono:wght@400;500;700&display=swap');

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
    @apply bg-background text-foreground font-sans antialiased overflow-x-hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }

  ::selection {
    @apply bg-accent text-white;
  }
}

@layer components {
  /* Editorial / Brutalist utility classes */
  .border-brutal {
    @apply border-2 border-foreground;
  }
  
  .border-b-brutal {
    @apply border-b-2 border-foreground;
  }

  .border-x-brutal {
    @apply border-x-2 border-foreground;
  }

  .shadow-brutal {
    @apply shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all duration-300;
  }
  
  .shadow-brutal:hover {
    @apply shadow-[8px_8px_0px_0px_rgba(226,90,39,1)] translate-x-[-2px] translate-y-[-2px];
  }

  .section-container {
    @apply max-w-7xl mx-auto px-4 md:px-8 border-x-brutal;
  }

  .badge-editorial {
    @apply inline-flex items-center px-2 py-1 border-brutal text-xs font-bold uppercase tracking-widest bg-white;
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
    <meta name="description" content="Trần Văn Dũng — Video Editor Portfolio. 4 năm kinh nghiệm, theo đuổi storytelling điện ảnh." />
    <title>Trần Văn Dũng — Video Editor</title>
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

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "chore: initialize vite project with editorial tailwind config"
```

---

### Task 2: Create Configuration Data

**Files:**
- Create: `src/config.js`

- [ ] **Step 1: Write config.js using new content.md**

Create `src/config.js`:
```javascript
export const PORTFOLIO_DATA = {
  hero: {
    name: "TRẦN VĂN DŨNG",
    slogan: "make everything looks interesting",
    roles: ["VIDEO EDITOR", "PHOTOGRAPHER"],
    experience: "4 YEARS EXP",
  },

  marquee: {
    items: ["VIDEO EDITING", "STORYTELLING", "COLOR GRADING", "FITNESS", "BEAUTY", "COMMERCIAL"],
  },

  about: {
    title: "ABOUT ME",
    bio: "Tôi là một Video Editor với 4 năm kinh nghiệm, theo đuổi storytelling điện ảnh, nơi mỗi khung hình, nhịp dựng và âm thanh hòa quyện để dẫn dắt cảm xúc và tạo nên những trải nghiệm thị giác giàu chiều sâu. Tôi đặc biệt có thế mạnh trong việc sản xuất nội dung video cho lĩnh vực Thẩm mỹ và Fitness, nơi hình ảnh không chỉ đẹp mà còn phải truyền tải được cảm xúc và giá trị.",
    avatar: "/port.JPG", // Using the provided image
    education: {
      school: "Hà Nội",
      detail: "Sản xuất video Thẩm mỹ & Fitness",
    },
    skills: ["Storytelling", "Color Grading", "Motion Graphics", "Social Media Viral"],
    tools: [
      { name: "Pr", color: "#9999FF", bg: "#00005C" },
      { name: "Ae", color: "#9999FF", bg: "#00005C" },
      { name: "Ps", color: "#31A8FF", bg: "#001E36" },
      { name: "Ai", color: "#FF9A00", bg: "#330000" },
      { name: "Lr", color: "#31A8FF", bg: "#001E36" },
      { name: "Capcut", color: "#000000", bg: "#FFFFFF" },
    ],
  },

  projects: [
    {
      title: "Thẩm Mỹ Trung Anh",
      category: "BEAUTY",
      description: "Editor các kênh bác sĩ và kênh chính Show Giá Thẩm Mỹ. Hình ảnh chỉn chu, truyền tải giá trị.",
      videoUrl: "", 
    },
    {
      title: "EMS Fitness & Yoga",
      category: "FITNESS",
      description: "Edit video chính của team, sản xuất hiệu ứng, tham gia quay chụp trực tiếp.",
      videoUrl: "",
    },
    {
      title: "Storytelling Concept",
      category: "CINEMATIC",
      description: "Dẫn dắt cảm xúc người xem qua nhịp dựng và âm thanh điện ảnh.",
      videoUrl: "",
    }
  ],

  experience: [
    {
      year: "2024 - 2026",
      company: "THẨM MỸ TRUNG ANH",
      role: "VIDEO EDITOR",
      description: "Editor các kênh bác sĩ và kênh chính Show Giá Thẩm Mỹ.",
    },
    {
      year: "2022 - 2024",
      company: "EMS FITNESS & YOGA",
      subtitle: "HỆ THỐNG TTTH CAO CẤP",
      role: "VIDEO EDITOR & DESIGNER",
      description: "Thiết kế các post fb, ấn phẩm, edit video chính của team, sản xuất hiệu ứng, có tham gia đi quay chụp cùng team media.",
    },
    {
      year: "T9/2020 - 2021",
      company: "CÔNG TY CP TRÍ TUỆ NHÂN TẠO THIÊN HÀ",
      role: "THỰC TẬP SINH (ANIMATION)",
      description: "",
    },
    {
      year: "T3 - T9/2020",
      company: "BASKIN ROBBINS HÀ ĐÔNG",
      role: "NHÂN VIÊN THIẾT KẾ",
      description: "",
    },
  ],

  contact: {
    heading: "LET'S WORK",
    subheading: "TOGETHER",
    phone: "0981427148",
    email: "tr.dung209@gmail.com",
    facebook: "https://www.facebook.com/DugDSChip",
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/config.js
git commit -m "feat: add portfolio configuration from content.md"
```

---

### Task 3: Build Shared Components

**Files:**
- Create: `src/components/shared/SectionHeading.jsx`
- Create: `src/components/shared/Marquee.jsx`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p src/components/shared
mkdir -p src/components/sections
```

- [ ] **Step 2: Create SectionHeading component**

Create `src/components/shared/SectionHeading.jsx`:
```jsx
export function SectionHeading({ children }) {
  return (
    <div className="border-b-brutal pb-4 mb-10 w-full">
      <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">
        {children}
      </h2>
    </div>
  );
}
```

- [ ] **Step 3: Create Marquee component**

Create `src/components/shared/Marquee.jsx`:
```jsx
import { cn } from "../../lib/utils";

export function Marquee({ items, className, reverse = false }) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 mx-6">
      <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent text-3xl">✽</span>
    </span>
  ));

  return (
    <div className={cn("overflow-hidden py-6 border-y-brutal bg-foreground text-background", className)}>
      <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {content}
        {content}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/
git commit -m "feat: build editorial shared components"
```

---

### Task 4: Implement Hero Section (Editorial Layout)

**Files:**
- Create: `src/components/sections/Hero.jsx`

- [ ] **Step 1: Create Hero component** (Matching the Behance port.JPG style layout)

Create `src/components/sections/Hero.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";

export function Hero() {
  const { hero, about } = PORTFOLIO_DATA;

  return (
    <section className="section-container border-b-brutal min-h-[90vh] flex flex-col justify-center py-20 relative">
      
      {/* Top Meta info */}
      <div className="w-full flex justify-between items-start border-b-brutal pb-6 mb-12">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-foreground">MY PHILOSOPHY</span>
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mt-6"
          >
            <h1 className="font-handwriting text-5xl md:text-7xl text-accent leading-none max-w-sm">
              {hero.slogan}
            </h1>
          </motion.div>
        </div>

        <div className="text-right hidden md:block">
          <p className="font-display text-2xl font-bold uppercase leading-tight">
            {hero.roles[0]}<br />
            {hero.roles[1]}
          </p>
          <p className="font-mono text-sm mt-2">{hero.experience}</p>
        </div>
      </div>

      {/* Main Name & Tools */}
      <div className="flex flex-col md:flex-row gap-12 items-end">
        <div className="flex-1">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-[4rem] md:text-[7rem] leading-[0.8] uppercase tracking-tighter"
          >
            {hero.name}
          </motion.h2>
          
          <div className="mt-12">
            <span className="text-sm font-bold uppercase tracking-widest block mb-4">SOFTWARE</span>
            <div className="flex flex-wrap gap-2">
              {about.tools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="w-12 h-12 flex items-center justify-center font-bold text-xl border-brutal"
                  style={{ backgroundColor: tool.bg, color: tool.color }}
                  title={tool.name}
                >
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image (Absolute/Float on MD) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:absolute right-8 bottom-0 md:w-1/3 aspect-[3/4] md:aspect-auto md:h-[85%] border-t-brutal border-x-brutal md:border-b-0 border-b-brutal bg-white overflow-hidden"
        >
          <img 
            src={about.avatar} 
            alt={hero.name}
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
            onError={(e) => {
               e.target.style.display = 'none';
               e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200');
               e.target.parentElement.innerHTML = '<span class="font-mono text-sm">Main Photo</span>';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.jsx
git commit -m "feat: implement brutalist hero section matching design reference"
```

---

### Task 5: Implement About Section

**Files:**
- Create: `src/components/sections/About.jsx`

- [ ] **Step 1: Create About component (Grid with borders)**

Create `src/components/sections/About.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>{about.title}</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-brutal bg-white">
        
        {/* Left Column: Bio */}
        <div className="p-8 md:p-12 border-b-brutal md:border-b-0 md:border-r-brutal flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold mb-6 text-accent">
            {about.greeting}
          </p>
          <p className="text-base md:text-lg leading-relaxed font-medium">
            {about.bio}
          </p>
        </div>

        {/* Right Column: Mini stats */}
        <div className="flex flex-col">
          <div className="p-8 border-b-brutal flex-1">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Focus</h3>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <span key={skill} className="badge-editorial bg-background">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-8 flex-1">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Location & Goal</h3>
            <p className="font-display text-xl font-bold uppercase">{about.education.school}</p>
            <p className="mt-2 text-sm font-mono text-foreground/60">{about.education.detail}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/About.jsx
git commit -m "feat: implement about section with border-boxed editorial layout"
```

---

### Task 6: Implement Projects Section (Showcase Cards)

**Files:**
- Create: `src/components/sections/Projects.jsx`

- [ ] **Step 1: Create Projects component**

Create `src/components/sections/Projects.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>SELECTED WORKS</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col group">
            {/* Thumbnail Box */}
            <div className="aspect-[4/3] bg-white border-brutal shadow-brutal overflow-hidden mb-6 relative flex items-center justify-center">
               <span className="text-foreground/20 font-display font-bold text-lg absolute z-0 select-none">
                 VIDEO PREVIEW
               </span>
               {project.videoUrl && (
                 <iframe
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full z-10"
                    allowFullScreen
                  />
               )}
            </div>

            {/* Info */}
            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase bg-accent text-white px-2 py-1 border-brutal mb-3 inline-block">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase leading-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 font-medium leading-snug">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Projects.jsx
git commit -m "feat: implement brutalist video project cards"
```

---

### Task 7: Implement Experience Section (Timeline / List)

**Files:**
- Create: `src/components/sections/Experience.jsx`

- [ ] **Step 1: Create Experience component**

Create `src/components/sections/Experience.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";
import { SectionHeading } from "../shared/SectionHeading";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>KINH NGHIỆM</SectionHeading>

      <div className="border-brutal bg-white">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row p-6 md:p-10 hover:bg-foreground hover:text-white transition-colors group ${
              index !== experience.length - 1 ? 'border-b-brutal' : ''
            }`}
          >
            {/* Year */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <span className="font-mono text-lg font-bold group-hover:text-accent transition-colors">
                {exp.year}
              </span>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/4">
              <h3 className="font-display text-2xl md:text-4xl font-bold uppercase leading-tight">
                {exp.company}
              </h3>
              
              <div className="mt-2 md:mt-4">
                <p className="text-lg md:text-xl font-bold opacity-80 uppercase tracking-wide">
                  {exp.role}
                </p>
                {exp.subtitle && (
                  <p className="text-sm font-mono opacity-60 mt-1 uppercase">
                    {exp.subtitle}
                  </p>
                )}
              </div>

              {exp.description && (
                <p className="mt-4 font-medium opacity-90 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Experience.jsx
git commit -m "feat: implement brutalist list style for experience"
```

---

### Task 8: Implement Contact & Footer

**Files:**
- Create: `src/components/sections/Contact.jsx`
- Create: `src/components/sections/Footer.jsx`

- [ ] **Step 1: Create Contact component**

Create `src/components/sections/Contact.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";

export function Contact() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="section-container pt-32 pb-20 text-center">
      <div className="border-brutal bg-white p-12 md:p-24 shadow-brutal">
        <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase leading-[0.8] tracking-tighter hover:text-accent transition-colors cursor-default">
          {contact.heading} <br/> {contact.subheading}
        </h2>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
          <a href={`mailto:${contact.email}`} className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest border-brutal hover:bg-accent transition-colors">
            EMAIL ME
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-foreground font-bold uppercase tracking-widest border-brutal hover:bg-background transition-colors shadow-brutal">
            FACEBOOK
          </a>
        </div>

        <div className="mt-12 font-mono font-bold text-xl">
          {contact.phone}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Footer component**

Create `src/components/sections/Footer.jsx`:
```jsx
export function Footer() {
  return (
    <footer className="border-t-brutal border-x-brutal max-w-7xl mx-auto bg-foreground text-background px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display font-bold text-2xl uppercase">
          Trần Văn Dũng.
        </div>
        <div className="font-mono text-sm opacity-60">
          © 2026. Make everything looks interesting.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Contact.jsx src/components/sections/Footer.jsx
git commit -m "feat: implement contact box and dark footer"
```

---

### Task 9: Assemble App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Overwrite App.jsx**

Overwrite `src/App.jsx`:
```jsx
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Marquee } from "./components/shared/Marquee";
import { PORTFOLIO_DATA } from "./config";

function App() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee */}
      <div className="max-w-7xl mx-auto border-x-brutal">
        <Marquee items={PORTFOLIO_DATA.marquee.items} />
      </div>

      {/* 3. About */}
      <About />

      {/* 4. Marquee (Reverse) - using visual break */}
      <div className="max-w-7xl mx-auto border-x-brutal">
        <Marquee items={PORTFOLIO_DATA.marquee.items} reverse className="bg-accent text-white" />
      </div>

      {/* 5. Projects */}
      <Projects />

      {/* 6. Experience */}
      <Experience />

      {/* 7. Contact */}
      <Contact />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Clean up unused files**

```bash
rm -f src/App.css src/assets/react.svg
```

- [ ] **Step 3: Run Dev Server**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: assemble app with full editorial layout"
```

---

### Task 10: Final Review
- [ ] Ensure all borders (`border-brutal`) align properly, creating the "structured box" look.
- [ ] Check responsive behavior on tablet and mobile (the grid columns should stack nicely).
- [ ] Verify image loading for `/port.JPG`.
- [ ] Plan complete.
