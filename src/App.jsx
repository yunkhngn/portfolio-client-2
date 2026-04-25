import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Section } from './components/shared/Section'
import { Marquee } from './components/shared/Marquee'
import { PORTFOLIO_DATA } from './config'

function App() {
  return (
    <div className="bg-bg text-white">
      <Hero />

      <Section id="about">
        <About />
      </Section>

      <Marquee items={PORTFOLIO_DATA.marquee.items} />

      <Section id="projects" className="grid-bg">
        <Projects />
      </Section>

      <Section id="experience" className="grid-bg">
        <Experience />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}

export default App
