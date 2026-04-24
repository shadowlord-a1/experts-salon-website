import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const words = contentRef.current.querySelectorAll('.hero__word')
    const sub = contentRef.current.querySelector('.hero__sub')
    const badge = contentRef.current.querySelector('.hero__badge')
    const ctas = contentRef.current.querySelector('.hero__ctas')
    const micro = contentRef.current.querySelector('.hero__micro')
    const banner = contentRef.current.querySelector('.hero__banner')
    const scroll = heroRef.current.querySelector('.hero__scroll')

    // Page entry: bg zoom
    gsap.fromTo(bgRef.current,
      { scale: 1.08 },
      { scale: 1, duration: 2.2, ease: 'power2.out' }
    )

    // Stagger text animations
    tl.fromTo(badge,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(words,
      { opacity: 0, y: 50, rotateX: 12 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.08 },
      '-=0.2'
    )
    .fromTo(sub,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(ctas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.2'
    )
    .fromTo(micro,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.1'
    )
    .fromTo(banner,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.2'
    )
    .fromTo(scroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '+=0.2'
    )

    // Add body loaded class
    document.body.classList.add('loaded')
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/918608885786?text=Hi%20I%20want%20to%20book%20a%20service', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+918608885786'
  }

  return (
    <section id="hero" className="hero section--dark" ref={heroRef}>
      {/* Background */}
      <div className="hero__bg" ref={bgRef}>
        <img
          src="/media/image-0.1.jpg"
          alt="Experts Salon premium interior"
          loading="eager"
        />
      </div>

      {/* Overlays */}
      <div className="hero__overlay" ref={overlayRef} />
      <div className="hero__vignette" />

      {/* Content */}
      <div className="container hero__content" ref={contentRef}>
        {/* Trust badge */}
        <div className="trust-badge hero__badge">
          <span className="star">★</span>
          4.8 Rated Salon in Guntur · 600+ Happy Clients
        </div>

        {/* Main heading */}
        <h1 className="hero__heading" aria-label="Crafting Confidence. Styling Perfection.">
          {"Crafting Confidence.".split(' ').map((w, i) => (
            <span key={i} className="hero__word">{w}</span>
          ))}
          <br />
          {"Styling Perfection.".split(' ').map((w, i) => (
            <span key={`b${i}`} className="hero__word hero__word--gold">{w}</span>
          ))}
        </h1>

        <p className="hero__sub">
          Trusted by 600+ clients in Guntur for premium hair &amp; bridal transformations
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <button className="btn btn-primary hero__btn-whatsapp" onClick={handleWhatsApp}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </button>
          <button className="btn btn-secondary" onClick={handleCall}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.8a19.79 19.79 0 01-3.07-8.65A2 2 0 012.86 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </button>
        </div>

        <p className="hero__micro">
          <span className="hero__micro-dot" /> Quick response within minutes
        </p>

        {/* Free consultation banner */}
        <div className="hero__banner">
          <span className="hero__banner-icon">🎁</span>
          <span>Free consultation on your first visit — walk in or WhatsApp us</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
