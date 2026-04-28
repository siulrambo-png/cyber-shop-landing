import { motion } from 'framer-motion'
import image0 from '../assets/image_0.png'
import image3 from '../assets/image_3.jpg'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } }
}

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function Testimonios() {
  const testimonials = [
    {
      photo: image0,
      quote: "La defensa de security-dex es impecable. Su sistema de neón no solo es visualmente impresionante, sino que neutraliza amenazas en tiempo real antes de que se conviertan en problemas. ¡Totalmente recomendado!",
      name: "Ciberdefensor Anónimo",
      rol: "Analista de Seguridad",
      accent: 'principal'
    },
    {
      photo: 'https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg',
      quote: "La plataforma es intuitiva y potente. El monitoreo 24/7 y la IA nos dan la tranquilidad que necesitamos para enfocarnos en nuestro negocio sin preocupaciones constantes de seguridad.",
      name: "Lucía Fernández",
      rol: "CTO en TechInnovate",
      accent: 'secundario'
    },
    {
      photo: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
      quote: "Implementar security-dex fue un antes y un después en nuestra seguridad digital. La auditoría de cumplimiento detallada nos ayudó a cumplir con todas las normativas exigentes de forma eficiente.",
      name: "Juan García",
      rol: "Gerente de Cumplimiento",
      accent: 'neutro'
    },
  ]

  return (
    <section className="bg-card py-28 md:py-36 relative overflow-hidden">
        {/* Blob de neón púrpura sutil */}
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-[0.07] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}></div>

        <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerItem} className="text-center mb-20 max-w-3xl mx-auto">
                <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold mb-4 inline-block">Voces de Confianza</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-silver leading-[0.94] tracking-[-0.02em]">Lo que Dicen de dex</h2>
                <p className="font-body font-light text-sm md:text-base text-foreground/50 leading-[1.72] mt-6 max-w-xl mx-auto">Nuestros clientes valoran la proactividad, el monitoreo constante y la respuesta automática de security-dex. Sus historias de éxito son el mejor testimonio.</p>
            </motion.div>
        
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {testimonials.map((t, i) => (
                    <motion.div key={i} variants={staggerItem} className="liquid-glass rounded-3xl p-8 group flex flex-col gap-6 relative overflow-hidden">
                        {/* Avatar con anillo neón — cian para Ciberdefensor */}
                        <div className={`relative w-20 h-20 rounded-full border-2 ${t.accent === 'principal' ? 'border-accent-2 neon-ring-cyan' : t.accent === 'secundario' ? 'border-accent neon-ring-purple' : 'border-foreground/15'} overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                            <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Línea de acento */}
                        <div className={`w-8 h-0.5 ${t.accent === 'principal' ? 'bg-accent-2' : t.accent === 'secundario' ? 'bg-accent' : 'bg-foreground/15'}`} style={{ filter: t.accent === 'neutro' ? 'none' : `drop-shadow(0 0 4px ${t.accent === 'principal' ? 'hsl(var(--accent-2))' : 'hsl(var(--accent))'})` }} />
                        {/* Quote */}
                        <blockquote className="font-body font-light text-sm italic text-foreground/65 leading-[1.72] flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                        {/* Nombre y Rol */}
                        <div>
                            <p className="font-heading font-bold text-lg text-foreground mt-4 mb-1 tracking-[-0.01em]">{t.name}</p>
                            <p className="font-body font-light text-xs text-foreground/35">{t.rol}</p>
                        </div>
                        {/* Fondo sutil */}
                        {t.accent === 'principal' && <img src={t.photo} alt={t.name} className="absolute inset-0 w-full h-full object-cover filter blur-[25px] opacity-[0.02] pointer-events-none group-hover:scale-110 transition-all" />}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}
