'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, CheckCircle2, Heart } from 'lucide-react'

export default function StepService() {
  const { nextStep, prevStep, updateBookingData, bookingData, setEndOfLife } = useBookingStore()

  const services = [
    { 
      id: 'CONSULTA', 
      name: 'Consulta General', 
      price: '45€', 
      desc: 'Revisión completa, diagnóstico y plan de tratamiento.',
      isEOL: false 
    },
    { 
      id: 'VACUNACION', 
      name: 'Vacunación', 
      price: '35€', 
      desc: 'Protección esencial contra enfermedades comunes.',
      isEOL: false 
    },
    { 
      id: 'ANALITICA', 
      name: 'Analíticas y Muestras', 
      price: '50€', 
      desc: 'Recogida de muestras para diagnóstico avanzado.',
      isEOL: false 
    },
    { 
      id: 'EUTANASIA', 
      name: 'Final de Vida / Eutanasia', 
      price: '120€', 
      desc: 'Despedida digna y tranquila en la paz de vuestro hogar.',
      isEOL: true,
      special: true
    },
  ]

  const handleSelect = (service: typeof services[0]) => {
    updateBookingData({ serviceId: service.id })
    setEndOfLife(service.isEOL)
    nextStep()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">¿Qué servicio necesitas?</h2>
        <p className="text-gris-piedra text-lg">
          Precios base orientativos. El total se confirmará antes del pago.
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleSelect(service)}
            className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-left group ${
              service.special 
                ? 'bg-arena/20 border-terracota/20 hover:border-terracota' 
                : 'bg-blanco-calido border-verde-calma/20 hover:border-verde-profundo'
            } ${bookingData.serviceId === service.id ? 'border-verde-profundo ring-2 ring-verde-profundo/10 shadow-md' : ''}`}
          >
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg text-carbon">{service.name}</h3>
                {service.special && <Heart size={16} className="text-terracota fill-terracota" />}
              </div>
              <p className="text-gris-piedra text-sm leading-relaxed">{service.desc}</p>
            </div>
            <div className="text-right">
              <span className="block font-bold text-xl text-verde-profundo">{service.price}</span>
              <span className="text-[10px] uppercase tracking-widest text-gris-piedra font-bold">Desde</span>
            </div>
          </button>
        ))}
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
