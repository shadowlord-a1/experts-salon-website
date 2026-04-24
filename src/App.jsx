import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Stylists from './components/Stylists'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — Dark */}
        <Hero />

        {/* 2. Why Choose Us — White */}
        <WhyChooseUs />

        {/* 3. Services — Beige */}
        <Services />

        {/* 4. Pricing — White */}
        <Pricing />

        {/* 5. Gallery — White (most dominant) */}
        <Gallery />

        {/* 6. Testimonials — Beige */}
        <Testimonials />

        {/* 7. Stylists — White */}
        <Stylists />

        {/* 8. About — Beige */}
        <About />

        {/* 9. Contact — Dark */}
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  )
}
