'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { ArrowLeft, CreditCard, Lock } from 'lucide-react'

export default function StepPayment() {
  const { prevStep, resetBooking, isEndOfLife } = useBookingStore()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-verde-profundo">Pago del anticipo</h2>
        <p className="text-gris-piedra text-lg">Introduce tus datos de pago para confirmar la reserva.</p>
      </div>

      <div className="p-8 border-2 border-verde-calma/20 rounded-3xl space-y-8 bg-blanco-calido">
        <div className="flex items-center justify-center h-32 bg-arena/10 rounded-2xl border-2 border-dashed border-verde-calma/30">
          <div className="text-center text-gris-piedra italic">
            <CreditCard size={32} className="mx-auto mb-2 opacity-50" />
            [Stripe Elements Placeholder]
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-gris-piedra justify-center">
          <Lock size={16} />
          Pagos seguros cifrados vía Stripe
        </div>

        <button
          onClick={() => {
            alert('¡Reserva confirmada! Recibirás un correo en breve.')
            resetBooking()
            window.location.href = '/'
          }}
          className="w-full bg-verde-profundo text-blanco-calido p-5 rounded-full font-bold text-xl hover:bg-carbon transition-colors shadow-lg"
        >
          Pagar 35,00€ y confirmar
        </button>
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
