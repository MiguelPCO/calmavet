import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const services = [
  {
    title: "Consulta General",
    slug: "consulta-general",
    price: "45€",
    description: "Evaluación completa de salud, diagnóstico de patologías comunes y asesoramiento nutricional o de comportamiento.",
    features: ["Exploración física detallada", "Revisión de constantes", "Plan de salud personalizado"],
    icon: "🩺"
  },
  {
    title: "Vacunación",
    slug: "vacunacion",
    price: "35€",
    description: "Protocolos de vacunación adaptados a la edad, estilo de vida y normativa vigente para perros y gatos.",
    features: ["Vacunas polivalentes", "Rabia y Leucemia", "Recordatorios automáticos"],
    icon: "💉"
  },
  {
    title: "Analíticas",
    slug: "analiticas",
    price: "55€",
    description: "Recogida de muestras de sangre, orina o heces en la comodidad de tu hogar para reducir el estrés del animal.",
    features: ["Bioquímica y Hemograma", "Tests de enfermedades infecciosas", "Resultados en 24-48h"],
    icon: "🔬"
  },
  {
    title: "Final de Vida",
    slug: "final-de-vida",
    price: "120€",
    description: "Acompañamiento empático y eutanasia humanitaria en casa, permitiendo una despedida íntima y sin miedo.",
    features: ["Protocolo de sedación sin dolor", "Gestión de incineración opcional", "Entorno familiar y tranquilo"],
    icon: "🤍"
  },
  {
    title: "Certificados",
    slug: "certificados",
    price: "40€",
    description: "Emisión de certificados oficiales de salud para viajes, cambios de titularidad o trámites administrativos.",
    features: ["Certificados nacionales", "Pasaporte europeo", "Validación oficial"],
    icon: "📜"
  },
  {
    title: "Seguimiento Crónicos",
    slug: "seguimiento",
    price: "40€",
    description: "Control periódico de animales con enfermedades crónicas como diabetes, artrosis o insuficiencia renal.",
    features: ["Ajuste de medicación", "Control de peso", "Apoyo continuo al tutor"],
    icon: "🐾"
  }
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-arena/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-verde-profundo mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gris-piedra max-w-2xl mx-auto">
            Atención veterinaria profesional con el equipo necesario para cuidar de tu mascota sin que tenga que salir de su zona de confort.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-white p-8 rounded-3xl border border-verde-calma/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-verde-profundo mb-3">{service.title}</h2>
                <p className="text-gris-piedra mb-6 flex-1 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-carbon font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-verde-calma" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-verde-calma/10">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gris-piedra font-bold block">Desde</span>
                    <span className="text-2xl font-bold text-verde-profundo">{service.price}</span>
                  </div>
                  <button className="bg-verde-profundo text-blanco-calido px-6 py-3 rounded-full text-sm font-bold hover:bg-carbon transition-colors">
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviso Urgencias */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-ambar/5 border-2 border-dashed border-ambar/20 p-8 rounded-3xl text-center">
          <h3 className="text-lg font-bold text-carbon mb-2">⚠️ Recordatorio de Seguridad</h3>
          <p className="text-gris-piedra">
            Nuestros servicios están diseñados para atención programada y medicina preventiva. 
            <strong> En caso de urgencia vital, acude inmediatamente al hospital 24h más cercano.</strong>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
