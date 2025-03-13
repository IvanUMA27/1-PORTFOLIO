import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con pasarela de pagos, gestión de inventario y panel de administración",
    image: "https://tse4.mm.bing.net/th?id=OIP.dWXNLlmMGFvIsARREkdjNAHaFR&pid=Api&P=0&h=180?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, recordatorios y colaboración en equipo",
    image: "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-957-pub-monday-com-screenshot-1681992745.png?height=400&width=600",
    tags: ["Next.js", "JavaScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
  {
    title: "Portfolio para Fotógrafo",
    description:
      "Sitio web para mostrar el trabajo de un fotógrafo profesional con galería de imágenes y sistema de reservas",
    image: "https://tse1.mm.bing.net/th?id=OIP.emnqKo-_1Ud47_rEeDwVbwHaFR&pid=Api&P=0&h=180?height=400&width=600",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
  {
    title: "Aplicación de Fitness",
    description: "Applicacion web para seguimiento de entrenamientos, nutrición y progreso físico con análisis de datos",
    image: "https://offsprout.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-03-at-12.51.14-PM.png?height=400&width=600",
    tags: ["React", "Firebase", "tailwindcss"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
  {
    title: "Dashboard Analítico",
    description:
      "Panel de control para visualización de datos empresariales con gráficos interactivos y reportes personalizados",
    image: "https://tse4.mm.bing.net/th?id=OIP.qRDYF0MyCm85qX348De_NgHaEK&pid=Api&P=0&h=180?height=400&width=600",
    tags: ["Vue.js", "D3.js", "Express", "MySQL"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
  {
    title: "Blog Personal",
    description: "Blog con sistema de gestión de contenidos, comentarios y newsletter integrado",
    image: "https://tse1.mm.bing.net/th?id=OIP.xQWUox4Ahxlf8FhPsg_k6gHaF3&pid=Api&P=0&h=180?height=400&width=600",
    tags: ["Gatsby", "GraphQL", "Netlify CMS", "Tailwind CSS"],
    liveUrl: "https://about:blank",
    githubUrl: "https://about:blank",
  },
]

function Projects() {
  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Mis Proyectos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:scale-105 transition-all duration-300 project-card">
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://about:blank" className="btn-secondary" target="_blank" rel="noreferrer">
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

