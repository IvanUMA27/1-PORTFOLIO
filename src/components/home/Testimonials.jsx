const testimonials = [
  {
    quote:
      "Ivan es un desarrollador excepcional. Entregó nuestro proyecto a tiempo y superó todas nuestras expectativas. Su atención al detalle y capacidad para entender nuestras necesidades fue impresionante.",
    author: "María García",
    role: "CEO, TechStart",
    avatar: "https://tse3.mm.bing.net/th?id=OIP.NWZRyPCz97gUesKA0BQrcwHaE8&pid=Api&P=0&h=180?height=60&width=60",
  },
  {
    quote:
      "Trabajar con Ivan fue una experiencia fantástica. Es un profesional muy dedicado que se preocupa por entregar un trabajo de calidad. Definitivamente volveremos a trabajar con él en futuros proyectos.",
    author: "Carlos Rodríguez",
    role: "Director de Marketing, InnovateCorp",
    avatar: "https://c.pxhere.com/photos/c7/42/young_man_portrait_beard_young_man_male_handsome_young_man_handsome-1046502.jpg!d?height=60&width=60",
  },
  {
    quote:
      "Ivan transformó nuestra idea en una aplicación web increíble. Su conocimiento técnico y creatividad nos ayudaron a llevar nuestro negocio al siguiente nivel. Altamente recomendado.",
    author: "Laura Martínez",
    role: "Fundadora, CreativeStudio",
    avatar: "https://www.ieie.eu/wp-content/uploads/2023/02/habitos-de-una-mujer-exitosa-ieie.jpg?height=60&width=60",
  },
]

function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Lo que dicen mis clientes</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
              <p className="text-slate-300 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

