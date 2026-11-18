import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">Ver proyecto</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
