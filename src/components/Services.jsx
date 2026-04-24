import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    image: '/media/image-1.2.jpg',
    title: 'Haircuts & Styling',
    desc: 'Precision cuts and expert styling tailored to your face shape and lifestyle.',
    tag: 'Most Popular',
  },
  {
    image: '/media/image-1.3.jpg',
    title: 'Keratin & Hair Treatments',
    desc: 'Restore shine, reduce frizz, and achieve silky smooth hair with professional treatments.',
    tag: 'Bestseller',
  },
  {
    image: '/media/image-1.5.jpg',
    title: 'Bridal Makeup & Groom Packages',
    desc: 'Look stunning on your special day with customized bridal and groom styling packages.',
    tag: 'Premium',
  },
  {
    image: '/media/image-1.7.jpg',
    title: 'Facials & Skin Care',
    desc: 'Rejuvenating facial treatments using premium products for glowing, healthy skin.',
    tag: null,
  },
  {
    image: '/media/image-1.8.jpg',
    title: 'Hair Coloring & Smoothening',
    desc: 'Vibrant colors, balayage, highlights, and smoothening done by expert colorists.',
    tag: null,
  },
  {
    image: '/media/image-1.9.jpg',
    title: 'Head Massage & Hair Spa',
    desc: 'A relaxing, therapeutic experience that nourishes hair roots and relieves stress.',
    tag: null,
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card')
    const header = sectionRef.current.querySelector('.section-header')

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    )

    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' }
      }
    )
  }, [])

  return (
    <section id="services" className="section section--beige services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Everything You Need,<br />Under One Roof</h2>
          <div className="accent-line accent-line--center" />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            From everyday haircuts to grand bridal transformations — we do it all with precision and care.
          </p>
          <div className="trust-badge" style={{ margin: '20px auto 0', display: 'inline-flex' }}>
            <span className="star">★</span>
            4.8 Rated Salon in Guntur
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card card">
              <div className="service-card__img-wrap">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="service-card__img"
                />
                {s.tag && <span className="service-card__tag">{s.tag}</span>}
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <a
                  href="https://wa.me/918608885786?text=Hi%20I%20want%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__link"
                >
                  Enquire Now <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
