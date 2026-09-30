export default function Experience({ items, education }) {
  return (
    <section className="paper-section experience" id="experience">
      <div className="section-index"><span>07</span><span>EXPERIENCE</span></div>
      <div className="paper-line" data-line />
      <div className="experience-layout">
        <div className="experience-title" data-reveal>
          <span className="eyebrow dark">CAREER</span>
          <h2>FROM ERP<br/>TO <span>CODE.</span></h2>
          <p>My path combines implementation, IT operations, business understanding, and software development rather than treating them as separate worlds.</p>
        </div>
        <div className="timeline">
          {items.map((item, index) => (
            <article key={item.company} data-reveal>
              <div className="timeline-number">0{index + 1}</div>
              <div><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p></div>
            </article>
          ))}
          <article className="education-card" data-reveal>
            <div className="timeline-number">EDU</div>
            <div><span className="timeline-period">{education.period}</span><h3>{education.degree}</h3><h4>{education.school}</h4><p>Accounting background that supports practical understanding of finance, reporting, AR/AP, tax, and ERP business flows.</p></div>
          </article>
        </div>
      </div>
    </section>
  )
}
