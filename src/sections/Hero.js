import { profile } from '../data/profile.js'
import photo from '../assets/yuliana.jpg'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <p className="hero-role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#proyectos" className="button">Ver proyectos</a>
          <a href="#contacto" className="button button-ghost">Contactar</a>
        </div>
      </div>
      <figure className="portrait">
        <img
          src={photo}
          alt={`Retrato de ${profile.name}`}
          width="800"
          height="1067"
          fetchpriority="high"
        />
      </figure>
    </section>
  )
}
