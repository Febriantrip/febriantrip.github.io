import { useEffect, useRef } from 'react'

export default function ProjectCaseStudy({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = [...panelRef.current.querySelectorAll('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])')]
        .filter((node) => !node.hasAttribute('disabled') && node.getAttribute('aria-hidden') !== 'true')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [project, onClose])

  if (!project) return null
  const study = project.caseStudy

  return (
    <div className="case-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        ref={panelRef}
        className="case-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${project.slug}`}
        onMouseDown={(event) => event.stopPropagation()}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
      >
        <div className="case-topbar">
          <div>
            <span>PROJECT CASE STUDY</span>
            <strong>{project.type}</strong>
          </div>
          <button ref={closeRef} className="case-close" onClick={onClose} aria-label="Close case study">CLOSE <span>×</span></button>
        </div>

        <div className="case-hero">
          <div className="case-hero-copy">
            <span className={`project-status status-${project.statusTone || 'public'}`}>{project.status}</span>
            <h2 id={`case-title-${project.slug}`}>{project.title}</h2>
            <p>{project.accent}</p>
            <div className="case-meta">
              <div><span>ROLE</span><strong>{project.role}</strong></div>
              <div><span>STACK</span><strong>{project.stack}</strong></div>
              <div><span>PROOF</span><strong>{study.proof}</strong></div>
            </div>
          </div>
          <div className="case-hero-visual">
            <img src={project.image} alt="" />
            <span>{project.year}</span>
          </div>
        </div>

        <div className="case-body">
          <article className="case-block case-context">
            <span>01 / CONTEXT</span>
            <p>{study.context}</p>
          </article>
          <article className="case-block">
            <span>02 / PROBLEM</span>
            <h3>WHAT HAD TO WORK</h3>
            <p>{study.problem}</p>
          </article>
          <article className="case-block">
            <span>03 / MY CONTRIBUTION</span>
            <h3>WHAT I OWNED</h3>
            <p>{study.contribution}</p>
          </article>
          <article className="case-block case-decisions">
            <span>04 / KEY DECISIONS</span>
            <h3>ENGINEERING CHOICES</h3>
            <ol>
              {study.decisions.map((decision, index) => (
                <li key={decision}><b>{String(index + 1).padStart(2, '0')}</b><p>{decision}</p></li>
              ))}
            </ol>
          </article>
          <article className="case-block case-capabilities">
            <span>05 / SYSTEM SCOPE</span>
            <h3>WHAT THE PRODUCT COVERS</h3>
            <div>{study.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>
          </article>
          <article className="case-block case-outcome">
            <span>06 / OUTCOME</span>
            <h3>WHAT IT BECAME</h3>
            <p>{study.outcome}</p>
          </article>
        </div>

        <div className="case-footer">
          <p>{study.note}</p>
          <div>
            {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">VIEW SOURCE <span>↗</span></a>}
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">OPEN LIVE SITE <span>↗</span></a>}
          </div>
        </div>
      </section>
    </div>
  )
}
