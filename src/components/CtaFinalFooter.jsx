import { motion } from 'framer-motion'
import { ArrowUpRight, Lock, Mail, User, ShieldCheck } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function CtaFinalFooter() {
  const headingLines = ["Asegura Tu Futuro", "Digital Hoy"]

  return (
    <footer className="bg-background relative pt-28 pb-0 text-center overflow-hidden">
        {/* Blob de neón azul cian sutil */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full filter blur-[120px] opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent-2)) 0%, transparent 70%)' }}></div>

        {/* Sección CTA */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16 md:gap-20 items-center text-left">
            {/* Texto y Formulario */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                <span className="font-body font-semibold text-[0.65rem] tracking-[0.25em] uppercase mb-6 relative z-10 inline-block text-accent">Acceso Exclusivo</span>
                <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.90] max-w-xl mx-auto md:mx-0 font-bold tracking-[-0.03em]">
                    {headingLines.map((line, i) => (
                        <span key={i} className="block" style={{ background: 'linear-gradient(180deg, #ffffff 30%, #a3a3a3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{line}</span>
                    ))}
                </h2>
                <p className="font-body font-light text-base text-foreground/45 max-w-sm mx-auto md:mx-0 mt-6 mb-12 leading-relaxed">Completa el formulario para una consulta personalizada de seguridad con nuestro equipo de expertos dex y descubre cómo podemos blindar tu mundo digital.</p>

                {/* Formulario — inputs negros con bordes vidrio y focus cian */}
                <form className="space-y-4 max-w-sm mx-auto md:mx-0">
                    <div className="relative group overflow-hidden rounded-full input-neon">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/35 group-focus-within:text-accent-2 transition-colors" />
                        <input type="text" placeholder="Nombre Completo" className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm font-body text-foreground placeholder:text-foreground/30 focus:ring-0 outline-none" />
                    </div>
                    <div className="relative group overflow-hidden rounded-full input-neon">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/35 group-focus-within:text-accent-2 transition-colors" />
                        <input type="email" placeholder="Correo Electrónico" className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm font-body text-foreground placeholder:text-foreground/30 focus:ring-0 outline-none" />
                    </div>
                    <div className="relative group overflow-hidden rounded-full input-neon">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/35 group-focus-within:text-accent-2 transition-colors" />
                        <input type="text" placeholder="Empresa (Opcional)" className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm font-body text-foreground placeholder:text-foreground/30 focus:ring-0 outline-none" />
                    </div>
                    <button type="submit" className="bg-accent text-accent-foreground rounded-full px-8 py-3.5 font-body font-semibold text-sm tracking-wider uppercase inline-flex items-center gap-2 group transition-all btn-glow hover:brightness-110 w-full justify-center">
                        Enviar Solicitud
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </form>
            </motion.div>

            {/* Candado neón nítido — stroke 0.5, multi drop-shadow */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ delay: 0.3 }} className="relative text-accent justify-self-center md:justify-self-end animate-neon-pulse">
                <Lock className="w-56 h-56 md:w-72 md:h-72" strokeWidth={0.5} />
            </motion.div>
        </div>

        {/* Footer Bar */}
        <div className="mt-24 py-8 flex justify-between px-8 lg:px-16 relative z-10 text-xs text-foreground/25 tracking-wide font-body font-light">
            <p>&copy; 2026 security-dex. Todos los derechos reservados.</p>
            <div className="flex gap-4 items-center">
                <a href="#" className="hover:text-foreground/50 transition-colors">Política de Privacidad</a>
                <span>&middot;</span>
                <a href="#" className="hover:text-foreground/50 transition-colors">Términos de Servicio</a>
            </div>
            <a href="/" className="font-heading text-lg font-bold text-accent transition-all hover:scale-105 hover:text-accent-2 neon-lock-glow">
                dex
            </a>
        </div>
    </footer>
  )
}
