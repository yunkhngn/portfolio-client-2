import { Layout } from './components/shared/Layout'
import { Section } from './components/shared/Section'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'

function App() {
  return (
    <Layout>
      <main>
        <Section id="hero" className="border-b border-foreground/10 flex items-center">
          <Hero />
        </Section>
        <Section id="about" className="border-b border-foreground/10">
          <About />
        </Section>
        <Section id="work" className="border-b border-foreground/10">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </main>
    </Layout>
  )
}

export default App
