'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  LogOut, 
  ClipboardList,
  Map
} from 'lucide-react'

interface SidebarProps {
  role: 'ADMIN' | 'VET'
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const adminLinks = [
    { name: 'Resumen', href: '/dashboard/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Gestión de Citas', href: '/dashboard/admin/citas', icon: <Calendar size={20} /> },
    { name: 'Veterinarios', href: '/dashboard/admin/vets', icon: <Users size={20} /> },
    { name: 'Zonas y Precios', href: '/dashboard/admin/config', icon: <Map size={20} /> },
  ]

  const vetLinks = [
    { name: 'Mis Citas', href: '/dashboard/vet', icon: <ClipboardList size={20} /> },
    { name: 'Mi Horario', href: '/dashboard/vet/horario', icon: <Calendar size={20} /> },
    { name: 'Perfil Médico', href: '/dashboard/vet/perfil', icon: <Settings size={20} /> },
  ]

  const links = role === 'ADMIN' ? adminLinks : vetLinks

  return (
    <aside className="w-64 bg-carbon text-blanco-calido min-h-screen flex flex-col">
      <div className="p-8">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <div className="w-6 h-6 bg-verde-calma rounded rotate-12" />
          <span>Calmavet</span>
        </Link>
        <p className="text-[10px] text-verde-calma mt-1 font-bold tracking-widest uppercase">
          {role} Panel
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                isActive 
                  ? 'bg-verde-profundo text-blanco-calido' 
                  : 'text-blanco-calido/60 hover:text-blanco-calido hover:bg-white/5'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 text-terracota hover:bg-terracota/10 w-full rounded-xl transition-colors font-medium">
          <LogOut size={20} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
