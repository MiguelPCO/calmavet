import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const steps = [
  {
    number: "01",
    title: "Comprueba tu cobertura",
    description: "Introduce tu código postal. Operamos en la Zona 0 (Madrid Sur) para garantizar tiempos de respuesta óptimos y menos estrés en el transporte.",
    icon: "📍"
  },
  {
    number: "02",
    title: "Elige tu momento",
    description: "Selecciona el servicio y la franja horaria que mejor te convenga. Sin esperas en salas abarrotadas.",
    icon: "📅"
  },
  {
    number: "03",
    title: "Preparación de la visita",
    description: "Te enviaremos consejos para preparar a tu mascota antes de nuestra llegada y que la experiencia sea 100% positiva.",
    icon: "✨"
  },
  {
    number: "04",
    title: "Consulta en calma",
    description: "El veterinario llega a tu casa. Realizamos la atención en el salón o donde tu mascota se sienta más segura.",
    icon: "🏠"
  },
  {
    number: "05",
    title: "Seguimiento digital",
    description: "Recibe el informe médico, recetas y consejos post-visita directamente en tu móvil o email.",
    icon: "📱"
  }
];

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 bg-verde-profundo text-blanco-calido">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blanco-calido">La veterinaria del futuro es en casa</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Eliminamos el estrés del transporte y las salas de espera para que tu mascota reciba una atención humana, profesional y cercana.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {steps.map((step, i) => (
            <div key={step.number} className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-4">
                <span className="text-5xl font-black text-verde-calma/30 block">{step.number}</span>
                <h2 className="text-3xl font-bold text-verde-profundo">{step.title}</h2>
                <p className="text-lg text-gris-piedra leading-relaxed">{step.description}</p>
              </div>
              <div className="w-48 h-48 bg-arena rounded-full flex items-center justify-center text-6xl shadow-inner shrink-0">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blanco-calido px-6">
        <div className="max-w-7xl mx-auto bg-verde-profundo rounded-[3rem] p-12 md:p-20 text-center text-blanco-calido">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para una visita sin miedos?</h2>
          <button className="bg-terracota text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform">
            Reservar mi primera cita
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
