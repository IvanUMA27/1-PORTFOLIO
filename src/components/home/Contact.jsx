"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">Contáctame</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">¡Hablemos de tu proyecto!</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                ¿Tienes una idea para un proyecto? ¿Necesitas ayuda con tu sitio web o aplicación? Estoy disponible para
                trabajar en proyectos freelance y colaboraciones. Completa el formulario o contáctame directamente a
                través de los siguientes medios.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-slate-400">contacto@ivandev.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Teléfono</h4>
                    <p className="text-slate-400">+34 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5c2e7]/20 flex items-center justify-center">
                    <MapPin className="text-[#f5c2e7]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Ubicación</h4>
                    <p className="text-slate-400">Malaga, España</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Asunto de tu mensaje"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              {submitError && (
                <div className="p-3 rounded-lg bg-[#f38ba8]/20 border border-[#f38ba8]/30 text-[#f38ba8]">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="p-3 rounded-lg bg-[#a6e3a1]/20 border border-[#a6e3a1]/30 text-[#a6e3a1]">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

