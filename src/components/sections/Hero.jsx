import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'

export function Hero() {
  const { hero } = PORTFOLIO_DATA
  const sloganParts = hero.slogan.split(' looks ')

  return (
    <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-sm uppercase tracking-widest font-semibold border-b border-foreground inline-block pb-1 mb-6">
            My Philosophy
          </h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <h1 className="font-handwriting text-5xl md:text-7xl text-brand leading-tight">
              {sloganParts.length > 1 ? (
                <>
                  {sloganParts[0]} looks <br />
                  {sloganParts.slice(1).join(' looks ')}
                </>
              ) : (
                hero.slogan
              )}
            </h1>
          </motion.div>
        </div>

        <div className="border-l-4 border-foreground pl-6 mt-8">
          <h2 className="font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter">
            {hero.name}
          </h2>
          <div className="flex gap-4 mt-4 font-mono text-sm uppercase flex-wrap">
            {hero.roles.map((role) => (
              <span key={role} className="bg-foreground text-background px-2 py-1">
                {role}
              </span>
            ))}
            {hero.age?.trim() ? (
              <span className="border border-foreground px-2 py-1">{hero.age}</span>
            ) : null}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-3">Software</h3>
          <div className="flex gap-3 flex-wrap">
            {hero.software.map((sw) => (
              <div
                key={sw}
                className="w-12 h-12 bg-[#00005C] text-[#31A8FF] flex items-center justify-center font-bold text-xl rounded p-1 border-2 border-foreground hover:scale-110 transition-transform"
              >
                {sw}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-full flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-foreground/30 flex items-center justify-center overflow-hidden">
          {hero.avatar ? (
            <img
              src={hero.avatar}
              alt={hero.name}
              className="w-full h-full object-cover grayscale mix-blend-multiply"
            />
          ) : (
            <span className="text-gray-400 font-mono">Avatar Placeholder</span>
          )}
        </div>
      </div>
    </div>
  )
}
