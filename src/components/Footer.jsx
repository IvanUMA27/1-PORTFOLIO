import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Ivan</span>Dev
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Desarrollador web especializado en crear experiencias digitales únicas y funcionales.
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com"
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 duration-200"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 duration-200"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 duration-200"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                className="text-slate-400 hover:text-primary transition-colors hover:scale-110 duration-200"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <a
              href="mailto:contacto@ivandev.com"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Mail size={18} />
              <span className="font-medium">contacto@ivandev.com</span>
            </a>
            <p className="text-slate-400 mt-4">Disponible para proyectos freelance y oportunidades laborales.</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} IvanDev. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado y desarrollado con ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

