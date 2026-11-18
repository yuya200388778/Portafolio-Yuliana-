import { profile } from '../data/profile.js'

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="logo">{profile.shortName}</a>
      <nav aria-label="Principal">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}
