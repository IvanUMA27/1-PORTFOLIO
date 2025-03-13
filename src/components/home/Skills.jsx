import { CheckCircle } from "lucide-react"

const technicalSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Express", level: 85 },
  { name: "Git", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Unity C#", level: 77 },
  { name: "SQL", level: 70 },
]

const softSkills = [
  "Resolución de problemas",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Gestión del tiempo",
  "Adaptabilidad",
  "Atención al detalle",
  "Pensamiento crítico",
  "Aprendizaje continuo",
]

const technologies = [
  { name: "React", icon: "./src/Images/Skills/react.svg?height=60&width=60&text=React" },
  { name: "Next.js", icon: "./src/Images/Skills/nextjs.svg?height=60&width=60&text=Next" },
  { name: "Node.js", icon: "./src/Images/Skills/node-js.svg?height=60&width=60&text=Node" },
  { name: "mySQL", icon: "./src/Images/Skills/mysql-logo.svg?height=60&width=60&text=Mongo" },
  { name: "Tailwind CSS", icon: "./src/Images/Skills/tailwind-svgrepo-com.svg?height=60&width=60&text=Tailwind" },
]

function Skills() {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">Mis Habilidades</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Habilidades Técnicas</h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Habilidades Blandas</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Tecnologías</h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center tech-icon">
                    <div className="w-12 h-12 mb-2">
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-slate-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

