import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const wrap = useRef(null)
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('load')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(100)
      const id = setTimeout(onComplete, 80)
      return () => clearTimeout(id)
    }

    let current = 0
    const timer = setInterval(() => {
      current += Math.ceil((100 - current) * 0.11) || 1
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        setTimeout(() => setPhase('hello'), 320)
      }
      setCount(current)
    }, 42)
    return () => clearInterval(timer)
  }, [onComplete])

  useEffect(() => {
    if (phase !== 'hello') return
    const tl = gsap.timeline({ onComplete })
    tl.to('.loader-main', { opacity: 0, duration: 0.35 })
      .set('.hello-stage', { display: 'grid' })
      .fromTo('.hello-word', { opacity: 0, scale: .93, filter: 'blur(8px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: .7, ease: 'power3.out' })
      .to('.hello-word', { y: -10, opacity: 0, duration: .45, delay: .45, ease: 'power2.in' })
      .to(wrap.current, { yPercent: -100, duration: .85, ease: 'power4.inOut' })
  }, [phase, onComplete])

  return (
    <div className="preloader" ref={wrap} aria-label="Loading portfolio" aria-live="polite">
      <div className="loader-main">
        <div className="loader-count">{String(count).padStart(2,'0')}%</div>
        <div className="loader-orbit"><span /></div>
      </div>
      <div className="hello-stage"><span className="hello-word">hello</span></div>
    </div>
  )
}
