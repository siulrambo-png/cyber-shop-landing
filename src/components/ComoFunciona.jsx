import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import image0 from '../assets/image_0.png'
import image1 from '../assets/image_1.png'
import image2 from '../assets/image_2.jpg'
import image4 from '../assets/image_4.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function ComoFunciona() {
  const stepsList = [
    { text: "Monitoreo continuo de todas las fuentes de datos críticos." },
    { text: "Detección de patrones y anomalías en tiempo real con IA." },
    { text: "Neutralización automática de amenazas para minimizar el impacto." },
    { text: "Informes detallados para cumplir con normativas globales." },
    { text: "Auditoría de Cumplimiento integral de seguridad." },
  ]

  return (
    <section className="bg-background py-28 md:py-36 relative overflow-hidden">
        {/* image_1 como fondo con mask-image degradado */}
        <img src={image1} alt="Centro de Mando" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] pointer-events-none section-bg-mask" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-12 md:gap-20 items-center">
            {/* Header y Lista - Lado Izquierdo */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-lg mx-auto text-center md:text-left">
                <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold mb-4 inline-block">El Proceso dex</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-silver leading-[0.94] tracking-[-0.02em]">Vigilancia en Tiempo Real, Defensa Global</h2>
                <p className="font-body font-light text-sm md:text-base text-foreground/50 leading-[1.72] mt-6 mb-10 max-w-lg mx-auto">Nuestro enfoque integral de extremo a extremo combina la potencia del neón con la inteligencia de IA avanzado para blindar tu infraestructura contra amenazas invisibles, garantizando la integridad de tus datos críticos.</p>
                <div className="space-y-3 text-left">
                    {stepsList.map((step, i) => (
                        <div key={i} className="flex gap-3 items-center group">
                            <div className="liquid-glass-strong rounded-full w-8 h-8 flex items-center justify-center text-accent ring-1 ring-accent/40 group-hover:bg-accent group-hover:text-accent-foreground transition-all hover:scale-105 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--accent) / 0.4))' }}>
                                <Check className="w-4 h-4" strokeWidth={1.5} />
                            </div>
                            <span className="font-body text-sm font-light text-foreground/70 group-hover:text-foreground transition-colors">{step.text}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Monitor flotante liquid-glass con image_4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="text-center flex flex-col items-center gap-4">
                <div className="font-heading text-[clamp(1rem,1.5vw,2rem)] text-accent-2 leading-none uppercase -rotate-90 animate-neon-pulse-cyan">d e x</div>
                <div className="relative w-px h-48 bg-accent-2/20 overflow-hidden">
                    <div className="absolute top-[10%] left-0 w-full h-[80%] rounded-full opacity-[0.35]" style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>
                </div>
                {/* Monitor flotante con liquid-glass y rounded-3xl */}
                <div className="liquid-glass-strong rounded-3xl p-2.5 w-52 h-52 md:w-60 md:h-60">
                    <img src={image4} alt="Café y Código de Neón" className="w-full h-full object-cover rounded-2xl" style={{ filter: 'drop-shadow(0 0 12px hsl(188 85% 53% / 0.25))' }} />
                </div>
            </motion.div>

            {/* Tarjetas de pasos - Lado Derecho */}
            <div className="max-w-lg mx-auto grid grid-cols-1 gap-6 relative">
                 {[
                    { id: 1, title: 'Ingesta de Datos', text: 'Monitoreo continuo de todas las fuentes de datos críticos.', img: image2 },
                    { id: 2, title: 'Análisis IA', text: 'Detección de patrones y anomalías en tiempo real con IA avanzado.', img: image4 },
                    { id: 3, title: 'Defensa Activa', text: 'Neutralización automática de amenazas para minimizar el impacto.', img: image1 },
                 ].map((step, i) => (
                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.15 * step.id }} className="liquid-glass rounded-3xl p-6 relative group overflow-hidden">
                        <div className="relative z-10 flex gap-6 items-center">
                            <span className={`font-heading text-6xl ${step.id === 1 ? 'text-accent' : step.id === 2 ? 'text-accent-2' : 'text-foreground/15'} leading-none -ml-4 -mt-4 opacity-[0.13]`}>0{step.id}</span>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-foreground tracking-[-0.01em] text-lg">{step.title}</h3>
                                <p className="font-body font-light text-sm text-foreground/50 leading-relaxed mt-2">{step.text}</p>
                            </div>
                        </div>
                        <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover filter blur-[20px] opacity-[0.03] pointer-events-none group-hover:scale-110 group-hover:blur-[10px] transition-all" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
