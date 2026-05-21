import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Check } from "lucide-react";

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-verde-profundo leading-tight">Tarifas claras y honestas</h1>
          <p className="text-xl text-gris-piedra max-w-2xl mx-auto">
            Sin sorpresas finales. El precio incluye el desplazamiento del veterinario a tu hogar dentro de nuestra zona de cobertura.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-verde-calma/20 shadow-sm flex flex-col">
            <h2 className="text-2xl font-bold text-carbon mb-2">Consulta Puntual</h2>
            <p className="text-gris-piedra text-sm mb-8">Ideal para dudas o revisiones rápidas.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-carbon">45€</span>
              <span className="text-gris-piedra text-sm font-medium">/visita</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {["Desplazamiento incluido", "Revisión física completa", "Informe médico digital", "Recetas electrónicas"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-carbon">
                  <Check size={18} className="text-verde-calma shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-verde-profundo text-verde-profundo font-bold hover:bg-verde-profundo/5 transition-colors">
              Reservar ahora
            </button>
          </div>

          {/* Plan Recomendado */}
          <div className="bg-verde-profundo p-10 rounded-[2.5rem] shadow-xl flex flex-col scale-105 relative z-10">
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-terracota text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Más Popular
            </div>
            <h2 className="text-2xl font-bold text-blanco-calido mb-2 text-blanco-calido">Consulta + Vacuna</h2>
            <p className="text-blanco-calido/60 text-sm mb-8">La mejor opción para el mantenimiento anual.</p>
            <div className="mb-10 text-blanco-calido">
              <span className="text-5xl font-black">70€</span>
              <span className="text-blanco-calido/60 text-sm font-medium">/visita</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Todo lo del plan puntual",
                "Vacuna rabia o polivalente",
                "Recordatorios de refuerzos",
                "Soporte vía chat 48h post-visita"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-blanco-calido">
                  <Check size={18} className="text-verde-calma shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full bg-blanco-calido text-verde-profundo font-bold hover:bg-arena transition-colors">
              Elegir este plan
            </button>
          </div>

          {/* Plan Completo */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-verde-calma/20 shadow-sm flex flex-col">
            <h2 className="text-2xl font-bold text-carbon mb-2">Chequeo Completo</h2>
            <p className="text-gris-piedra text-sm mb-8">Recomendado para mascotas senior.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-carbon">110€</span>
              <span className="text-gris-piedra text-sm font-medium">/visita</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Todo lo del plan anual",
                "Analítica de sangre básica",
                "Control de constantes senior",
                "Plan nutricional específico"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-carbon">
                  <Check size={18} className="text-verde-calma shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-verde-profundo text-verde-profundo font-bold hover:bg-verde-profundo/5 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
