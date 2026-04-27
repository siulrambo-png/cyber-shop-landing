import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const navLinks = [
    { label: 'Defensa Global', href: '#' },
    { label: 'Cómo funciona', href: '#' },
    { label: 'Tecnología AI', href: '#' },
    { label: 'Contacto', href: '#' }
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex justify-between items-center"
    >
      {/* Logotipo */}
      <a href="/" className="font-heading text-2xl font-bold text-accent">
        dex
      </a>

      {/* Nav Links */}
      <div className="liquid-glass rounded-full px-1.5 py-1.5 pill container flex gap-1.5 items-center">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-xs font-body font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors rounded-full px-4 py-1.5 hover:bg-glass-bg"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Botón CTA */}
      <button className="bg-foreground text-background rounded-full px-6 py-2 font-body font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 group transition-all hover:bg-accent hover:text-accent-foreground">
        Solicitar Demo
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </motion.nav>
  )
}
