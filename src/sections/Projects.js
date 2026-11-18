import { useState } from 'react'
import { projects, categories } from '../data/projects.js'

const ALL = 'Todos'

export default function Projects() {
  const [active, setActive] = useState(ALL)
  const visible = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <p className="lead">
        {projects.length} aplicaciones web y sistemas de información para organizar datos, procesos y servicios.
      </p>

      <div className="filters" role="group" aria-label="Filtrar proyectos por categoría">
        {[ALL, ...categories].map((name) => {
          const count = name === ALL ? projects.length : projects.filter((p) => p.category === name).length
          return (
            <button
              key={name}
              type="button"
              aria-pressed={active === name}
              onClick={() => setActive(name)}
            >
              {name} <span className="count">{count}</span>
            </button>
          )
        })}
      </div>

      <ul className="project-list">
        {visible.map((project) => (
          <li key={project.title} className="project">
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">Ver proyecto</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
