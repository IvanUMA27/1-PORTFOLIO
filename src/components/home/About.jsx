import { FileText, Award, Calendar } from "lucide-react"

function About() {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">Sobre Mí</h2>

       
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="profile neon-border">
            <div className="relative">
              <img
                src="src/Images/profile.png?height=600&width=800"
                alt="Ivan Developer"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-3 gradient-text">¿Quién soy?</h3>
              <p className="text-slate-300 leading-relaxed">
                Soy un desarrollador web full stack apasionado por crear experiencias digitales excepcionales. Con más
                de 5 años de experiencia en el desarrollo web, me especializo en construir aplicaciones modernas,
                rápidas y accesibles utilizando las últimas tecnologías.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-3 gradient-text-blue">Mi Trayectoria</h3>
              <ul className="space-y-4 text-slate-300">

                <li className="flex items-start">
                  <Calendar className="mr-3 mt-1 flex-shrink-0 text-secondary" size={20} />
                  <div>
                    <span className="font-bold text-white">2024 - Presente</span>
                    <p>Desarrollador Web Full-Stack Freelance</p>
                  </div>
                </li>
                
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-3 gradient-text">Educación y Certificaciones</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <Award className="mr-3 mt-1 flex-shrink-0 text-primary" size={20} />
                  <div>
                    <span className="font-bold text-white">Ingeniería en Sistemas Computacionales</span>
                    <p>Universidad Tecnológica, 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-3 mt-1 flex-shrink-0 text-primary" size={20} />
                  <div>
                    <span className="font-bold text-white">Certificación en Desarrollo Web Full Stack</span>
                    <p>Bootcamp Tech, 2023</p>
                  </div>
                </li>
              </ul>
            </div>

            <a href="/cv.pdf" className="btn-secondary inline-flex items-center gap-2">
              <FileText size={18} />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

