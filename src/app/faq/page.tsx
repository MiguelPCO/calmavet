'use client'

import { useState } from 'react'
import Navbar from "@/components/marketing/Navbar"
import Footer from "@/components/marketing/Footer"
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "¿Qué servicios no atendéis en Calmavet?",
    answer: "Calmavet no es un servicio de urgencias 24h ni hospitalización. No realizamos cirugías complejas que requieran anestesia general profunda o monitorización intensiva. Para casos de riesgo vital, siempre recomendamos acudir al hospital de referencia."
  },
  {
    question: "¿Por qué cobráis un anticipo al reservar?",
    answer: "El anticipo nos permite organizar la ruta de nuestros veterinarios de forma eficiente y asegurar la franja horaria para tu mascota. Al ser un servicio a domicilio, el coste logístico es alto y el anticipo garantiza el compromiso de ambas partes."
  },
  {
    question: "¿Lleváis todo el material necesario a casa?",
    answer: "Sí, nuestros veterinarios van equipados con un kit completo: báscula, material de exploración, vacunas refrigeradas, kits de tests rápidos y material para recogida de muestras. Solo necesitamos un espacio tranquilo y bien iluminado."
  },
  {
    question: "¿Cómo recibo el informe de la visita?",
    answer: "Tras finalizar la consulta, el veterinario redacta el informe en nuestra plataforma. Recibirás un enlace por email o WhatsApp para acceder a él, junto con las recetas electrónicas y pautas de tratamiento."
  },
  {
    question: "¿Atendéis a otros animales que no sean perros o gatos?",
    answer: "Principalmente atendemos a perros y gatos. Para animales exóticos (conejos, aves, reptiles), consúltanos previamente para verificar si el veterinario asignado tiene la especialidad necesaria."
  },
  {
    question: "¿Puedo cancelar o cambiar mi cita?",
    answer: "Sí, puedes modificar tu cita hasta 24 horas antes sin coste. Si cancelas con menos de 24 horas de antelación, el anticipo no será reembolsable debido a los gastos de gestión y bloqueo de agenda."
  }
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-verde-calma/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-verde-profundo transition-colors"
      >
        <span className="text-lg font-bold text-carbon">{question}</span>
        {isOpen ? <Minus className="text-verde-calma" /> : <Plus className="text-verde-calma" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gris-piedra leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 bg-arena/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-verde-profundo">Preguntas Frecuentes</h1>
          <p className="text-xl text-gris-piedra">
            Todo lo que necesitas saber sobre nuestras visitas veterinarias a domicilio.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-blanco-calido">
        <div className="max-w-3xl mx-auto bg-verde-profundo rounded-3xl p-10 text-center text-blanco-calido">
          <h2 className="text-2xl font-bold mb-4">¿Aún tienes dudas?</h2>
          <p className="opacity-80 mb-8">Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.</p>
          <button className="bg-blanco-calido text-verde-profundo px-8 py-3 rounded-full font-bold">
            Contactar ahora
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
