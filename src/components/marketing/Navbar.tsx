'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Cómo funciona', href: '/como-funciona' },
    { name: 'Zonas', href: '/zonas' },
    { name: 'Para veterinarios', href: '/para-veterinarios' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm border-b border-forest/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl text-forest flex items-center gap-2 font-heading">
          <div className="w-8 h-8 bg-eucalyptus rounded-lg flex items-center justify-center">
            <span className="text-forest text-lg">C</span>
          </div>
          <span className="mt-1">Calmavet</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/reservar">
            <Button variant="primary" className="px-6 py-2">Reservar visita</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory shadow-xl border-t border-forest/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xl text-charcoal py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/reservar"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <Button variant="primary" className="w-full">Reservar visita</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
