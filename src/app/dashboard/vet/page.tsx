import { 
  ClipboardList, 
  MapPin, 
  Clock, 
  History 
} from 'lucide-react'

export default function VetDashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-carbon">Mis Citas</h1>
          <p className="text-gris-piedra">Gestiona tus visitas programadas para hoy.</p>
        </div>
        <div className="flex items-center gap-3 bg-verde-profundo/10 px-4 py-2 rounded-full border border-verde-profundo/20">
          <div className="w-2 h-2 rounded-full bg-verde-profundo animate-pulse" />
          <span className="text-sm font-bold text-verde-profundo">Disponible para nuevas citas</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Cita Siguiente - Destacada */}
        <div className="bg-white rounded-3xl border-2 border-verde-profundo/20 shadow-sm p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-verde-profundo text-blanco-calido px-6 py-2 rounded-bl-2xl font-bold text-xs">
            SIGUIENTE VISITA
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-arena flex items-center justify-center text-3xl">
              🐕
            </div>
            <div>
              <h3 className="text-2xl font-bold text-carbon">Thor</h3>
              <p className="text-gris-piedra font-medium">Consulta General • Golden Retriever</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-gris-piedra">
              <Clock size={18} className="text-verde-calma" />
              <span className="text-sm font-bold">18:30 (Hoy)</span>
            </div>
            <div className="flex items-center gap-3 text-gris-piedra">
              <MapPin size={18} className="text-verde-calma" />
              <span className="text-sm font-bold">Móstoles, Madrid</span>
            </div>
          </div>

          <div className="p-4 bg-blanco-calido rounded-xl border border-verde-calma/10">
            <p className="text-xs font-bold text-gris-piedra uppercase tracking-widest mb-2">Notas del Tutor</p>
            <p className="text-sm text-carbon leading-relaxed italic">
              "Thor parece apático y ha perdido el apetito desde ayer por la tarde. No tiene fiebre aparente."
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-verde-profundo text-blanco-calido py-4 rounded-xl font-bold hover:bg-carbon transition-colors shadow-md">
              Iniciar Ruta
            </button>
            <button className="px-6 border-2 border-verde-calma/20 rounded-xl font-bold text-gris-piedra hover:bg-blanco-calido transition-colors">
              Detalles
            </button>
          </div>
        </div>

        {/* Listado Citas del Día */}
        <div className="bg-white rounded-3xl border border-verde-calma/10 shadow-sm p-8 space-y-6">
          <h3 className="font-bold text-carbon flex items-center gap-2">
            <ClipboardList size={20} className="text-verde-calma" />
            Resto del día
          </h3>
          
          <div className="space-y-4">
            {[
              { time: '20:15', pet: 'Kira (Gato)', service: 'Vacunación Rabia', zone: 'Alcorcón', status: 'CONFIRMADA' },
              { time: 'Mañana 10:00', pet: 'Bobi (Perro)', service: 'Revisión Geriátrica', zone: 'Getafe', status: 'ASIGNADA' },
            ].map((cita, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-verde-calma/10 hover:border-verde-calma/30 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blanco-calido flex items-center justify-center text-xl">
                    {cita.pet.includes('Gato') ? '🐱' : '🐶'}
                  </div>
                  <div>
                    <p className="font-bold text-carbon">{cita.pet}</p>
                    <p className="text-xs text-gris-piedra">{cita.service} • {cita.zone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-carbon mb-1">{cita.time}</p>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    cita.status === 'CONFIRMADA' ? 'bg-verde-profundo/10 text-verde-profundo' : 'bg-ambar/10 text-ambar'
                  }`}>
                    {cita.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-3 text-sm font-bold text-verde-profundo bg-verde-profundo/5 rounded-xl hover:bg-verde-profundo/10 transition-colors">
            Ver Historial Completo
          </button>
        </div>
      </div>
    </div>
  )
}
