export default function Process({ items, aiWorkflow }) {
  return (
    <section className="dark-section process" id="process">
      <div className="section-index"><span>08</span><span>HOW I WORK</span></div>
      <div className="hairline" data-line />
      <div className="process-heading">
        <h2 data-reveal>UNDERSTAND.<br/>BUILD.<br/><span>IMPROVE.</span></h2>
        <div className="process-intro">
          <p data-reveal>I treat delivery as a full lifecycle, from understanding the business process to supporting the product after release.</p>
          {aiWorkflow && (
            <div className="ai-practice" data-reveal>
              <span>AI WORKFLOW</span>
              <strong>{aiWorkflow.label}</strong>
              <p>{aiWorkflow.text}</p>
            </div>
          )}
        </div>
      </div>
      <div className="process-grid">
        {items.map(item => <article key={item.number} data-reveal><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </section>
  )
}
