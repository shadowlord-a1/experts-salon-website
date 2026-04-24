import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

// All gallery images mapped from /media — best transformations FIRST
const galleryImages = [
  { src: '/media/image-0.3.jpg', alt: 'Hair transformation', category: 'hair' },
  { src: '/media/image-0.4.jpg', alt: 'Bridal styling', category: 'bridal' },
  { src: '/media/image-1.1.jpg', alt: 'Salon styling', category: 'experience' },
  { src: '/media/image-1.3.jpg', alt: 'Keratin treatment result', category: 'hair' },
  { src: '/media/image-1.4.jpg', alt: 'Bridal look', category: 'bridal' },
  { src: '/media/image-1.5.jpg', alt: 'Premium styling', category: 'experience' },
  { src: '/media/image-1.6.jpg', alt: 'Hair coloring result', category: 'hair' },
  { src: '/media/image-1.0.jpg', alt: 'Salon interior', category: 'experience' },
  { src: '/media/image-1.10.jpg', alt: 'Client styling', category: 'hair' },
  { src: '/media/image-1.11.jpg', alt: 'Bridal makeup', category: 'bridal' },
]

// Before/After pairs using real media images
const beforeAfterPairs = [
  {
    before: '/media/image-0.1.jpg',
    after: '/media/image-0.2.jpg',
    label: 'Smoothening Treatment'
  },
  {
    before: '/media/image-1.7.jpg',
    after: '/media/image-1.8.jpg',
    label: 'Hair Color Transformation'
  }
]

const categories = ['all', 'hair', 'bridal', 'experience']

function BeforeAfterSlider({ before, after, label }) {
  const containerRef = useRef(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updatePos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }

  const onMouseDown = (e) => { e.preventDefault(); setDragging(true) }
  const onMouseMove = (e) => { if (dragging) updatePos(e.clientX) }
  const onMouseUp = () => setDragging(false)

  const onTouchStart = () => setDragging(true)
  const onTouchMove = (e) => { if (dragging) updatePos(e.touches[0].clientX) }
  const onTouchEnd = () => setDragging(false)

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    return () => window.removeEventListener('mouseup', onMouseUp)
  })

  return (
    <div className="ba-slider" ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img src={before} alt="Before" className="ba-img ba-img--before" />
      <div className="ba-after-wrap" style={{ width: `${sliderPos}%` }}>
        <img src={after} alt="After" className="ba-img ba-img--after" />
      </div>
      <div
        className="ba-handle"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div className="ba-handle__line" />
        <div className="ba-handle__circle">
          <span>◀</span><span>▶</span>
        </div>
        <div className="ba-handle__line" />
      </div>
      <div className="ba-labels">
        <span className="ba-label ba-label--before">Before</span>
        <span className="ba-label ba-label--after">After</span>
      </div>
      <div className="ba-title">{label}</div>
    </div>
  )
}

export default function Gallery() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const [filter, setFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter)

  useEffect(() => {
    const header = sectionRef.current.querySelector('.section-header')
    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' }
      }
    )
  }, [])

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.gallery-item')
    if (!items) return
    gsap.fromTo(items,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      }
    )
  }, [filter])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" className="section section--white gallery-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Transformations</span>
          <h2 className="section-title gallery-section__title">Real Results,<br />Real People</h2>
          <div className="accent-line accent-line--center" />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            Every look here is from a real client at Experts Salon. Drag the slider to see the full transformation.
          </p>
        </div>

        {/* Before/After Sliders */}
        <div className="ba-grid">
          {beforeAfterPairs.map((pair, i) => (
            <BeforeAfterSlider key={i} {...pair} />
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${filter === cat ? 'gallery-filter-btn--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Work' : cat === 'hair' ? 'Hair Transformations' : cat === 'bridal' ? 'Bridal Looks' : 'Salon Experience'}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" ref={gridRef}>
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="gallery-item"
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
            >
              <div className="gallery-item__img-wrap">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <div className="gallery-item__overlay">
                <span className="gallery-item__zoom">🔍</span>
                <span className="gallery-item__label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filtered.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  )
}
