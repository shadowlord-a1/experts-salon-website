import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pricing.css'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  { name: 'Haircut & Styling', price: '₹200+', desc: 'Precision cut, wash & blow-dry', icon: '✂️', popular: false },
  { name: 'Keratin Treatment', price: '₹2,500+', desc: 'Frizz control, shine & smoothness', icon: '💫', popular: true },
  { name: 'Bridal Makeup', price: '₹5,000+', desc: 'Full bridal look with hair styling', icon: '👰', popular: false },
  { name: 'Facial & Skin Care', price: '₹800+', desc: 'Deep cleansing & glow treatment', icon: '✨', popular: false },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.pricing-card')
    const header = sectionRef.current.querySelector('.section-header')

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
      }
    )

    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section className="section section--white pricing-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Transparent, Fair Pricing</h2>
          <div className="accent-line accent-line--center" />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            Premium quality at honest prices. Starting rates shown — final pricing based on hair length & service type.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`pricing-card ${p.popular ? 'pricing-card--popular' : ''}`}>
              {p.popular && <div className="pricing-card__popular">Most Booked</div>}
              <div className="pricing-card__icon">{p.icon}</div>
              <div className="pricing-card__price">{p.price}</div>
              <h3 className="pricing-card__name">{p.name}</h3>
              <p className="pricing-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          * Final pricing may vary based on hair length, thickness & specific service requirements.
          <a
            href="https://wa.me/918608885786?text=Hi%20I%20want%20to%20know%20the%20pricing%20for%20services"
            target="_blank"
            rel="noopener noreferrer"
          > Chat with us for a custom quote →</a>
        </p>
      </div>
    </section>
  )
}
