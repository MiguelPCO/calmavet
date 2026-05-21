'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useBookingStore } from '@/store/useBookingStore'
import { ArrowRight } from 'lucide-react'

const zoneSchema = z.object({
  postalCode: z.string().length(5, 'El código postal debe tener 5 dígitos').regex(/^\d+$/, 'Solo números'),
})

type ZoneFormValues = z.infer<typeof zoneSchema>

export default function StepZone() {
  const { updateBookingData, nextStep, bookingData } = useBookingStore()
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ZoneFormValues>({
    resolver: zodResolver(zoneSchema),
    defaultValues: {
      postalCode: bookingData.postalCode || '',
    }
  })

  const onSubmit = (data: ZoneFormValues) => {
    // Aquí se validaría contra la base de datos de zonas permitidas
    updateBookingData({ postalCode: data.postalCode })
    nextStep()
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">¿Dónde se encuentra tu mascota?</h2>
        <p className="text-gris-piedra text-lg">
          Primero comprobaremos si tenemos veterinarios disponibles en tu zona.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <label htmlFor="postalCode" className="block text-sm font-semibold text-carbon">
            Código Postal
          </label>
          <input
            {...register('postalCode')}
            type="text"
            id="postalCode"
            placeholder="Ej: 28901"
            className={`w-full p-4 rounded-2xl border-2 transition-all outline-none text-xl tracking-widest ${
              errors.postalCode 
                ? 'border-terracota bg-terracota/5' 
                : 'border-verde-calma/30 focus:border-verde-profundo'
            }`}
          />
          {errors.postalCode && (
            <p className="text-terracota text-sm font-medium">{errors.postalCode.message}</p>
          )}
          <p className="text-sm text-gris-piedra italic">
            Zona 0: Getafe, Leganés, Fuenlabrada, Alcorcón, Móstoles, Pinto, Valdemoro, Parla.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-verde-profundo text-blanco-calido p-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-carbon transition-colors shadow-md disabled:opacity-50"
        >
          Comprobar disponibilidad
          <ArrowRight size={20} />
        </button>
      </form>
    </div>
  )
}
