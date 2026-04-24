import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'Sneha R.',
    location: 'Guntur',
    rating: 5,
    text: 'Very neat and stylish — exactly how I wanted it. The stylist listened to every detail and delivered perfectly. Will be coming back!',
    service: 'Haircut & Styling',
    avatar: 'SR'
  },
  {
    name: 'Ravi K.',
    location: 'Guntur',
    rating: 5,
    text: 'Excellent keratin treatment experience. My hair feels incredibly smooth and manageable. Best salon in Guntur without a doubt.',
    service: 'Keratin Treatment',
    avatar: 'RK'
  },
  {
    name: 'Priya M.',
    location: 'Guntur',
    rating: 5,
    text: 'Relaxing head massage and great service. The team is very professional and the salon is so clean. Loved the whole experience.',
    service: 'Head Massage & Spa',
    avatar: 'PM'
  },
  {
    name: 'Ananya S.',
    location: 'Brindavan Gardens',
    rating: 5,
    text: 'Got my bridal makeup done here and I cannot be happier. Dileep did an outstanding job. I looked absolutely stunning on my wedding day!',
    service: 'Bridal Makeup',
    avatar: 'AS'
  },
  {
    name: 'Kiran T.',
    location: 'Guntur',
    rating: 5,
    text: 'The hair coloring is exceptional — exactly the shade I wanted. Very reasonable pricing for the quality of service you get here.',
    service: 'Hair Coloring',
    avatar: 'KT'
  }
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const header = sectionRef.current.querySelector('.section-header')
    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
      }
    )

    const cards = sectionRef.current.querySelectorAll('.testimonial-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )

    // Auto slide
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="section section--beige testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="accent-line accent-line--center" />
        </div>

        {/* Featured Review */}
        <div className="testimonial-featured">
          <div className="testimonial-featured__stars">
            {'★'.repeat(5)}
          </div>
          <blockquote className="testimonial-featured__text">
            "{reviews[active].text}"
          </blockquote>
          <div className="testimonial-featured__author">
            <div className="testimonial-avatar testimonial-avatar--lg">{reviews[active].avatar}</div>
            <div>
              <div className="testimonial-featured__name">{reviews[active].name}</div>
              <div className="testimonial-featured__meta">{reviews[active].service} · {reviews[active].location}</div>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === active ? 'testimonial-dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All cards */}
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`testimonial-card ${i === active ? 'testimonial-card--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="testimonial-card__stars">{'★'.repeat(r.rating)}</div>
              <p className="testimonial-card__text">"{r.text.slice(0, 100)}..."</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-avatar">{r.avatar}</div>
                <div>
                  <div className="testimonial-card__name">{r.name}</div>
                  <div className="testimonial-card__loc">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
