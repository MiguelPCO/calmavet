'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function StepReason() {
  const { nextStep, prevStep, updateBookingData, bookingData, isEndOfLife } = useBookingStore()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">
          {isEndOfLife ? 'Cuéntanos vuestra situación' : '¿Cuál es el motivo de la consulta?'}
        </h2>
        <p className="text-gris-piedra text-lg">
          {isEndOfLife 
            ? 'Entendemos que es un momento difícil. Cuéntanos cómo podemos ayudaros mejor.' 
            : 'Cuéntanos qué le ocurre a tu mascota para preparar mejor la visita.'}
        </p>
      </div>

      <div className="space-y-6">
        <textarea
          value={bookingData.reason || ''}
          onChange={(e) => updateBookingData({ reason: e.target.value })}
          placeholder={isEndOfLife ? 'Escribe aquí...' : 'Ej: Mi gato no come bien desde ayer y está apático.'}
          className="w-full min-h-[200px] p-6 rounded-3xl border-2 border-verde-calma/30 focus:border-verde-profundo outline-none transition-all resize-none text-lg"
        />

        {!isEndOfLife && (
          <div className="p-4 bg-ambar/10 rounded-2xl flex gap-4 border border-ambar/20">
            <span className="text-2xl">⚠️</span>
            <p className="text-sm text-carbon">
              Si detectamos que necesita atención urgente, te orientaremos antes de confirmar. 
              <strong> Calmavet no atiende urgencias vitales.</strong>
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-8">
          <button
            onClick={prevStep}
            className="flex items-center gap-2 text-gris-piedra font-semibold hover:text-verde-profundo transition-colors"
          >
            <ArrowLeft size={20} />
            Volver atrás
          </button>
          
          <button
            onClick={nextStep}
            disabled={!bookingData.reason?.trim()}
            className="bg-verde-profundo text-blanco-calido px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-carbon transition-colors shadow-md disabled:opacity-50"
          >
            Siguiente
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
