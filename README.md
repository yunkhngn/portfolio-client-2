# Editorial Portfolio Template

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A premium, high-performance portfolio template designed for creative professionals. Inspired by Adobe's editorial design system, this project features a sophisticated dark-mode aesthetic with smooth typography and cinematic transitions.

![Preview Placeholder](https://via.placeholder.com/1200x600?text=Editorial+Portfolio+Preview)

## ✨ Features

- **Adobe-Inspired Editorial Design**: Sharp lines, refined typography, and a cohesive UI system tailored for creative showcase.
- **Dynamic Marquee**: Interactive and smooth scrolling marquee for highlighting key skills or categories.
- **Project Showcase**: Supports both vertical (short) and horizontal (long) video formats with embedded players.
- **Fully Responsive**: Optimized for every screen size from mobile to large desktop displays.
- **Data-Driven Architecture**: Easily update your entire portfolio content via a single configuration file (`src/config.js`).
- **Smooth Animations**: Powered by Framer Motion for high-fidelity micro-interactions.

## 🛠 Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

## ⚙️ Configuration

Customizing the portfolio is simple. All data is managed in `src/config.js`.

```javascript
// src/config.js
export const PORTFOLIO_DATA = {
  hero: {
    name: "YOUR NAME",
    roles: ["VIDEO EDITOR", "COLORIST"],
    // ...
  },
  // Add your projects, experience, and contact info here
};
```

## 📂 Project Structure

```text
/
├── public/          # Static assets (images, videos)
├── src/
│   ├── components/  # Modular UI components
│   ├── config.js    # Centralized data configuration
│   ├── App.jsx      # Main application layout
│   └── main.jsx     # Entry point
├── tailwind.config.js # Global design tokens
└── package.json     # Scripts and dependencies
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new features or design improvements, feel free to:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

**Developer:** yunkhngn - [@yunkhngn](https://github.com/yunkhngn)  

---
*Developed with ❤️ by [yunkhngn](https://github.com/yunkhngn)
