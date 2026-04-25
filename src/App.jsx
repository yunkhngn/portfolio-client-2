import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Marquee } from "./components/Marquee";
import { PORTFOLIO_DATA } from "./config";

function App() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee */}
      <div className="max-w-[90rem] mx-auto border-x-brutal">
        <Marquee items={PORTFOLIO_DATA.marquee.items} />
      </div>

      {/* 3. About */}
      <About />

      {/* 4. Marquee Reverse */}
      <div className="max-w-[90rem] mx-auto border-x-brutal">
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
