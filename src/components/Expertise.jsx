import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Expertise({ items }) {
  const section = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.to('.float-glyph.g1', { x: 70, y: -40, rotate: 80, scrollTrigger: { trigger: section.current, scrub: 1, start: 'top bottom', end: 'bottom top' } })
      gsap.to('.float-glyph.g2', { x: -50, y: 55, rotate: -70, scrollTrigger: { trigger: section.current, scrub: 1, start: 'top bottom', end: 'bottom top' } })
      gsap.to('.float-glyph.g3', { x: 45, y: 20, rotate: 120, scrollTrigger: { trigger: section.current, scrub: 1, start: 'top bottom', end: 'bottom top' } })
    }, section)
    return () => ctx.revert()
  }, [])
  return (
    <section className="dark-section expertise" id="expertise" ref={section}>
      <span className="float-glyph g1">✦</span><span className="float-glyph g2">⌘</span><span className="float-glyph g3">◇</span>
      <div className="section-index"><span>03</span><span>EXPERTISE</span></div>
      <div className="hairline" data-line />
      <div className="expertise-head">
        <div><span className="eyebrow">WHAT I DO</span><h2 data-reveal>MY<br/>EXPERTISE</h2></div>
        <p data-reveal>I connect programming with ERP implementation, business process understanding, testing, training, and production operations.</p>
      </div>
      <div className="expertise-list">
        {items.map((item) => (
          <article className="expertise-row" key={item.number} data-reveal>
            <span className="exp-num">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="exp-icon">{item.icon}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
