import './Footer.css'

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-icon" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✦</span>
              <div>
                <span className="logo-main" style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800, display: 'block' }}>Experts</span>
                <span className="logo-sub" style={{ color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>Salon</span>
              </div>
            </div>
            <p className="footer__tagline">
              Crafting Confidence.<br />Styling Perfection.
            </p>
            <div className="trust-badge footer__badge">
              <span className="star">★</span>
              4.8 Rated Salon in Guntur
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <div className="footer__col-title">Quick Links</div>
            <ul className="footer__links">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }} className="footer__link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            <ul className="footer__links">
              {['Haircuts & Styling', 'Keratin Treatment', 'Bridal Makeup', 'Hair Coloring', 'Facials', 'Head Massage'].map(s => (
                <li key={s}>
                  <a
                    href="https://wa.me/918608885786?text=Hi%20I%20want%20to%20enquire%20about%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <div className="footer__contact-info">
              <p>D.No. 5-87-50/1, 1st Floor<br />Lakshmipuram Main Rd<br />Guntur, AP 522007</p>
              <a href="tel:+918608885786" className="footer__contact-link">+91 86088 85786</a>
              <div className="footer__hours">Mon–Sun · 9 AM – 9 PM</div>
            </div>

            {/* Social */}
            <div className="footer__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://wa.me/918608885786"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon footer__social-icon--wa"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Experts Salon, Guntur. All rights reserved.</span>
          <span className="footer__bottom-craft">Made with ♥ for premium clients</span>
        </div>
      </div>
    </footer>
  )
}
