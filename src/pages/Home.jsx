import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import Skills from "../components/home/Skills"
import Testimonials from "../components/home/Testimonials"
import Contact from "../components/home/Contact"

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home

