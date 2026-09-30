export default function About({ data }) {
  return (
    <section className="dark-section about" id="about">
      <div className="section-index"><span>01</span><span>ABOUT ME</span></div>
      <div className="hairline" data-line />
      <div className="about-grid">
        <div className="portrait-frame portrait-photo-frame" data-reveal>
          <img
            className="portrait-photo"
            src="https://avatars.githubusercontent.com/u/194328118?v=4"
            alt="Febrian Tri Prasmanto"
            loading="lazy"
          />
          <div className="portrait-photo-shade" aria-hidden="true" />
          <span className="portrait-label">CODE / BUSINESS / OPERATIONS</span>
        </div>
        <div className="about-copy">
          <h3 data-reveal>{data.intro}</h3>
          <div className="about-paragraphs" data-reveal>{data.about.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="stats" data-reveal>{data.stats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div>
        </div>
      </div>
    </section>
  )
}
