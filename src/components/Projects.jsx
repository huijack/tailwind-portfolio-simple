import ProjectsCard from './ProjectsCard'
import SectionTitle from './SectionTitle'
import { useFetchProjects } from '../fetchProjects'

const Projects = () => {
  const { isLoading, projects } = useFetchProjects()

  if (isLoading) {
    return (
      <section className="py-20">
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
