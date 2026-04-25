import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Marquee } from './components/shared/Marquee'
import { PORTFOLIO_DATA } from './config'

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />

      <div className="max-w-7xl mx-auto border-x-brutal">
        <Marquee items={PORTFOLIO_DATA.marquee.items} />
      </div>

      <About />

      <div className="max-w-7xl mx-auto border-x-brutal">
        <Marquee items={PORTFOLIO_DATA.marquee.items} reverse className="bg-accent text-white" />
      </div>

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </div>
  )
}

export default App
