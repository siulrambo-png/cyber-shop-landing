import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'

const lineVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  })
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function Hero() {
  const headingLines = ["Protege Tu", "Mundo Digital"]

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center overflow-hidden py-28 md:py-36">
      {/* Resplandor de fondo neón — sutil, no mancha */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full filter blur-[180px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}></div>

      {/* Candado neón nítido — stroke-width 0.5, multi drop-shadow CSS */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-0 pointer-events-none text-accent animate-neon-pulse">
          <Lock className="w-64 h-64 md:w-72 md:h-72" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-4xl px-6">
        {/* Badge */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8">
          <span className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold">Ciberdefensa Proactiva</span>
          <span className="text-xs font-body font-medium text-foreground/60">Monitoreo 24/7 de Neón</span>
        </motion.div>

        {/* Heading — gradiente blanco→plata, tamaño responsive */}
        <h1 className="font-heading text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] font-bold text-gradient-silver">
          {headingLines.map((line, i) => (
            <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={lineVariants} className="block">
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.8 }} className="font-body font-light text-base md:text-lg text-foreground/50 leading-relaxed max-w-xl mx-auto mt-8">
          security-dex combina inteligencia humana con IA avanzada para blindar tu infraestructura contra amenazas invisibles, garantizando la integridad de tus datos críticos.
        </motion.p>

        {/* CTAs — botón principal con resplandor palpitante */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 1.1 }} className="mt-12 flex flex-wrap gap-4 justify-center">
          <button className="bg-accent text-accent-foreground rounded-full px-8 py-3.5 font-body font-semibold text-sm tracking-wider uppercase inline-flex items-center gap-2 group transition-all btn-glow hover:brightness-110">
            Iniciar Ahora
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 font-body font-semibold text-sm tracking-wider uppercase text-foreground inline-flex items-center gap-2 group hover:text-accent-2 transition-colors">
            Demo Gratuita
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.58rem] tracking-[0.25em] uppercase text-foreground/25 flex flex-col items-center gap-2">
        scroll
        <div className="w-px h-8 bg-foreground/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-line"></div>
        </div>
      </div>
    </section>
  )
}
