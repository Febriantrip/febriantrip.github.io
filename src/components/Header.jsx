import { useEffect, useState } from 'react'

export default function Header({ data }) {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40)
    fn(); window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`site-header ${solid ? 'is-solid' : ''}`}>
      <a className="brand magnetic" href="#top" aria-label="Home">{data.name.toLowerCase()}<span>°</span></a>
      <nav>
        <a href="#about">ABOUT</a>
        <a href="#expertise">EXPERTISE</a>
        <a href="#work">WORK</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <a className="header-dot magnetic" href="#contact" aria-label="Contact"><i /></a>
    </header>
  )
}
