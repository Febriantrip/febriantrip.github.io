export default function BusinessDomains({ domains }) {
  return (
    <section className="dark-section domains" id="domains">
      <div className="section-index"><span>04</span><span>ERP & BUSINESS DOMAINS</span></div>
      <div className="hairline" data-line />
      <div className="domains-head">
        <h2 data-reveal>BUSINESS<br/><span>KNOWLEDGE</span></h2>
        <p data-reveal>Software works better when the builder understands the operation behind the screen. These are the domains I have worked with through ERP implementation, support, reporting, and system development.</p>
      </div>
      <div className="domain-cloud" data-reveal>
        {domains.map((domain, index) => <span key={domain}><i>{String(index + 1).padStart(2, '0')}</i>{domain}</span>)}
      </div>
    </section>
  )
}
