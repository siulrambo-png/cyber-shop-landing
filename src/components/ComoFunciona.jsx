import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import image0 from '../assets/image_0.png' // Hacker con máscara y mapa verde
import image1 from '../assets/image_1.png' // Hacker en traje y mapa azul
import image2 from '../assets/image_2.png' // Ojo y código
import image4 from '../assets/image_4.png' // Taza de café y teclado

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
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
        {/* Imágenes proporcionadas como elementos flotantes o de fondo sutil */}
        <motion.img initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: 0.3 }} src={image2} alt="Vigilancia de Neón" className="absolute top-[10%] -left-[5%] w-40 h-40 filter blur-[4px] opacity-[0.05] pointer-events-none" />
        <motion.img initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: 0.6 }} src={image1} alt="Defensa Global" className="absolute top-[50%] -right-[5%] w-40 h-40 filter blur-[4px] opacity-[0.05] pointer-events-none" />
        <img src={image0} alt="Mapa de Neón" className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] filter blur-[60px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-12 md:gap-16 items-center">
            {/* Header y Lista - Lado Izquierdo (Mapeado a image_5.png) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-lg mx-auto text-center md:text-left">
                <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold mb-3 inline-block">El Proceso dex</span>
                <h2 className="font-heading text-4xl md:text-5xl italic text-foreground leading-[0.94] tracking-tight">Vigilancia en Tiempo Real, Defensa Global</h2>
                <p className="font-body font-light text-sm md:text-base text-foreground/58 leading-[1.72] mt-5 mb-10 max-w-lg mx-auto">Nuestro enfoque integral de extremo a extremo combina la potencia del neón con la inteligencia de IA avanzado para blindar tu infraestructura contra amenazas invisibles, garantizando la integridad de tus datos críticos.</p>
                <div className="space-y-4 text-left">
                    {stepsList.map((step, i) => (
                        <div key={i} className="flex gap-3 items-center group">
                            {/* Check de neón púrpura recreado */}
                            <div className="liquid-glass-strong rounded-full w-8 h-8 flex items-center justify-center text-accent ring-1 ring-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all hover:scale-105" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--accent)))' }}>
                                <Check className="w-4 h-4" strokeWidth={1} />
                            </div>
                            <span className="font-body text-sm font-light text-foreground group-hover:text-foreground/80">{step.text}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Elemento visual central (como image_5.png) y imagen integrada */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="text-center flex flex-col items-center gap-1">
                <div className="font-heading text-[clamp(1rem,1.5vw,2rem)] text-accent-2 leading-none uppercase -rotate-90">d e x</div>
                <div className="relative w-px h-96 bg-accent-2/15 overflow-hidden filter blur-[4px]">
                    <div className="absolute top-[20%] left-0 w-full h-[60%] rounded-full opacity-[0.2]" style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>
                    <div className="absolute bottom-[20%] left-0 w-full h-[60%] rounded-full opacity-[0.15]" style={{ background: 'radial-gradient(ellipse, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>
                </div>
                <div className="relative z-10 w-40 h-40 mt-[-50px]">
                    <img src={image4} alt="Café y Código de Neón" className="w-full h-full object-contain filter drop-shadow(0 0 10px hsl(var(--accent-2) / 0.3))" />
                    <div className="absolute inset-0 bg-background/50 rounded-full filter blur-[10px]"></div>
                </div>
            </motion.div>

            {/* Tarjetas de pasos (Mapeado a la Parte B) - Lado Derecho */}
            <div className="max-w-lg mx-auto grid grid-cols-1 gap-6 relative">
                 {[
                    { id: 1, title: 'Ingesta de Datos', text: 'Monitoreo continuo de todas las fuentes de datos críticos.', img: image2 },
                    { id: 2, title: 'Análisis IA', text: 'Detección de patrones y anomalías en tiempo real con IA avanzado.', img: image4 },
                    { id: 3, title: 'Defensa Activa', text: 'Neutralización automática de amenazas para minimizar el impacto.', img: image1 },
                 ].map((step, i) => (
                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.15 * step.id }} className="liquid-glass rounded-2xl p-6 relative group overflow-hidden">
                        <div className="relative z-10 flex gap-6 items-center">
                            {/* Número de paso con acento de neón */}
                            <span className={`font-heading text-6xl ${step.id === 1 ? 'text-accent' : step.id === 2 ? 'text-accent-2' : 'text-foreground/15'} leading-none -ml-4 -mt-4 opacity-[0.13]`}>0{step.id}</span>
                            <div className="flex-1">
                                <h3 className="font-heading font-semibold text-foreground tracking-wide text-lg">{step.title}</h3>
                                <p className="font-body font-light text-sm text-foreground/55 leading-relaxed mt-2">{step.text}</p>
                            </div>
                        </div>
                        {/* Imagen de neón como fondo sutil */}
                        <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover filter blur-[20px] opacity-[0.03] pointer-events-none group-hover:scale-110 group-hover:blur-[10px] transition-all" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
