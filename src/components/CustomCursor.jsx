import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: .08 })
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: .35, ease: 'power3.out' })
    }
    const over = (e) => {
      if (e.target.closest('a,button,.magnetic,.project-card')) document.body.classList.add('cursor-active')
    }
    const out = () => document.body.classList.remove('cursor-active')
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return <><span ref={ring} className="cursor-ring"/><span ref={dot} className="cursor-dot"/></>
}
