function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-sm font-medium text-slate-300">Desarrollador Web Full Stack</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              Hola, soy <span className="gradient-text">Ivan</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white/90">
              Transformo ideas en experiencias digitales
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Especializado en desarrollo web moderno, creando aplicaciones atractivas, funcionales y optimizadas para
              ofrecer la mejor experiencia al usuario.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary group">
                <span className="relative z-10">Ver proyectos</span>
              </a>

              <a href="#contact" className="btn-outline group">
                <span className="relative z-10">Contáctame</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20"></div>
              <div className="full h-full rounded-full">
                <img
                  src="src/Images/profile.png?height=320&width=320"
                  alt="Ivan Developer"
                  className="border-4 rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-slate-400 mb-2">Descubre más</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

