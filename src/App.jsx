import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolio } from './data/portfolio'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Principles from './components/Principles'
import Expertise from './components/Expertise'
import BusinessDomains from './components/BusinessDomains'
import Work from './components/Work'
import MoreProjects from './components/MoreProjects'
import Experience from './components/Experience'
import Process from './components/Process'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

const kasirinProject = {
  slug: 'kasirin',
  featured: false,
  title: 'KASIRIN',
  type: 'POS · RETAIL OPERATIONS',
  year: '2026',
  image: '/projects/webprojects.svg',
  accent: 'Responsive cashier and retail back-office experience covering selling, orders, customers, shifts, payments, returns, receipts, stock lookup, loyalty, discounts, and store operations.',
  role: 'Frontend Development · Product UX · Responsive Design',
  stack: 'React · TypeScript · Vite · SCSS · React Router',
  status: 'PUBLIC SOURCE',
  statusTone: 'public',
  repository: 'https://github.com/Febriantrip/KasirIn',
  caseStudy: {
    context: 'Retail users need a cashier interface that remains fast and readable on different screen sizes while management users need a broader operational workspace for store activities.',
    problem: 'A desktop-first POS can quickly break down on smaller devices when product browsing, cart controls, totals, payment actions, navigation, and secondary tools compete for limited space.',
    contribution: 'I developed and refined the responsive POS and back-office interface, standardized reusable interaction patterns, improved mobile layout behavior, and shaped the public KasirIn branding and workspace flow.',
    decisions: [
      'Use responsive layout rules that intentionally reorganize cashier content instead of only shrinking desktop components.',
      'Keep transactional controls, cart totals, and payment actions visible and usable on narrow screens.',
      'Separate POS and back-office concerns while sharing common visual and UX foundations.',
      'Use modular feature folders and reusable interface patterns so new retail workflows can be added without turning the UI into one oversized component.'
    ],
    capabilities: ['Responsive POS', 'Orders & customers', 'Shift & payments', 'Returns & receipts', 'Stock & loyalty', 'Retail back office'],
    outcome: 'A portfolio-ready retail interface that demonstrates responsive cashier UX, modular frontend architecture, and broader store-operation workflows in one product.',
    proof: 'PUBLIC SOURCE',
    note: 'The public project uses demo and mock data for portfolio purposes.'
  }
}

export default function App() {
  const root = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.1,
    })

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', ScrollTrigger.update)

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })

      gsap.utils.toArray('[data-line]').forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.3,
            transformOrigin: 'left center',
            ease: 'power3.inOut',
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        )
      })
    }, root)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      lenis.destroy()
      gsap.ticker.remove(tick)
    }
  }, [ready])

  const projects = [...portfolio.projects, kasirinProject]

  return (
    <div ref={root} className="app-shell">
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      {ready && (
        <>
          <CustomCursor />
          <Header data={portfolio} />
          <main>
            <Hero data={portfolio} />
            <About data={portfolio} />
            <Principles items={portfolio.principles} />
            <Expertise items={portfolio.expertise} />
            <BusinessDomains domains={portfolio.domains} />
            <Work projects={projects} />
            <MoreProjects projects={portfolio.moreProjects} />
            <Experience items={portfolio.experience} education={portfolio.education} />
            <Process items={portfolio.process} aiWorkflow={portfolio.aiWorkflow} />
            <TechStack stack={portfolio.stack} tools={portfolio.tools} aiWorkflow={portfolio.aiWorkflow} />
            <Contact data={portfolio} />
          </main>
        </>
      )}
    </div>
  )
}
