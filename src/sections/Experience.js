import { profile } from '../data/profile.js'

export default function Experience() {
  const { company, area, summary, skills } = profile.experience
  return (
    <section id="experiencia" className="split">
      <h2>Experiencia</h2>
      <div className="split-body">
        <h3 className="job">{company}</h3>
        <p className="job-area">{area}</p>
        <p>{summary}</p>
        <h3>Competencias fortalecidas</h3>
        <ul className="chips">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
