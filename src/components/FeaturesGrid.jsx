import { motion } from 'framer-motion'
import { Check, ShieldCheck, Zap, Layers3, Activity } from 'lucide-react'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } }
}

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } }
}

const iconsMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Layers3: Layers3,
  Activity: Activity
};

export default function FeaturesGrid() {
  const features = [
    { icon: 'ShieldCheck', title: 'Cifrado de Neón', desc: 'Protección avanzada de datos con claves de cifrado dinámicas.' },
    { icon: 'Zap', title: 'Monitoreo 24/7', desc: 'Detección en tiempo real con alertas inmediatas y respuesta automática.' },
    { icon: 'Activity', title: 'Respuesta a Incidentes', desc: 'Neutralización automática de amenazas para minimizar el impacto.' },
    { icon: 'Layers3', title: 'Auditoría de Cumplimiento', desc: 'Informes detallados para cumplir con las normativas globales.' },
  ]

  return (
    <section className="bg-card py-28 md:py-36 relative overflow-hidden">
        {/* Blob de neón azul cian sutil */}
        <div className="absolute -top-[10%] -left-[10%] w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>

        <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerItem} className="text-center mb-20 max-w-3xl mx-auto">
                <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold mb-4 inline-block">Capacidades dex</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-silver leading-[0.94] tracking-[-0.02em]">Blindaje Digital Avanzado</h2>
                <p className="font-body font-light text-sm md:text-base text-foreground/50 leading-[1.72] mt-6 max-w-xl mx-auto">Nuestras características de vanguardia ofrecen protección proactiva, visibilidad integral y control total sobre tu infraestructura de datos crítica.</p>
            </motion.div>
        
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {features.map((feature, i) => {
                    const IconComponent = iconsMap[feature.icon];
                    return (
                        <motion.div key={i} variants={staggerItem} className="liquid-glass rounded-3xl p-7 md:p-8 flex flex-col items-center text-center group">
                            <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center text-accent ring-accent/30 ring-1 group-hover:text-foreground group-hover:bg-accent group-hover:ring-accent transition-all hover:scale-110 animate-neon-pulse">
                                <IconComponent className="w-7 h-7" strokeWidth={1} />
                            </div>
                            <h3 className="font-heading mt-6 mb-3 text-lg font-bold tracking-[-0.01em] text-foreground">{feature.title}</h3>
                            <p className="font-body font-light text-sm text-foreground/50 leading-relaxed">{feature.desc}</p>
                            <a href="#" className="inline-flex items-center gap-1.5 text-xs text-accent-2 mt-6 font-semibold group-hover:text-foreground transition-colors">Ver Detalles <Check className="w-3.5 h-3.5" /></a>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    </section>
  )
}
