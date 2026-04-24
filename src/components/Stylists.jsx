import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Stylists.css'

gsap.registerPlugin(ScrollTrigger)

const stylists = [
  {
    name: 'Narasimha',
    role: 'Senior Hair Specialist',
    initials: 'N',
    bio: 'With over 5 years of expertise in precision cuts, hair treatments, and advanced styling techniques, Narasimha brings artistry and dedication to every client.',
    specialties: ['Haircuts', 'Keratin', 'Hair Spa', 'Coloring'],
  },
  {
    name: 'Dileep',
    role: 'Bridal & Groom Stylist',
    initials: 'D',
    bio: 'A specialist in bridal and groom transformations, Dileep creates stunning looks for life\'s most important moments with a keen eye for elegance and detail.',
    specialties: ['Bridal Makeup', 'Groom Styling', 'Skin Care', 'Event Looks'],
  }
]

export default function Stylists() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.stylist-card')
    const header = sectionRef.current.querySelector('.section-header')

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
      }
    )

    gsap.fromTo(cards,
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section className="section section--white stylists-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the Artists</h2>
          <div className="accent-line accent-line--center" />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            Skilled professionals who bring passion and precision to every appointment.
          </p>
        </div>

        <div className="stylists-grid">
          {stylists.map((s, i) => (
            <div key={i} className="stylist-card card">
              <div className="stylist-card__avatar-wrap">
                <div className="stylist-card__avatar">
                  <span>{s.initials}</span>
                </div>
                <div className="stylist-card__avatar-ring" />
              </div>
              <div className="stylist-card__body">
                <h3 className="stylist-card__name">{s.name}</h3>
                <div className="stylist-card__role">{s.role}</div>
                <p className="stylist-card__bio">{s.bio}</p>
                <div className="stylist-card__tags">
                  {s.specialties.map(tag => (
                    <span key={tag} className="stylist-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
