'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Clock } from 'lucide-react'

export default function StepDateTime() {
  const { nextStep, prevStep, updateBookingData, bookingData } = useBookingStore()

  // Simplified placeholder logic for date/time
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">¿Cuándo te vendría bien?</h2>
        <p className="text-gris-piedra text-lg">Selecciona el día y la franja horaria para la visita.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border-2 border-verde-calma/20 rounded-3xl text-center space-y-4">
          <CalendarIcon size={32} className="mx-auto text-verde-calma" />
          <p className="font-bold">Calendario interactivo aquí</p>
          <div className="h-40 bg-arena/20 rounded-xl flex items-center justify-center italic text-gris-piedra">
            [Módulo de Calendario]
          </div>
        </div>

        <div className="p-8 border-2 border-verde-calma/20 rounded-3xl text-center space-y-4">
          <Clock size={32} className="mx-auto text-verde-calma" />
          <p className="font-bold">Franjas disponibles</p>
          <div className="grid grid-cols-1 gap-3">
            {['Mañana (09:00 - 14:00)', 'Tarde (16:00 - 20:00)'].map((slot) => (
              <button 
                key={slot}
                onClick={() => {
                  updateBookingData({ scheduledAt: slot })
                  nextStep()
                }}
                className="p-4 rounded-xl border-2 border-verde-calma/10 hover:border-verde-profundo transition-all font-medium text-carbon"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-gris-piedra font-semibold hover:text-verde-profundo transition-colors"
        >
          <ArrowLeft size={20} />
          Volver atrás
        </button>
      </div>
    </div>
  )
}
