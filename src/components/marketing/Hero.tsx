'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.1 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.8'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-ivory"
    >
      <div className="max-w-4xl mx-auto z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-forest leading-[1.1] mb-6"
        >
          Cuidado veterinario en la comodidad de tu hogar
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Atención veterinaria profesional, con calma y confianza. Reserva una visita para tu perro o gato con veterinarios colegiados.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/reservar" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full text-lg px-8 py-4">
              Reservar visita <span className="ml-2">→</span>
            </Button>
          </Link>
          <Link href="/para-veterinarios" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full text-lg px-8 py-4">
              Soy veterinario
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
