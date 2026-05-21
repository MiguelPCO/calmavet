'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useBookingStore } from '@/store/useBookingStore'
import StepZone from '@/components/booking/steps/StepZone'
import StepPet from '@/components/booking/steps/StepPet'
import StepService from '@/components/booking/steps/StepService'
import StepReason from '@/components/booking/steps/StepReason'
import StepDateTime from '@/components/booking/steps/StepDateTime'
import StepAddress from '@/components/booking/steps/StepAddress'
import StepSummary from '@/components/booking/steps/StepSummary'
import StepPayment from '@/components/booking/steps/StepPayment'
import Navbar from '@/components/marketing/Navbar'

export default function ReservarPage() {
  const { step, isEndOfLife } = useBookingStore()

  const renderStep = () => {
    switch (step) {
      case 1: return <StepZone />
      case 2: return <StepPet />
      case 3: return <StepService />
      case 4: return <StepReason />
      case 5: return <StepDateTime />
      case 6: return <StepAddress />
      case 7: return <StepSummary />
      case 8: return <StepPayment />
      default: return <StepZone />
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-700 ${isEndOfLife ? 'bg-arena/30' : 'bg-blanco-calido'}`}>
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gris-piedra">Paso {step} de 8</span>
            <span className="text-sm font-medium text-verde-profundo">
              {Math.round((step / 8) * 100)}% completado
            </span>
          </div>
          <div className="h-2 w-full bg-verde-calma/20 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full ${isEndOfLife ? 'bg-gris-piedra' : 'bg-verde-profundo'}`}
              initial={{ width: 0 }}
              animate={{ width: `${(step / 8) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
