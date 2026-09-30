import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollBadge from './ScrollBadge'

export default function Hero({ data }) {
  const hero = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('.hero-kicker > *', { y: 24, opacity: 0, stagger: .08, duration: .65, ease: 'power3.out' })
        .from('.hero-title .letter', { yPercent: 120, rotate: 8, stagger: .025, duration: .9, ease: 'power4.out' }, '-=.35')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: .6 }, '-=.25')
        .from('.hero-meta, .scroll-badge', { opacity: 0, duration: .55, stagger: .1 }, '-=.3')

      gsap.to('.hero-title', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: hero.current, start: 'top top', end: 'bottom top', scrub: true }
      })
    }, hero)
    return () => ctx.revert()
  }, [])

  const letters = [...data.heroTop]
  return (
    <section className="hero" id="top" ref={hero}>
      <div className="noise" />
      <div className="hero-kicker">
        <span>{data.shortRole}</span><span>© 2026</span>
      </div>
      <div className="hero-center">
        <h1 className="hero-title" aria-label={data.heroTop}>
          {letters.map((letter, i) => <span className="letter-wrap" key={`${letter}-${i}`}><span className="letter">{letter}</span></span>)}
        </h1>
        <h2 className="hero-subtitle">{data.heroBottom}</h2>
      </div>
      <div className="hero-meta"><span>{data.location}</span><span>SCROLL / 01</span></div>
      <ScrollBadge />
    </section>
  )
}
