# Video Editor Portfolio Implementation Plan (Adobe UI Concept)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a highly unique portfolio that visually mimics the interface of a professional video editing software (like Adobe Premiere Pro). The entire website will be a fixed 100vh layout with resizable-looking panels (Project Bin, Program Monitor, Effect Controls, Timeline). 

**Architecture:** Single-page React application (Vite). Fixed `h-screen` layout with absolute/grid positioning to mimic panels.
- **Top:** Menu Bar (File, Edit, Contact).
- **Left Panel:** Project Bin (Showcasing portfolio projects with thumbnails).
- **Center Panel:** Program Monitor (Hero view, displaying main profile or active video).
- **Right Panel:** Properties/Effects (Skills as sliders, Tools, Bio info).
- **Bottom Panel:** Timeline (Work Experience plotted as video clips on a timeline track).

**Tech Stack:** React 18, Vite, Tailwind CSS v3, Framer Motion (for panel interactions and clip animations), Lucide React (for UI icons).

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/config.js` | All portfolio content data |
| `src/index.css` | Global styles (dark gray Adobe theme colors, scrollbars) |
| `src/App.jsx` | Main workspace grid layout |
| `src/components/ui/Panel.jsx` | Reusable software panel UI (with header and inner styling) |
| `src/components/workspace/MenuBar.jsx` | Top menu bar (mock app menus) |
| `src/components/workspace/ToolBar.jsx` | Vertical toolbar (Selection tool, Razor tool, etc.) |
| `src/components/workspace/ProjectBin.jsx` | Left panel: List of projects |
| `src/components/workspace/ProgramMonitor.jsx` | Center top: Hero intro & Video playback |
| `src/components/workspace/Properties.jsx` | Right panel: About me, Skills (sliders), Tools |
| `src/components/workspace/Timeline.jsx` | Bottom panel: Work experience as video clips |

---

### Task 1: Project Setup & "Adobe Theme" Config

**Files:**
- Create/Modify: `package.json`, `tailwind.config.js`, `index.html`, `vite.config.js`, `src/index.css`, `src/lib/utils.js`

- [ ] **Step 1: Initialize Vite React project**
```bash
cd /Volumes/Data/Code/freelance/portfolio-2
npm create vite@latest . -- --template react
```

- [ ] **Step 2: Install dependencies**
```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react clsx tailwind-merge
```

- [ ] **Step 3: Create utility function**
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
Overwrite `tailwind.config.js` to use specific Adobe dark UI grays:
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
        appBg: "#18181A",      // Darkest (spacing between panels)
        panelBg: "#242424",    // Standard panel background
        panelHeader: "#2D2D2D",// Panel title bar
        borderLine: "#424242", // 1px borders
        textMuted: "#999999",
        textNormal: "#CCCCCC",
        textHighlight: "#FFFFFF",
        accent: "#2D8CFF",     // Selection blue
        trackBg: "#1E1E1E",    // Timeline track
        clipBg: "#285680",     // Default video clip color
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "var(--tailwind-sans)"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "ui-xs": "10px",
        "ui-sm": "12px",
        "ui-base": "14px",
      }
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Setup global styles (index.css)**
Overwrite `src/index.css` to handle custom scrollbars:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, #root {
    @apply m-0 p-0 w-full h-[100dvh] overflow-hidden bg-appBg text-textNormal font-sans text-ui-sm select-none;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    @apply bg-appBg;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-[#4D4D4D] border-4 border-solid border-appBg rounded-full;
  }
  ::-webkit-scrollbar-corner {
    @apply bg-appBg;
  }
}
```

- [ ] **Step 6: Update index.html**
```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Trần Văn Dũng - Video Editor UI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Commit**
```bash
git add .
git commit -m "chore: setup premiere pro dark ui theme"
```

---

### Task 2: Content Configuration Data

**Files:**
- Create: `src/config.js`

- [ ] **Step 1: Write config.js mapping content to UI panels**
Create `src/config.js`:
```javascript
export const PORTFOLIO_DATA = {
  about: {
    name: "Trần Văn Dũng",
    bio: "Video Editor với 4 năm kinh nghiệm. Thế mạnh sản xuất nội dung Thẩm mỹ & Fitness.",
    roles: ["Video Editor", "Colorist", "VFX"],
    avatar: "/port.JPG", // user provided
  },

  skills: [
    { name: "Video Editing", value: 95 },
    { name: "Color Grading", value: 85 },
    { name: "Storytelling", value: 90 },
    { name: "Motion Graphics", value: 75 },
  ],

  tools: [
    { name: "Premiere Pro", ext: ".prproj", color: "#9999FF", bg: "#00005B" },
    { name: "After Effects", ext: ".aep", color: "#9999FF", bg: "#00005B" },
    { name: "Photoshop", ext: ".psd", color: "#31A8FF", bg: "#001E36" },
    { name: "Illustrator", ext: ".ai", color: "#FF9A00", bg: "#330000" },
    { name: "CapCut", ext: ".ccp", color: "#FFFFFF", bg: "#000000" },
  ],

  projects: [
    { id: "p1", title: "Thẩm Mỹ Trung Anh.mp4", duration: "02:15:00", fps: "60.00", category: "Beauty" },
    { id: "p2", title: "EMS Fitness Commercial.mp4", duration: "01:30:12", fps: "29.97", category: "Fitness" },
    { id: "p3", title: "Social Media Reels.mp4", duration: "00:45:00", fps: "30.00", category: "Social" },
  ],

  experienceClips: [
    { 
      id: "exp1", 
      company: "Thẩm Mỹ Trung Anh", 
      role: "Video Editor", 
      year: "2024-2026", 
      track: 1, 
      startPos: 70, // percentage for visual layout
      width: 25, 
      color: "#285680" 
    },
    { 
      id: "exp2", 
      company: "EMS Fitness", 
      role: "Editor & Designer", 
      year: "2022-2024", 
      track: 2, 
      startPos: 40, 
      width: 28, 
      color: "#3F633E" 
    },
    { 
      id: "exp3", 
      company: "Trí Tuệ Nhân Tạo Thiên Hà", 
      role: "Animation Intern", 
      year: "2020-2021", 
      track: 3, 
      startPos: 15, 
      width: 23, 
      color: "#5B4A78" 
    },
    { 
      id: "exp4", 
      company: "Baskin Robbins", 
      role: "Designer", 
      year: "2020", 
      track: 4, 
      startPos: 3, 
      width: 10, 
      color: "#7A4545" 
    },
  ],

  contact: {
    phone: "0981427148",
    email: "tr.dung209@gmail.com",
    fb: "DugDSChip"
  }
};
```

- [ ] **Step 2: Commit**
```bash
git add src/config.js
git commit -m "feat: config data shaped for software UI model"
```

---

### Task 3: Base UI Components (Panel & MenuBar)

**Files:**
- Create: `src/components/ui/Panel.jsx`
- Create: `src/components/workspace/MenuBar.jsx`

- [ ] **Step 1: Create Panel component**
```bash
mkdir -p src/components/ui src/components/workspace
```
Create `src/components/ui/Panel.jsx`:
```jsx
import { Menu } from "lucide-react";
import { cn } from "../../lib/utils";

export function Panel({ title, children, className }) {
  return (
    <div className={cn("flex flex-col bg-panelBg border border-borderLine overflow-hidden rounded shadow-sm", className)}>
      <div className="flex h-7 bg-panelHeader items-center px-3 gap-2 flex-shrink-0 cursor-default border-b border-borderLine">
        <Menu size={12} className="text-textMuted" />
        <span className="uppercase text-[11px] font-semibold text-textNormal tracking-wide flex-1">
          {title}
        </span>
      </div>
      <div className="flex-1 overflow-auto relative">
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create MenuBar component**
Create `src/components/workspace/MenuBar.jsx`:
```jsx
export function MenuBar() {
  const menus = ["File", "Edit", "Clip", "Sequence", "Markers", "Graphics", "View", "Window", "Help"];
  
  return (
    <div className="h-8 bg-appBg flex items-center px-4 gap-4 border-b border-borderLine flex-shrink-0">
      <div className="font-bold text-accent mr-4 flex items-center gap-2">
        <span className="w-5 h-5 bg-[#3B1963] text-[#E08FFD] flex items-center justify-center rounded text-xs font-bold border border-[#E08FFD]/30">Pr</span>
        Trần Văn Dũng
      </div>
      <div className="flex gap-4">
        {menus.map(name => (
          <span key={name} className="text-ui-sm cursor-default hover:text-white transition-colors">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add src/components/
git commit -m "feat: implement panel and menu bar components"
```

---

### Task 4: Project Bin (Left Panel)

**Files:**
- Create: `src/components/workspace/ProjectBin.jsx`

- [ ] **Step 1: Create ProjectBin component**
Create `src/components/workspace/ProjectBin.jsx`:
```jsx
import { FileVideo, Search, FolderOpen, List } from "lucide-react";
import { PORTFOLIO_DATA } from "../../config";

export function ProjectBin() {
  return (
    <div className="h-full flex flex-col p-2 text-ui-xs">
      <div className="flex gap-2 mb-3">
        <div className="flex-1 flex bg-[#1A1A1A] border border-borderLine rounded items-center px-2 py-1">
          <Search size={12} className="text-textMuted mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full text-white" />
        </div>
      </div>
      
      <div className="flex bg-[#1E1E1E] px-2 py-1 border-y border-borderLine text-textMuted select-none">
        <span className="flex-1">Name</span>
        <span className="w-16">Frame Rate</span>
        <span className="w-20 hidden md:block">Media Duration</span>
      </div>

      <div className="flex-1 overflow-y-auto mt-1">
        {PORTFOLIO_DATA.projects.map(proj => (
          <div key={proj.id} className="flex px-2 py-1.5 items-center hover:bg-[#343434] cursor-default text-textNormal group transition-colors">
            <span className="flex-1 flex items-center gap-2 truncate pr-2">
              <FileVideo size={14} className="text-[#3EA8FF]" />
              {proj.title}
            </span>
            <span className="w-16 font-mono text-textMuted group-hover:text-textNormal">{proj.fps}</span>
            <span className="w-20 hidden md:flex font-mono text-textMuted group-hover:text-textNormal justify-end">{proj.duration}</span>
          </div>
        ))}
      </div>
      
      <div className="h-6 flex items-center justify-between mt-2 pt-2 border-t border-borderLine px-2">
        <span className="text-textMuted">3 Items</span>
        <div className="flex gap-2 text-textMuted">
          <FolderOpen size={14} className="hover:text-white" />
          <List size={14} className="text-white" />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/workspace/ProjectBin.jsx
git commit -m "feat: implement project bin file explorer"
```

---

### Task 5: Properties / Info Panel (Right Panel)

**Files:**
- Create: `src/components/workspace/Properties.jsx`

- [ ] **Step 1: Create Properties component (Lumetri-style sliders)**
Create `src/components/workspace/Properties.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";
import { ChevronDown, Mail, Phone, ExternalLink } from "lucide-react";

function PropGroup({ title, children }) {
  return (
    <div className="border-b border-borderLine">
      <div className="flex items-center px-3 py-1.5 bg-[#2A2A2A] hover:bg-[#333] cursor-default select-none border-b border-borderLine">
        <ChevronDown size={14} className="text-textMuted mr-1" />
        <span className="font-bold text-white uppercase text-[10px] tracking-wider">{title}</span>
      </div>
      <div className="p-3 text-ui-sm">
        {children}
      </div>
    </div>
  );
}

export function Properties() {
  const { about, skills, tools, contact } = PORTFOLIO_DATA;

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      <PropGroup title="Basic Info">
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden bg-[#111] flex-shrink-0">
             <img src={about.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">{about.name}</h3>
            <p className="text-accent text-[11px] mb-1">{about.roles.join(" • ")}</p>
          </div>
        </div>
        <p className="mt-3 text-textMuted leading-relaxed">
          {about.bio}
        </p>
      </PropGroup>

      <PropGroup title="Skills Rating">
        <div className="space-y-3">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-textNormal">{skill.name}</span>
                <span className="text-accent font-mono text-[10px]">{skill.value}.0</span>
              </div>
              <div className="relative h-4 bg-[#111] border border-borderLine rounded-full overflow-hidden flex items-center px-1">
                 <div className="h-1.5 bg-[#111] w-full rounded-full absolute inset-0 m-auto mx-1" />
                 <div 
                   className="h-2 bg-textNormal rounded-full absolute" 
                   style={{ left: `2px`, right: `${100 - skill.value}%` }} 
                 />
                 <div 
                   className="w-3 h-3 bg-white rounded-full absolute shadow shadow-black z-10"
                   style={{ left: `calc(${skill.value}% - 6px)` }}
                 />
              </div>
            </div>
          ))}
        </div>
      </PropGroup>

      <PropGroup title="Tools (Color Match)">
        <div className="flex flex-wrap gap-2">
           {tools.map(tool => (
             <div key={tool.name} className="flex flex-col items-center p-1.5 bg-[#1E1E1E] rounded border border-borderLine w-[45px]">
               <span className="text-sm font-bold" style={{ color: tool.color }}>{tool.short}</span>
               <span className="text-[8px] mt-1 uppercase text-textMuted">{tool.ext}</span>
             </div>
           ))}
        </div>
      </PropGroup>

      <PropGroup title="Contact Data">
        <div className="space-y-2">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors bg-[#1E1E1E] p-2 rounded border border-borderLine">
            <Mail size={12} className="text-accent" /> {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors bg-[#1E1E1E] p-2 rounded border border-borderLine">
            <Phone size={12} className="text-accent" /> {contact.phone}
          </a>
          <a href={contact.fb} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors bg-[#1E1E1E] p-2 rounded border border-borderLine">
            <ExternalLink size={12} className="text-accent" /> facebook/{contact.fb}
          </a>
        </div>
      </PropGroup>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/workspace/Properties.jsx
git commit -m "feat: implement lumetri style properties panel"
```

---

### Task 6: Program Monitor (Center Top)

**Files:**
- Create: `src/components/workspace/ProgramMonitor.jsx`

- [ ] **Step 1: Create ProgramMonitor component**
Create `src/components/workspace/ProgramMonitor.jsx`:
```jsx
import { Play, Pause, SkipBack, StepBack, StepForward, SkipForward } from "lucide-react";

export function ProgramMonitor({ activeProjectTitle = "Portfolio Intro Sequence" }) {
  return (
    <div className="h-full flex flex-col relative w-full items-center bg-[#0F0F0F]">
      
      {/* Viewport Frame */}
      <div className="flex-1 w-full p-4 flex items-center justify-center">
        <div className="w-full h-full max-w-4xl max-h-full bg-black border border-borderLine relative flex items-center justify-center overflow-hidden aspect-video shadow-lg">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-40"></div>
          
          <div className="z-10 text-center uppercase">
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white tracking-widest leading-relaxed">
              Trần Văn Dũng
            </h1>
            <p className="font-mono text-accent mt-4 tracking-[0.5em] text-sm hidden md:block">
              make everything looks interesting
            </p>
          </div>

          {/* Fake safe margins */}
          <div className="absolute inset-[5%] border border-[#ffffff1a] pointer-events-none" />
          <div className="absolute inset-[10%] border border-[#ffffff1a] pointer-events-none" />
        </div>
      </div>

      {/* Controls */}
      <div className="h-14 w-full bg-[#1A1A1A] border-t border-borderLine flex items-center px-4 justify-between text-textNormal">
        <div className="flex items-center gap-3">
          <span className="text-accent font-mono text-ui-base">00:00:23:14</span>
          <span className="text-textMuted mx-2">Fit</span>
        </div>
        
        <div className="flex items-center gap-4 text-textMuted">
          <SkipBack size={16} className="hover:text-white" />
          <StepBack size={16} className="hover:text-white" />
          <Play size={24} className="text-white mx-2" />
          <StepForward size={16} className="hover:text-white" />
          <SkipForward size={16} className="hover:text-white" />
        </div>

        <div className="font-mono text-ui-base">
           00:04:12:00
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/workspace/ProgramMonitor.jsx
git commit -m "feat: implement program monitor playback area"
```

---

### Task 7: Timeline (Bottom Panel)

**Files:**
- Create: `src/components/workspace/Timeline.jsx`

- [ ] **Step 1: Create Timeline component**
Create `src/components/workspace/Timeline.jsx`:
```jsx
import { PORTFOLIO_DATA } from "../../config";
import { Eye, Lock, Magnet } from "lucide-react";

export function Timeline() {
  const { experienceClips } = PORTFOLIO_DATA;

  // Render a specific video track row
  const renderTrack = (trackNum) => {
    const clips = experienceClips.filter(c => c.track === trackNum);
    return (
      <div key={`v${trackNum}`} className="h-[46px] border-b border-borderLine flex bg-[#1E1E1E]">
        {/* Track Header */}
        <div className="w-[120px] md:w-[150px] border-r border-[#303030] bg-[#222] flex-shrink-0 px-2 py-1 flex flex-col justify-center gap-1 z-10 sticky left-0 text-[10px]">
          <div className="flex justify-between items-center text-textMuted">
            <span className="font-bold text-ui-base uppercase">V{trackNum}</span>
            <div className="flex gap-1.5">
              <Eye size={12} className={trackNum === 1 ? "text-accent" : ""} />
              <Lock size={12} />
            </div>
          </div>
        </div>
        {/* Track Content Area */}
        <div className="flex-1 relative bg-trackBg overflow-hidden">
          <div className="absolute inset-0 z-0 flex pattern-grid opacity-10"></div>
          {clips.map(clip => (
            <div 
              key={clip.id}
              className="absolute top-1 bottom-1 rounded-[3px] border border-black/30 px-2 py-0.5 overflow-hidden shadow-inner group hover:brightness-110 transition-all cursor-ew-resize"
              style={{ left: `${clip.startPos}%`, width: `${clip.width}%`, backgroundColor: clip.color }}
            >
              <p className="text-white text-[10px] font-bold truncate leading-tight">{clip.company} ({clip.year})</p>
              <p className="text-white/70 text-[9px] truncate leading-tight">{clip.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Timeline Header features */}
      <div className="h-6 bg-[#222] border-b border-borderLine flex items-center px-2">
         <span className="uppercase text-accent font-bold text-[11px] mr-6">Work Experience_Sequence</span>
         <div className="flex items-center gap-3 text-textMuted">
            <span className="font-mono text-[10px]">00:00:23:14</span>
            <Magnet size={12} className="text-accent" />
         </div>
      </div>

      {/* Tracks Container */}
      <div className="flex-1 overflow-x-auto overflow-y-auto relative bg-appBg">
        {/* Time ruler */}
        <div className="h-5 flex ml-[120px] md:ml-[150px] sticky top-0 bg-[#222] border-b border-borderLine z-20 overflow-hidden font-mono text-[9px] text-textMuted">
           {/* Mock tick marks */}
           {Array.from({length: 20}).map((_,i) => (
             <div key={i} className="flex-1 border-l border-[#303030] pl-1 relative">
                00:0{i}:00
             </div>
           ))}
        </div>

        {/* Video Tracks */}
        {[1, 2, 3, 4].map(renderTrack)}

        {/* Playhead line */}
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[40%] z-30 pointer-events-none">
          <div className="absolute top-0 left-[-4px] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-transparent border-t-red-500"></div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add timeline grid utility to css**
Update `src/index.css` by appending:
```css
  .pattern-grid {
    background-image: linear-gradient(to right, #444 1px, transparent 1px);
    background-size: 20px 100%;
  }
```

- [ ] **Step 3: Commit**
```bash
git add src/
git commit -m "feat: implement timeline tracking work experience"
```

---

### Task 8: Assemble App Layout

**Files:**
- Create: `src/components/workspace/ToolBar.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create minimal ToolBar**
Create `src/components/workspace/ToolBar.jsx`:
```jsx
import { MousePointer2, Scissors, Hand, Type, Grab, ZoomIn } from "lucide-react";

export function ToolBar() {
  return (
    <div className="w-[36px] bg-[#222] border-x border-borderLine flex flex-col items-center py-2 gap-3 text-textMuted flex-shrink-0">
      <MousePointer2 size={16} className="text-accent" />
      <Grab size={16} className="hover:text-white" />
      <Scissors size={16} className="hover:text-white" />
      <Hand size={16} className="hover:text-white" />
      <ZoomIn size={16} className="hover:text-white" />
      <Type size={16} className="hover:text-white" />
    </div>
  );
}
```

- [ ] **Step 2: Assemble Root App Grid**
Overwrite `src/App.jsx`:
```jsx
import { Panel } from "./components/ui/Panel";
import { MenuBar } from "./components/workspace/MenuBar";
import { ToolBar } from "./components/workspace/ToolBar";
import { ProjectBin } from "./components/workspace/ProjectBin";
import { ProgramMonitor } from "./components/workspace/ProgramMonitor";
import { Properties } from "./components/workspace/Properties";
import { Timeline } from "./components/workspace/Timeline";

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-appBg">
      <MenuBar />
      
      {/* Main Workspace Area */}
      <div className="flex-1 flex overflow-hidden p-1 gap-1">
        
        {/* Top Half */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex-1 flex gap-1 h-[60%]">
            <Panel title="Project: Content" className="w-[20%] min-w-[200px] hidden lg:flex">
              <ProjectBin />
            </Panel>
            
            <Panel title="Program: Portfolio Overview" className="flex-1">
              <ProgramMonitor />
            </Panel>
            
            <Panel title="Lumetri Color / Info" className="w-[25%] min-w-[280px] hidden md:flex">
              <Properties />
            </Panel>
          </div>
          
          {/* Bottom Half */}
          <div className="h-[40%] flex gap-1 min-h-[250px]">
            <ToolBar />
            <Panel title="Timeline: Work Experience" className="flex-1">
              <Timeline />
            </Panel>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Test and Clean up**
```bash
rm -f src/App.css src/assets/react.svg
npm run dev
```

Expected: A full-screen app resembling Adobe Premiere Pro. Left shows projects, center shows "Program Monitor" with portfolio title, right shows sliders for skills and tools info, bottom shows experiences laid out as video tracks.

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: assemble adobe-style UI grid layout"
```

---

## Final Review
Checklist:
- Ensure grid doesn't break on narrow screens (hidden panels allow it to fallback to a simpler view on mobile, but this concept is mostly a desktop experience).
- Check standard Premiere dark theme colors (`#242424`, 1px borders, small text).
- Sliders for skills look like effect controls.
- Timeline tracks visually map the experience data.
