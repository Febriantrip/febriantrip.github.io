import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import ProjectCaseStudy from './ProjectCaseStudy'

function ProjectCard({ project, index, compact = false, onOpen }) {
  return (
    <article className={`project-card ${compact ? 'project-card-compact' : 'project-card-featured'}`} data-reveal>
      <button className="project-image project-image-button" type="button" onClick={() => onOpen(project)} aria-label={`Open ${project.title} case study`}>
        <img src={project.image} alt="" loading="lazy" decoding="async" />
        <span className="project-arrow">↗</span>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <span className={`project-status status-${project.statusTone || 'public'}`}>{project.status}</span>
      </button>
      <div className="project-info">
        <div>
          <span>{project.type}</span>
          <h3>{project.title}</h3>
          <small>{project.accent}</small>
          <div className="project-detail"><b>ROLE</b><p>{project.role}</p></div>
          <div className="project-detail"><b>STACK</b><p>{project.stack}</p></div>
          <div className="project-links" aria-label={`${project.title} links`}>
            <button className="project-case-button" type="button" onClick={() => onOpen(project)}>CASE STUDY <span>↗</span></button>
            {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>}
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE SITE <span>↗</span></a>}
            {!project.repository && project.repositoryLabel && <span className="project-private">{project.repositoryLabel}</span>}
          </div>
        </div>
        <span>{project.year}</span>
      </div>
    </article>
  )
}

export default function Work({ projects }) {
  const section = useRef(null)
  const [activeProject, setActiveProject] = useState(null)
  const featured = useMemo(() => projects.filter((project) => project.featured), [projects])
  const supporting = useMemo(() => projects.filter((project) => !project.featured), [projects])
  const closeCaseStudy = useCallback(() => setActiveProject(null), [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.work-title span', {
        yPercent: 105,
        stagger: .05,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.work-title', start: 'top 80%' }
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section className="work dark-section" id="work" ref={section}>
      <div className="work-overline"><span>05 · SELECTED WORK</span><span>2022—2026</span></div>
      <h2 className="work-title" aria-label="WORK">{[...'WORK'].map((l,i)=><span key={i}>{l}</span>)}</h2>
      <div className="work-filter"><span>ERP</span><span>WEB</span><span>PRODUCT</span><span>INTERNAL SYSTEMS</span><i /></div>

      <div className="work-tier-head" data-reveal>
        <span>FLAGSHIP SYSTEMS</span>
        <p>Three projects that best represent how I connect architecture, business rules, full-stack development, and production operations.</p>
      </div>
      <div className="featured-project-grid">
        {featured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={setActiveProject} />)}
      </div>

      <div className="work-tier-head supporting-head" data-reveal>
        <span>PRODUCT & WEB WORK</span>
        <p>Supporting projects that show product thinking, frontend systems, internal tools, and deployment beyond ERP.</p>
      </div>
      <div className="supporting-project-grid">
        {supporting.map((project, index) => <ProjectCard key={project.title} project={project} index={featured.length + index} compact onOpen={setActiveProject} />)}
      </div>

      <ProjectCaseStudy project={activeProject} onClose={closeCaseStudy} />
    </section>
  )
}
