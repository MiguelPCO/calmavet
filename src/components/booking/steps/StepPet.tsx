'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, ArrowRight, Dog, Cat, CircleEllipsis } from 'lucide-react'

export default function StepPet() {
  const { nextStep, prevStep, updateBookingData, bookingData } = useBookingStore()

  const petTypes = [
    { id: 'DOG', name: 'Perro', icon: <Dog size={40} /> },
    { id: 'CAT', name: 'Gato', icon: <Cat size={40} /> },
    { id: 'OTHER', name: 'Otro', icon: <CircleEllipsis size={40} /> },
  ]

  const handleSelect = (id: string) => {
    updateBookingData({ petId: id })
    nextStep()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">¿A quién vamos a cuidar?</h2>
        <p className="text-gris-piedra text-lg">
          Selecciona el tipo de mascota que requiere la visita.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {petTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`flex flex-col items-center gap-4 p-8 rounded-3xl border-2 transition-all group ${
              bookingData.petId === type.id 
                ? 'border-verde-profundo bg-verde-profundo/5 shadow-md' 
                : 'border-verde-calma/20 hover:border-verde-calma bg-blanco-calido'
            }`}
          >
            <div className={`transition-colors ${
              bookingData.petId === type.id ? 'text-verde-profundo' : 'text-gris-piedra group-hover:text-verde-profundo'
            }`}>
              {type.icon}
            </div>
            <span className="font-bold text-lg">{type.name}</span>
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
