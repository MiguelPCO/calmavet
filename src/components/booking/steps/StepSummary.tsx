'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, ArrowRight, User, Mail, Phone } from 'lucide-react'

const summarySchema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email no válido'),
  phone: z.string().min(9, 'Teléfono no válido'),
})

type SummaryFormValues = z.infer<typeof summarySchema>

export default function StepSummary() {
  const { nextStep, prevStep, bookingData, updateBookingData, isEndOfLife } = useBookingStore()

  const { register, handleSubmit, formState: { errors } } = useForm<SummaryFormValues>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      name: bookingData.ownerInfo?.name || '',
      email: bookingData.ownerInfo?.email || '',
      phone: bookingData.ownerInfo?.phone || '',
    }
  })

  const onSubmit = (data: SummaryFormValues) => {
    updateBookingData({ ownerInfo: data })
    nextStep()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">Tus datos de contacto</h2>
        <p className="text-gris-piedra text-lg">Necesitamos saber quién eres para confirmar la reserva.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <form id="owner-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-carbon flex items-center gap-2">
                <User size={14} /> Nombre completo
              </label>
              <input 
                {...register('name')}
                placeholder="Ej: María García"
                className="w-full p-4 rounded-xl border-2 border-verde-calma/20 focus:border-verde-profundo outline-none"
              />
              {errors.name && <p className="text-terracota text-xs font-bold">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-carbon flex items-center gap-2">
                <Mail size={14} /> Correo electrónico
              </label>
              <input 
                {...register('email')}
                placeholder="maria@ejemplo.com"
                className="w-full p-4 rounded-xl border-2 border-verde-calma/20 focus:border-verde-profundo outline-none"
              />
              {errors.email && <p className="text-terracota text-xs font-bold">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-carbon flex items-center gap-2">
                <Phone size={14} /> Teléfono móvil
              </label>
              <input 
                {...register('phone')}
                placeholder="600 000 000"
                className="w-full p-4 rounded-xl border-2 border-verde-calma/20 focus:border-verde-profundo outline-none"
              />
              {errors.phone && <p className="text-terracota text-xs font-bold">{errors.phone.message}</p>}
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-arena/20 border-2 border-verde-calma/10 rounded-3xl p-6 sticky top-24 space-y-4">
            <h3 className="font-bold text-verde-profundo flex items-center gap-2 border-b border-verde-calma/20 pb-3">
              Resumen de visita
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gris-piedra">Mascota</span>
                <span className="font-bold text-carbon">{bookingData.petId}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gris-piedra">Servicio</span>
                <span className="font-bold text-carbon">{bookingData.serviceId}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gris-piedra">Fecha</span>
                <span className="font-bold text-carbon text-right">{bookingData.scheduledAt}</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-verde-calma/20">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-carbon">Anticipo</span>
                <span className="text-verde-profundo">35,00€</span>
              </div>
              <p className="text-[10px] text-gris-piedra mt-2 italic">
                * El resto se abonará al finalizar la visita.
              </p>
            </div>
          </div>
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
          form="owner-form"
          type="submit"
          className="bg-verde-profundo text-blanco-calido px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-carbon transition-colors shadow-md"
        >
          Ir al pago seguro
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
