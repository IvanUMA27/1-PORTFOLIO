import { Code, Layout, Database, Smartphone, Zap, Search } from "lucide-react"

const services = [
  {
    title: "Desarrollo Frontend",
    description: "Interfaces modernas y responsivas con React, Next.js y las últimas tecnologías web",
    icon: <Layout className="w-10 h-10 text-[#c1e5b3]" />,
    color: "border-primary/30 hover:border-[#c1e5b3]/60",
    bg: "bg-[#c1e5b3]/10",
  },
  {
    title: "Desarrollo Backend",
    description: "APIs robustas y escalables con Node.js, Express y SQL",
    icon: <Database className="w-10 h-10 text-[#da6161]" />,
    color: "border-secondary/30 hover:border-[#da6161]/60",
    bg: "bg-[#da6161]/10",
  },
  {
    title: "Desarrollo Full Stack",
    description: "Soluciones completas desde el frontend hasta el backend con arquitecturas modernas",
    icon: <Code className="w-10 h-10 text-[#89dceb]" />,
    color: "border-[#89dceb]/30 hover:border-[#89dceb]/60",
    bg: "bg-[#89dceb]/10",
  },
]

function Services() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="section-title mb-16">Mis Servicios</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 transition-all duration-300 backdrop-blur-sm border ${service.color} hover:scale-105 hover:shadow-lg ${service.bg}`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

