import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhyChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

const points = [
  {
    icon: '⭐',
    title: '4.8★ Rated Salon',
    desc: 'Consistently top-rated by 600+ verified clients in Guntur for quality and care.',
    stat: '600+ Clients'
  },
  {
    icon: '✂️',
    title: 'Expert Stylists',
    desc: 'Experienced professionals trained in the latest techniques and trends.',
    stat: '5+ Years Exp.'
  },
  {
    icon: '💎',
    title: 'Premium Products',
    desc: 'We use only professional-grade, skin & hair safe products for every service.',
    stat: 'Top Brands'
  },
  {
    icon: '🤝',
    title: 'Personalized Care',
    desc: 'Every client gets a custom consultation to understand their unique needs.',
    stat: '1-on-1 Focus'
  }
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll('.why-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        }
      }
    )

    const header = sectionRef.current.querySelector('.section-header')
    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        }
      }
    )
  }, [])

  return (
    <section className="section section--white why-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Guntur's Most Trusted Salon</h2>
          <div className="accent-line accent-line--center" />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            We've built our reputation on consistent results, personalized attention, and genuine care for every client.
          </p>
        </div>

        <div className="why-grid" ref={cardsRef}>
          {points.map((p, i) => (
            <div key={i} className="why-card card">
              <div className="why-card__icon-wrap">
                <span className="why-card__icon">{p.icon}</span>
              </div>
              <div className="why-card__stat">{p.stat}</div>
              <h3 className="why-card__title">{p.title}</h3>
              <p className="why-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
