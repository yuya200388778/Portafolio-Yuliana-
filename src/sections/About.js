import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="sobre-mi" className="split">
      <h2>Sobre mí</h2>
      <div className="split-body">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h3>Conocimientos</h3>
        <ul className="chips">
          {profile.knowledge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
