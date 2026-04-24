import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.about__animate')
    gsap.fromTo(els,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
      }
    )
  }, [])

  return (
    <section className="section section--beige about-section" ref={sectionRef}>
      <div className="container">
        <div className="about__inner">
          <div className="about__image-col about__animate">
            <div className="about__img-wrap">
              <img src="/media/image-0.2.jpg" alt="Experts Salon interior" loading="lazy" />
              <div className="about__img-overlay" />
            </div>
            <div className="about__img-badge">
              <span className="about__img-badge-num">600+</span>
              <span className="about__img-badge-text">Happy Clients</span>
            </div>
          </div>

          <div className="about__content-col">
            <span className="section-label about__animate">Our Story</span>
            <h2 className="section-title about__animate">
              More Than a Salon.<br />
              <span style={{ color: 'var(--gold)' }}>A Confidence Journey.</span>
            </h2>
            <div className="accent-line about__animate" style={{ marginBottom: 24 }} />
            <p className="about__text about__animate">
              At Experts Salon, we believe every client deserves to feel extraordinary. Nestled in the heart of Guntur, we've spent years building a sanctuary where artistry meets care — where you walk in with a vision and walk out with confidence.
            </p>
            <p className="about__text about__animate">
              Our team of dedicated professionals treats every appointment as a personal story waiting to be told. From a simple trim to a complete bridal transformation, we bring the same level of precision, warmth, and expertise to every chair.
            </p>
            <div className="about__stats about__animate">
              <div className="about__stat">
                <span className="about__stat-num">600+</span>
                <span className="about__stat-label">Clients Served</span>
              </div>
              <div className="about__stat-divider" />
              <div className="about__stat">
                <span className="about__stat-num">4.8★</span>
                <span className="about__stat-label">Average Rating</span>
              </div>
              <div className="about__stat-divider" />
              <div className="about__stat">
                <span className="about__stat-num">5+</span>
                <span className="about__stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
