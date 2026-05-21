'use client'

import Navbar from "@/components/marketing/Navbar"
import Footer from "@/components/marketing/Footer"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 bg-arena/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-verde-profundo">Contacto</h1>
          <p className="text-xl text-gris-piedra">
            ¿Tienes alguna duda o necesitas asistencia personalizada? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-carbon">Estamos a un clic de distancia</h2>
              <p className="text-lg text-gris-piedra leading-relaxed">
                Tanto si eres un tutor con dudas como si eres un veterinario interesado en unirte a nuestra red, utiliza cualquiera de estos canales para contactarnos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-verde-calma/10 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-verde-calma/10 rounded-2xl flex items-center justify-center text-verde-profundo">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-carbon">Llámanos</h3>
                <p className="text-sm text-gris-piedra">L-V de 9:00 a 20:00</p>
                <p className="font-bold text-verde-profundo">+34 600 000 000</p>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-verde-calma/10 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-verde-calma/10 rounded-2xl flex items-center justify-center text-verde-profundo">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-carbon">Escríbenos</h3>
                <p className="text-sm text-gris-piedra">Respondemos en {"<"} 24h</p>
                <p className="font-bold text-verde-profundo">hola@calmavet.es</p>
              </div>
            </div>

            <div className="p-8 bg-verde-profundo/5 rounded-3xl border border-verde-profundo/10 flex gap-6 items-center">
              <MapPin className="text-verde-profundo shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-carbon">Zona de actuación</h3>
                <p className="text-gris-piedra text-sm">Operamos en toda la Zona 0 de Madrid Sur (Getafe, Leganés, Móstoles, Alcorcón...)</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-verde-calma/20 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-carbon">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full p-4 rounded-xl border-2 border-verde-calma/10 focus:border-verde-profundo outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-carbon">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full p-4 rounded-xl border-2 border-verde-calma/10 focus:border-verde-profundo outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-carbon">Asunto</label>
                <select className="w-full p-4 rounded-xl border-2 border-verde-calma/10 focus:border-verde-profundo outline-none transition-all appearance-none bg-white">
                  <option>Duda sobre una reserva</option>
                  <option>Información para veterinarios</option>
                  <option>Incidencia técnica</option>
                  <option>Otros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-carbon">Mensaje</label>
                <textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full p-4 rounded-xl border-2 border-verde-calma/10 focus:border-verde-profundo outline-none transition-all min-h-[150px] resize-none"
                />
              </div>

              <button className="w-full bg-verde-profundo text-blanco-calido py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-carbon transition-colors shadow-md">
                Enviar mensaje
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
