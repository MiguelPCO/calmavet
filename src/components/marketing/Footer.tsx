'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-carbon text-blanco-calido pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-verde-calma rounded-lg rotate-12 flex items-center justify-center">
                <span className="text-blanco-calido -rotate-12">C</span>
              </div>
              <span>Calmavet</span>
            </Link>
            <p className="text-blanco-calido/60 leading-relaxed">
              Veterinaria a domicilio con calma y confianza. Cuidamos de tu mascota en su entorno seguro, eliminando el estrés de las clínicas tradicionales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-verde-calma hover:text-carbon transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-verde-calma hover:text-carbon transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-verde-calma hover:text-carbon transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Explorar</h4>
            <ul className="space-y-4 text-blanco-calido/60">
              <li><Link href="/servicios" className="hover:text-blanco-calido transition-colors">Servicios</Link></li>
              <li><Link href="/como-funciona" className="hover:text-blanco-calido transition-colors">Cómo funciona</Link></li>
              <li><Link href="/zonas" className="hover:text-blanco-calido transition-colors">Zonas de cobertura</Link></li>
              <li><Link href="/precios" className="hover:text-blanco-calido transition-colors">Tarifas claras</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Soporte</h4>
            <ul className="space-y-4 text-blanco-calido/60">
              <li><Link href="/faq" className="hover:text-blanco-calido transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto" className="hover:text-blanco-calido transition-colors">Contacto</Link></li>
              <li><Link href="/legal" className="hover:text-blanco-calido transition-colors">Aviso legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-blanco-calido transition-colors">Privacidad</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-blanco-calido/60">
                <Phone size={18} className="text-verde-calma shrink-0" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex gap-3 text-blanco-calido/60">
                <Mail size={18} className="text-verde-calma shrink-0" />
                <span>hola@calmavet.es</span>
              </li>
              <li className="flex gap-3 text-blanco-calido/60">
                <MapPin size={18} className="text-verde-calma shrink-0" />
                <span>Madrid Sur (Zona 0), España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blanco-calido/40">
          <p>© 2026 Calmavet [nombre provisional]. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <p>Atención Médica Profesional</p>
            <p>Veterinarios Colegiados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
