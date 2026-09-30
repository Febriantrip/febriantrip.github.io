export default function Contact({ data }) {
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name') || 'Portfolio visitor'
    const email = form.get('email') || ''
    const project = form.get('project') || ''
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject / message:\n${project}`)
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact dark-section" id="contact">
      <div className="section-index"><span>10</span><span>CONTACT</span></div>
      <div className="hairline" data-line />
      <div className="contact-grid">
        <div className="contact-copy">
          <h2 data-reveal>HAVE A SYSTEM<br/>TO <span>BUILD?</span><br/>LET'S TALK.</h2>
          <p data-reveal>ERP, internal systems, business websites, integrations, or operational tools. Tell me what needs to work better.</p>
          <div className="contact-actions" data-reveal>
            <a href={`mailto:${data.email}`} className="mail-link magnetic">{data.email}<span>↗</span></a>
            <a href={data.whatsapp} target="_blank" rel="noreferrer" className="mail-link magnetic">WHATSAPP<span>↗</span></a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="mail-link magnetic">LINKEDIN<span>↗</span></a>
          </div>
        </div>
        <form className="contact-form" data-reveal onSubmit={submit}>
          <label><span>YOUR NAME</span><input name="name" placeholder="Name" required /></label>
          <label><span>EMAIL</span><input name="email" type="email" placeholder="you@email.com" required /></label>
          <label><span>PROJECT / MESSAGE</span><textarea name="project" rows="4" placeholder="Tell me what you want to build" required /></label>
          <button className="magnetic" type="submit">CREATE EMAIL <span>↗</span></button>
          <small>Frontend-only form. Submitting opens your email app with the message prepared.</small>
        </form>
      </div>
      <footer>
        <span>© 2026 {data.fullName}</span>
        <div>{data.socials.map(s=><a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{s.label}</a>)}</div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </section>
  )
}
