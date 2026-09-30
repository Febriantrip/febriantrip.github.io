export default function Principles({ items }) {
  return (
    <section className="dark-section principles" id="principles">
      <div className="section-index"><span>02</span><span>HOW I THINK</span></div>
      <div className="hairline" data-line />
      <div className="principles-head">
        <div data-reveal>
          <span className="eyebrow">ENGINEERING PRINCIPLES</span>
          <h2>CODE IS THE<br/>LAST <span>STEP.</span></h2>
        </div>
        <p data-reveal>I like polished interfaces, but operational software earns trust somewhere deeper: in the rules, the data, and the moments when a real user is trying to finish real work.</p>
      </div>
      <div className="principles-grid">
        {items.map((item) => (
          <article key={item.number} data-reveal>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
