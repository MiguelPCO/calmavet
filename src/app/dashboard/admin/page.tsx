import { 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Citas Pendientes', value: '12', icon: <Calendar />, color: 'text-ambar', bg: 'bg-ambar/10' },
    { name: 'Veterinarios Activos', value: '8', icon: <Users />, color: 'text-verde-profundo', bg: 'bg-verde-profundo/10' },
    { name: 'Ingresos Mes', value: '4.250€', icon: <TrendingUp />, color: 'text-verde-calma', bg: 'bg-verde-calma/10' },
    { name: 'Incidencias', value: '2', icon: <AlertCircle />, color: 'text-terracota', bg: 'bg-terracota/10' },
  ]

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-carbon">Resumen General</h1>
        <p className="text-gris-piedra">Estado actual de Calmavet en la Zona 0.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 bg-white rounded-2xl border border-verde-calma/10 shadow-sm flex items-start gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gris-piedra">{stat.name}</p>
              <p className="text-2xl font-bold text-carbon">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tabla Citas Recientes Simplificada */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-verde-calma/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-verde-calma/10 flex justify-between items-center">
            <h3 className="font-bold text-carbon">Citas Pendientes de Asignación</h3>
            <button className="text-sm text-verde-profundo font-bold hover:underline">Ver todas</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blanco-calido/50 text-[10px] uppercase tracking-widest text-gris-piedra font-bold">
                  <th className="px-6 py-4">Tutor / Mascota</th>
                  <th className="px-6 py-4">Servicio</th>
                  <th className="px-6 py-4">Zona</th>
                  <th className="px-6 py-4">Fecha</th>
                  <th className="px-6 py-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-verde-calma/5">
                {[
                  { tutor: 'María García', pet: 'Luna (Gato)', service: 'Vacunación', zone: 'Getafe', date: 'Mañana 10:00' },
                  { tutor: 'Juan Pérez', pet: 'Thor (Perro)', service: 'Consulta', zone: 'Móstoles', date: 'Hoy 18:30' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-blanco-calido/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-carbon">{row.tutor}</p>
                      <p className="text-xs text-gris-piedra">{row.pet}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-carbon">{row.service}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gris-piedra">{row.zone}</td>
                    <td className="px-6 py-4 text-sm text-carbon font-medium">{row.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-verde-profundo text-blanco-calido px-4 py-2 rounded-full text-xs font-bold hover:bg-carbon transition-colors">
                        Asignar Vet
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Listado Vets Disponibles Quick View */}
        <div className="bg-white rounded-3xl border border-verde-calma/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-verde-calma/10">
            <h3 className="font-bold text-carbon">Veterinarios Online</h3>
          </div>
          <div className="p-6 space-y-6">
            {[
              { name: 'Dr. Alberto Ruiz', zone: 'Getafe, Leganés', status: 'En camino' },
              { name: 'Dra. Elena Sanz', zone: 'Alcorcón, Móstoles', status: 'Disponible' },
              { name: 'Dr. Pablo Marín', zone: 'Pinto, Parla', status: 'En consulta' },
            ].map((vet, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-verde-calma/20 flex items-center justify-center font-bold text-verde-profundo">
                  {vet.name[4]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-carbon">{vet.name}</p>
                  <p className="text-xs text-gris-piedra">{vet.zone}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  vet.status === 'Disponible' ? 'bg-verde-profundo' : 'bg-ambar'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
