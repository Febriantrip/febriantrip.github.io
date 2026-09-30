export default function MoreProjects({ projects }) {
  return (
    <section className="dark-section more-work" id="more-work">
      <div className="section-index"><span>06</span><span>MORE PROJECT EXPERIENCE</span></div>
      <div className="hairline" data-line />
      <div className="more-projects">
        {projects.map((project, index) => (
          <article key={project.title} data-reveal>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{project.title}</h3>
            <p>{project.meta}</p>
            <i>↗</i>
          </article>
        ))}
      </div>
    </section>
  )
}
