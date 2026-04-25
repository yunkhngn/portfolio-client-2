# Video Editor Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, editorial-style Vite+React portfolio for a video editor with smooth animations, Shadcn components, and data driven entirely by a `config.js` file.

**Architecture:** A single-page React application using Vite. Shared configuration data stored in `src/config.js` to populate components. High-end aesthetic using Tailwind CSS (editorial/brutalist influence, prominent typography, borders, and orange accent) and Framer Motion for scroll-triggered animations.

**Tech Stack:** React, Vite, Tailwind CSS, Shadcn UI, Framer Motion, Lucide React.

---

### Task 1: Project Initialization & Dependency Setup

**Files:**
- Create/Modify: `package.json`, `tailwind.config.js`, `index.html`, `vite.config.js`, `src/index.css`

- [ ] **Step 1: Initialize Vite React project**

```bash
npm create vite@latest . -- --template react
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react clsx tailwind-merge
```

- [ ] **Step 3: Setup basic Tailwind and Shadcn config file structure**

Create `lib/utils.js`:
```bash
mkdir src/lib
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

Update `tailwind.config.js`:
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
        background: "#F5F5F5", // Light gray background from design
        foreground: "#111111",
        accent: "#E25A27", // Orange accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        handwriting: ["Caveat", "cursive"]
      }
    },
  },
  plugins: [],
}
```

- [ ] **Step 5: Setup global styles**

Modify `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=Caveat:wght@700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display text-foreground;
  }
}
```

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "chore: setup vite, tailwind, fonts, and dependencies"
```

### Task 2: Create Configuration Data

**Files:**
- Create: `src/config.js`

- [ ] **Step 1: Write config.js with extracted data**

Create `src/config.js`:
```javascript
export const PORTFOLIO_DATA = {
  hero: {
    name: "TRẦN VĂN DŨNG",
    slogan: "make everything looks interesting",
    roles: ["PHOTOGRAPHER", "EDITOR"],
    age: "23 y.o",
    software: ["Pr", "Ae", "Ps", "Lr"],
    avatar: "/avatar.png" // placeholder
  },
  about: {
    greeting: "Xin chào nhà tuyển dụng mình là Dũng. Học tập và làm việc ở Hà Nội.",
    description: "Tôi là một editor có kinh nghiệm, đã hoạt động trong lĩnh vực này được 2 năm và 1 năm để thực hiện chụp ảnh. Về ánh sáng, màu sắc và bố cục cho phép tôi tạo ra những sản phẩm độc đáo. Tôi luôn cập nhật và nắm bắt các xu hướng mới nhất trong lĩnh vực video trên mạng xã hội. Tôi luôn nỗ lực học hỏi để mang đến sự mới mẻ và độc đáo cho mỗi dự án.\n\nCảm ơn bạn đã dành thời gian để tìm hiểu về tôi. Tôi hy vọng có cơ hội được hợp tác và chia sẻ sự sáng tạo của mình trong tương lai.",
    hobbies: "Tôi yêu thích cảm giác tự do khi chạy bộ hoặc tập gym. Đi du lịch cũng là một phần quan trọng trong cuộc sống của tôi, tôi luôn háo hức khám phá những địa điểm mới và trải nghiệm văn hóa đa dạng trên thế giới. Âm nhạc và phim ảnh luôn là nguồn cảm hứng lớn cho tôi. Một phần không thể thiếu trong cuộc sống của tôi là gặp gỡ và kết nối với mọi người. Tôi thích trò chuyện và chia sẻ ý kiến với những người có cùng sở thích hoặc quan điểm.",
    achievements: [
      "GIẢI 3: THIẾT KẾ POSTER VỀ CHỦ ĐỀ COVID Ở TRƯỜNG",
      "GIẢI CỐNG HIẾN: EMS FITNESS & YOGA"
    ]
  },
  experience: [
    {
      year: "2020",
      company: "BASKINROBBINS HÀ ĐÔNG",
      role: "NHÂN VIÊN THIẾT KẾ",
      description: ""
    },
    {
      year: "2020 - 2021",
      company: "CÔNG TY CP TRÍ TUỆ NHÂN TẠO THIÊN HÀ",
      role: "THỰC TẬP SINH (ANIMATION VÀ VOICE)",
      description: ""
    },
    {
      year: "2022 - 2024",
      company: "EMS FITNESS & YOGA - HỆ THỐNG TTTT CAO CẤP",
      role: "THIẾT KẾ CÁC POST FB, ẤN PHẨM. EDIT VIDEO CHÍNH CỦA TEAM",
      description: "SẢN XUẤT HIỆU ỨNG. CÓ THAM GIA ĐI QUAY CHỤP CÙNG VỚI ĐỘI MEDIA."
    }
  ],
  projects: [
    {
      title: "Commercial Concept",
      type: "Commercial",
      description: "Video quảng cáo cho brand",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      thumbnail: "/project1.jpg"
    },
    {
      title: "Music Video Highlights",
      type: "Music Video",
      description: "MV edit",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/project2.jpg"
    }
  ],
  contact: {
    phone: "09 814 27148",
    email: "tr.dung209@gmail.com",
    facebook: "/DugDSChip"
  }
};
```

- [ ] **Step 2: Commit**

```bash
git add src/config.js
git commit -m "feat: add portfolio config data"
```

### Task 3: Build Base Layout & Navigation

**Files:**
- Create: `src/components/shared/Layout.jsx`, `src/components/shared/Section.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Section wrapper component**

```bash
mkdir -p src/components/shared
```

Create `src/components/shared/Section.jsx`:
```jsx
import { motion } from "framer-motion";

export function Section({ id, className, children }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto border-x border-foreground/10 ${className || ""}`}
    >
      {children}
    </motion.section>
  );
}
```

- [ ] **Step 2: Create basic App layout**

Modify `src/App.jsx`:
```jsx
import { Section } from "./components/shared/Section";

function App() {
  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-white pb-32">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border-x border-foreground/10">
          <div className="font-display font-bold text-xl tracking-tight">VD.</div>
          <nav className="flex gap-6 text-sm font-medium uppercase tracking-wider">
            <a href="#hero" className="hover:text-accent transition-colors">Hero</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Section id="hero" className="border-b border-foreground/10 flex items-center">
          <h1>Hero Skeleton</h1>
        </Section>
        <Section id="about" className="border-b border-foreground/10">
          <h2>About Skeleton</h2>
        </Section>
        <Section id="work" className="border-b border-foreground/10">
          <h2>Work Skeleton</h2>
        </Section>
        <Section id="projects">
          <h2>Projects Skeleton</h2>
        </Section>
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Modify main.jsx**

Ensure `src/main.jsx` is standard (Vite default is usually fine, no changes required if present).

- [ ] **Step 4: Commit**

```bash
git add src/
git commit -m "feat: layout infrastructure and app shell"
```

### Task 4: Implement Hero Section

**Files:**
- Create: `src/components/sections/Hero.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Hero component**

```bash
mkdir -p src/components/sections
```

Create `src/components/sections/Hero.jsx`:
```jsx
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../config";

export function Hero() {
  const { hero } = PORTFOLIO_DATA;

  return (
    <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-sm uppercase tracking-widest font-semibold border-b border-foreground inline-block pb-1 mb-6">My Philosophy</h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <h1 className="font-handwriting text-5xl md:text-7xl text-accent leading-tight">
              make everything<br/>looks interesting
            </h1>
          </motion.div>
        </div>
        
        <div className="border-l-4 border-foreground pl-6 mt-8">
          <h2 className="font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter">
            {hero.name}
          </h2>
          <div className="flex gap-4 mt-4 font-mono text-sm uppercase">
            {hero.roles.map(role => (
              <span key={role} className="bg-foreground text-background px-2 py-1">{role}</span>
            ))}
            <span className="border border-foreground px-2 py-1">{hero.age}</span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-3">Software</h3>
          <div className="flex gap-3">
            {hero.software.map(sw => (
              <div key={sw} className="w-12 h-12 bg-[#00005C] text-[#31A8FF] flex items-center justify-center font-bold text-xl rounded p-1 border-2 border-foreground hover:scale-110 transition-transform">
                {sw}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center min-h-[400px]">
        {/* Placeholder for photo */}
        <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-foreground/30 flex items-center justify-center overflow-hidden">
          {hero.avatar ? (
            <img src={hero.avatar} alt={hero.name} className="w-full h-full object-cover grayscale mix-blend-multiply" />
          ) : (
            <span className="text-gray-400 font-mono">Avatar Placeholder</span>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add Hero to App.jsx**

Modify `src/App.jsx`:
```jsx
import { Section } from "./components/shared/Section";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-white pb-32">
      {/* Header omitted for brevity, keep existing */}
...
      <main className="pt-16">
        <Section id="hero" className="border-b border-foreground/10 flex items-center">
          <Hero />
        </Section>
...
```

- [ ] **Step 3: Commit**

```bash
git add src/
git commit -m "feat: implement hero section with editorial style"
```

### Task 5: Implement About Section

**Files:**
- Create: `src/components/sections/About.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create About component**

Create `src/components/sections/About.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";

export function About() {
  const { about, contact } = PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
      <div className="space-y-8">
        <h2 className="font-display text-5xl font-bold uppercase tracking-tight border-b-8 border-accent pb-4 inline-block">
          Profile
        </h2>
        
        <div className="prose prose-lg text-foreground/80 font-medium">
          <p className="font-bold text-xl text-foreground">{about.greeting}</p>
          <p className="whitespace-pre-wrap">{about.description}</p>
        </div>

        <div className="pt-8 border-t border-foreground/20">
          <h3 className="font-display text-2xl font-bold uppercase mb-4">Sở Thích</h3>
          <p className="text-foreground/80 leading-relaxed">{about.hobbies}</p>
        </div>
      </div>

      <div className="space-y-12 bg-white border-2 border-foreground p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase mb-4 pb-2 border-b-2 border-foreground/20">Thành Tích</h3>
          <ul className="space-y-4">
            {about.achievements.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-accent font-bold mt-1">★</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-8 border-t-2 border-foreground/20">
          <h3 className="font-display text-2xl font-bold uppercase mb-4 pb-2 border-b-2 border-foreground/20">Contact</h3>
          <ul className="space-y-4 font-mono">
            <li className="flex justify-between border-b border-foreground/10 pb-2">
              <span className="font-bold">Phone</span> 
              <span>{contact.phone}</span>
            </li>
            <li className="flex justify-between border-b border-foreground/10 pb-2">
              <span className="font-bold">Email</span> 
              <span>{contact.email}</span>
            </li>
            <li className="flex justify-between border-b border-foreground/10 pb-2">
              <span className="font-bold">Facebook</span> 
              <span>{contact.facebook}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add About to App.jsx**

Modify `src/App.jsx` to replace the "About Skeleton" with `<About />`. (Add import).

- [ ] **Step 3: Commit**

```bash
git add src/
git commit -m "feat: implement about section"
```

### Task 6: Implement Work Experience Section

**Files:**
- Create: `src/components/sections/Experience.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Experience component**

Create `src/components/sections/Experience.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <div className="py-12 w-full">
      <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-16 opacity-10">
        Kinh Nghiệm
      </h2>
      
      <div className="space-y-0 border-t-2 border-foreground">
        {experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 py-8 border-b-2 border-foreground group hover:bg-foreground hover:text-background transition-colors px-4 -mx-4 cursor-default">
            <div className="font-mono text-lg font-bold">
              {exp.year}
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">{exp.company}</h3>
              <p className="text-xl mt-2 font-medium group-hover:text-accent transition-colors">{exp.role}</p>
              {exp.description && (
                <p className="mt-4 opacity-80 max-w-2xl text-sm leading-relaxed tracking-wide">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add Experience to App.jsx**

Modify `src/App.jsx` to replace the "Work Skeleton" with `<Experience />`. (Add import).

- [ ] **Step 3: Commit**

```bash
git add src/
git commit -m "feat: implement work experience section"
```

### Task 7: Implement Projects Section

**Files:**
- Create: `src/components/sections/Projects.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Projects component**

Create `src/components/sections/Projects.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <div className="py-12">
      <h2 className="font-display text-5xl font-bold uppercase tracking-tight border-b-8 border-accent pb-4 inline-block mb-12">
        Featured Edits
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col border-2 border-foreground bg-white group shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(226,90,39,1)] transition-all">
            <div className="aspect-video border-b-2 border-foreground relative overflow-hidden bg-black">
              {/* Replace with actual video embed or thumbnail */}
              <iframe 
                src={project.videoUrl} 
                title={project.title}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold uppercase">{project.title}</h3>
                <span className="font-mono text-xs px-2 py-1 bg-foreground text-background whitespace-nowrap">
                  {project.type}
                </span>
              </div>
              <p className="text-foreground/80">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add Projects to App.jsx**

Modify `src/App.jsx` to replace the "Projects Skeleton" with `<Projects />`. (Add import).

- [ ] **Step 3: Commit**

```bash
git add src/
git commit -m "feat: implement projects section"
```

### Task 8: Polish & Final Review
- [ ] Run `npm run dev` to verify the application.
- [ ] Test the responsive design.
- [ ] You are done!
