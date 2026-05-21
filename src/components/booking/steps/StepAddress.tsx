'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'

export default function StepAddress() {
  const { nextStep, prevStep, updateBookingData, bookingData } = useBookingStore()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">¿Dónde debemos acudir?</h2>
        <p className="text-gris-piedra text-lg">Confirma la dirección exacta para que el veterinario llegue sin problemas.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-carbon">Dirección completa</label>
            <input 
              type="text"
              value={bookingData.address || ''}
              onChange={(e) => updateBookingData({ address: e.target.value })}
              placeholder="Calle, número, portal..."
              className="w-full p-4 rounded-2xl border-2 border-verde-calma/30 focus:border-verde-profundo outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-carbon">Instrucciones adicionales (Opcional)</label>
            <textarea 
              value={bookingData.accessInstructions || ''}
              onChange={(e) => updateBookingData({ accessInstructions: e.target.value })}
              placeholder="Ej: El telefonillo no funciona bien, por favor llama al llegar."
              className="w-full p-4 rounded-2xl border-2 border-verde-calma/30 focus:border-verde-profundo outline-none min-h-[100px]"
            />
          </div>
        </div>

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
            disabled={!bookingData.address?.trim()}
            className="bg-verde-profundo text-blanco-calido px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-carbon transition-colors shadow-md disabled:opacity-50"
          >
            Continuar al resumen
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
