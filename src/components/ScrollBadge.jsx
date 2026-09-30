export default function ScrollBadge() {
  return (
    <a className="scroll-badge magnetic" href="#about" aria-label="Scroll to explore">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs><path id="circlePath" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"/></defs>
        <text><textPath href="#circlePath">SCROLL TO EXPLORE · SCROLL TO EXPLORE · </textPath></text>
      </svg>
      <span>↓</span>
    </a>
  )
}
