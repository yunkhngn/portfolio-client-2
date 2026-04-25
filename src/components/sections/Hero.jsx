import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'

export function Hero() {
  const { hero, about } = PORTFOLIO_DATA

  return (
    <section className="section-container relative border-b-brutal min-h-[90vh] flex flex-col justify-center py-20">
      <div className="w-full flex justify-between items-start border-b-brutal pb-6 mb-12">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-foreground">
            MY PHILOSOPHY
          </span>
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mt-6"
          >
            <h1 className="font-handwriting text-5xl md:text-7xl text-accent leading-none max-w-sm">{hero.slogan}</h1>
          </motion.div>
        </div>

        <div className="text-right hidden md:block">
          <p className="font-display text-2xl font-bold uppercase leading-tight">
            {hero.roles[0]}
            <br />
            {hero.roles[1]}
          </p>
          <p className="font-mono text-sm mt-2">{hero.experience}</p>
        </div>
      </div>

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
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200')
              e.target.parentElement.innerHTML = '<span class="font-mono text-sm">Main Photo</span>'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
