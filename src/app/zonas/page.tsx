import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const zones = [
  { name: "Getafe", status: "Operativo", zip: "28901 - 28907" },
  { name: "Leganés", status: "Operativo", zip: "28911 - 28919" },
  { name: "Fuenlabrada", status: "Operativo", zip: "28940 - 28946" },
  { name: "Alcorcón", status: "Operativo", zip: "28921 - 28925" },
  { name: "Móstoles", status: "Operativo", zip: "28931 - 28938" },
  { name: "Pinto", status: "Operativo", zip: "28320" },
  { name: "Valdemoro", status: "Operativo", zip: "28341 - 28343" },
  { name: "Parla", status: "Operativo", zip: "28981 - 28984" },
];

export default function ZonasPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 bg-arena/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-verde-profundo leading-tight">Zonas de cobertura Madrid Sur</h1>
            <p className="text-xl text-gris-piedra">
              Nos centramos en la Zona 0 de Madrid para asegurar que nuestros veterinarios pasen menos tiempo conduciendo y más tiempo cuidando de tu mascota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <input 
                type="text" 
                placeholder="Tu código postal..." 
                className="flex-1 p-4 rounded-full border-2 border-verde-calma/20 outline-none focus:border-verde-profundo"
              />
              <button className="bg-verde-profundo text-blanco-calido px-8 py-4 rounded-full font-bold">Comprobar</button>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square bg-verde-calma/10 rounded-full border-2 border-dashed border-verde-calma/30 flex items-center justify-center text-8xl">
            📍
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-carbon mb-12 text-center">Localidades donde operamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {zones.map((zone) => (
              <div key={zone.name} className="p-6 bg-white rounded-3xl border border-verde-calma/10 shadow-sm text-center">
                <h3 className="text-xl font-bold text-verde-profundo mb-2">{zone.name}</h3>
                <p className="text-xs text-gris-piedra mb-3">{zone.zip}</p>
                <span className="inline-block px-3 py-1 bg-verde-profundo/10 text-verde-profundo text-[10px] font-bold rounded-full uppercase tracking-widest">
                  {zone.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-blanco-calido">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-carbon">¿No ves tu zona?</h2>
          <p className="text-lg text-gris-piedra leading-relaxed">
            Estamos expandiendo nuestra red de veterinarios constantemente. Si vives cerca de estas localidades, déjanos tu email y te avisaremos cuando abramos cobertura en tu barrio.
          </p>
          <button className="text-verde-profundo font-bold border-b-2 border-verde-profundo/20 hover:border-verde-profundo transition-colors">
            Quiero que me aviséis
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
