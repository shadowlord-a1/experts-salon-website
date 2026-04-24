import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.contact__animate')
    gsap.fromTo(els,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    )
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/918608885786?text=Hi%20I%20want%20to%20book%20a%20service', '_blank')
  }

  return (
    <section id="contact" className="section section--dark contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label contact__animate">Get In Touch</span>
          <h2 className="section-title section-title--white contact__animate">
            Ready for Your Transformation?
          </h2>
          <div className="accent-line accent-line--center contact__animate" />
        </div>

        <div className="contact__grid">
          {/* Info cards */}
          <div className="contact__info">
            <div className="contact-card contact__animate">
              <div className="contact-card__icon">📍</div>
              <div>
                <div className="contact-card__label">Address</div>
                <div className="contact-card__value">
                  D.No. 5-87-50/1, 1st Floor<br />
                  Lakshmipuram Main Rd<br />
                  Opp. Seetharamaiah High School<br />
                  Brindavan Gardens, Guntur<br />
                  Andhra Pradesh 522007
                </div>
              </div>
            </div>

            <div className="contact-card contact__animate">
              <div className="contact-card__icon">⏰</div>
              <div>
                <div className="contact-card__label">Working Hours</div>
                <div className="contact-card__value">
                  Monday – Sunday<br />
                  <strong>9:00 AM – 9:00 PM</strong>
                </div>
              </div>
            </div>

            <div className="contact-card contact__animate">
              <div className="contact-card__icon">📞</div>
              <div>
                <div className="contact-card__label">Phone / WhatsApp</div>
                <a href="tel:+918608885786" className="contact-card__value contact-card__link">
                  +91 86088 85786
                </a>
              </div>
            </div>

            <div className="contact__ctas contact__animate">
              <button className="btn btn-primary contact__btn" onClick={handleWhatsApp}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book on WhatsApp
              </button>
              <a href="tel:+918608885786" className="btn btn-secondary contact__btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.8a19.79 19.79 0 01-3.07-8.65A2 2 0 012.86 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map-wrap contact__animate">
            <div className="contact__map-label">Find Us</div>
            <div className="contact__map">
              {/* Replace src with your actual Google Maps embed URL */}
              <iframe
                title="Experts Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5!2d80.4319!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzI0LjEiTiA4MMKwMjUnNTQuOCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-overlay">
                <div className="contact__map-pin">
                  <span>📍</span>
                  <div className="contact__map-pin-text">
                    <strong>Experts Salon</strong>
                    <span>Brindavan Gardens, Guntur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
