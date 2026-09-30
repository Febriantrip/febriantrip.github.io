function TagCloud({ items, startAt = 1 }) {
  return (
    <div className="stack-cloud" data-reveal>
      {items.map((item, index) => (
        <span key={item}>
          <i>{String(startAt + index).padStart(2, '0')}</i>{item}
        </span>
      ))}
    </div>
  )
}

export default function TechStack({ stack, tools, aiWorkflow }) {
  const aiStart = stack.length + tools.length + 1

  return (
    <section className="paper-section stack-section" id="stack">
      <div className="section-index"><span>09</span><span>TECH & TOOLS</span></div>
      <div className="paper-line" data-line />
      <div className="stack-layout">
        <div>
          <span className="eyebrow dark">WHAT I BUILD WITH</span>
          <h2 data-reveal>TECH THAT<br/>GETS <span>SHIPPED.</span></h2>
        </div>
        <div className="stack-groups">
          <div className="stack-group">
            <div className="stack-group-head"><span>01</span><strong>TECH STACK</strong></div>
            <TagCloud items={stack} />
          </div>
          <div className="stack-group">
            <div className="stack-group-head"><span>02</span><strong>DEVELOPMENT TOOLS</strong></div>
            <TagCloud items={tools} startAt={stack.length + 1} />
          </div>
          {aiWorkflow && (
            <div className="stack-group ai-stack-group">
              <div className="stack-group-head"><span>03</span><strong>AI WORKFLOW</strong></div>
              <TagCloud items={aiWorkflow.tools} startAt={aiStart} />
              <p className="stack-note">AI is used as a development accelerator, not a substitute for architecture, business-rule validation, testing, or final engineering judgment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
