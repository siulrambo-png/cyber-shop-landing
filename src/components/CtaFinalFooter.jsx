import { motion } from 'framer-motion'
import { ArrowUpRight, Lock, Mail, User, ShieldCheck } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function CtaFinalFooter() {
  const headingLines = ["Asegura Tu Futuro", "Digital Hoy"]

  return (
    <footer className="bg-background relative pt-24 pb-0 text-center overflow-hidden">
        {/* Blob de neón azul cian sutil */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full filter blur-[120px] opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>

        {/* Sección CTA (Mapeado a image_5.png) */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-12 md:gap-16 items-center text-left">
            {/* Texto y Formulario - Lado Izquierdo */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                <span className="font-body font-semibold text-[0.65rem] tracking-[0.25em] uppercase color: accent mb-5 relative z-10 inline-block text-accent">Acceso Exclusivo</span>
                <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] leading-[0.90] text-foreground max-w-xl mx-auto md:mx-0 font-bold tracking-tight">
                    {headingLines.map((line, i) => (
                        <span key={i} className="block">{line}</span>
                    ))}
                </h2>
                <p className="font-body font-light text-base text-foreground/50 max-w-sm mx-auto md:mx-0 mt-5 mb-10 leading-relaxed">Completa el formulario para una consulta personalizada de seguridad con nuestro equipo de expertos dex y descubre cómo podemos blindar tu mundo digital.</p>
                <form className="space-y-4 max-w-sm mx-auto md:mx-0">
                    <div className="relative group overflow-hidden rounded-full liquid-glass hover:ring-1 hover:ring-accent transition-all">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/40 group-hover:text-accent transition-colors" />
                        <input type="text" placeholder="Nombre Completo" className="w-full bg-transparent pl-12 pr-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:ring-0 outline-none" />
                    </div>
                    <div className="relative group overflow-hidden rounded-full liquid-glass hover:ring-1 hover:ring-accent transition-all">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/40 group-hover:text-accent transition-colors" />
                        <input type="email" placeholder="Correo Electrónico" className="w-full bg-transparent pl-12 pr-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:ring-0 outline-none" />
                    </div>
                    <div className="relative group overflow-hidden rounded-full liquid-glass hover:ring-1 hover:ring-accent transition-all">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/40 group-hover:text-accent transition-colors" />
                        <input type="text" placeholder="Empresa (Opcional)" className="w-full bg-transparent pl-12 pr-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:ring-0 outline-none" />
                    </div>
                    <button type="submit" className="bg-foreground text-background rounded-full px-8 py-3.5 font-body font-semibold text-sm tracking-wider uppercase inline-flex items-center gap-2 group transition-all hover:bg-accent hover:text-accent-foreground w-full justify-center">
                        Enviar Solicitud
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </form>
            </motion.div>

            {/* Candado de neón púrpura grande de image_5.png recreado - Lado Derecho */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="relative text-accent justify-self-center md:justify-self-end">
                <div className="filter blur-[10px]" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--accent))) drop-shadow(0 0 20px hsl(var(--accent)))' }}>
                    <Lock className="w-80 h-80" strokeWidth={0.5} />
                </div>
            </motion.div>
        </div>

        {/* Footer Bar (mt-20 py-7 flex justify-between px-8 lg:px-16) */}
        <div className="mt-20 py-7 flex justify-between px-8 lg:px-16 relative z-10 text-xs text-foreground/28 tracking-wide font-body font-light">
            <p>© 2026 security-dex. Todos los derechos reservados.</p>
            <div className="flex gap-4 items-center">
                <a href="#" className="hover:text-foreground/60 transition-colors">Política de Privacidad</a>
                <span>·</span>
                <a href="#" className="hover:text-foreground/60 transition-colors">Términos de Servicio</a>
            </div>
            <a href="/" className="font-heading text-lg font-bold text-accent transition-all hover:scale-105 hover:text-accent-2" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--accent) / 0.5))' }}>
                dex
            </a>
        </div>
    </footer>
  )
}
