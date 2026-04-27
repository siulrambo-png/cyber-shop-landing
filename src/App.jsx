import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import ComoFunciona from './components/ComoFunciona'
import Testimonios from './components/Testimonios'
import CtaFinalFooter from './components/CtaFinalFooter'

export default function App() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <FeaturesGrid />
          <ComoFunciona />
          <Testimonios />
          <CtaFinalFooter />
        </main>
      </div>
    </div>
  )
}
