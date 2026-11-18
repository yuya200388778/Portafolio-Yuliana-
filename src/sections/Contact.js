import { profile } from '../data/profile.js'

export default function Contact() {
  const { email, linkedin, github } = profile.contact
  return (
    <section id="contacto" className="split">
      <h2>Contacto</h2>
      <div className="split-body">
        <p>¿Tienes un proyecto o una oportunidad en mente? Escríbeme.</p>
        <ul className="contact-list">
          {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
          {linkedin && <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
          {github && <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>}
        </ul>
      </div>
    </section>
  )
}
