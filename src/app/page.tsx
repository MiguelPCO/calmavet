import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Footer from "@/components/marketing/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Home as HomeIcon, CreditCard, Stethoscope, Syringe, Bug, Activity, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-8 bg-white border-y border-forest/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-forest font-medium">
            <ShieldCheck size={24} className="text-sage" />
            Veterinarios colegiados
          </div>
          <div className="flex items-center gap-3 text-forest font-medium">
            <HomeIcon size={24} className="text-sage" />
            Atención en casa
          </div>
          <div className="flex items-center gap-3 text-forest font-medium">
            <CreditCard size={24} className="text-sage" />
            Pago seguro
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-forest mb-4">Cuidar de tu mascota en casa es sencillo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-eucalyptus -z-10"></div>
            
            {[
              { n: 1, t: "Elige tu zona", d: "Comprueba si hay veterinarios cerca." },
              { n: 2, t: "Selecciona el servicio", d: "Consulta, vacunación o revisión." },
              { n: 3, t: "Reserva una franja", d: "Elige el día y hora ideal." },
              { n: 4, t: "El veterinario acude", d: "Atención en su entorno seguro." },
              { n: 5, t: "Recibe seguimiento", d: "Indicaciones y próximos pasos." }
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-sage text-forest flex items-center justify-center text-2xl font-bold mb-6 font-heading border-4 border-ivory">
                  {step.n}
                </div>
                <h4 className="font-bold text-lg text-charcoal mb-2">{step.t}</h4>
                <p className="text-charcoal/70 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-forest mb-4">Servicios veterinarios a domicilio</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Atención programada para el cuidado diario, preventivo y de seguimiento de tu mascota.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Stethoscope size={28}/>, title: "Consulta general", desc: "Para revisar síntomas, resolver dudas de salud o hacer seguimiento básico." },
              { icon: <Syringe size={28}/>, title: "Vacunación", desc: "Vacunas para perros y gatos sin desplazamientos ni sala de espera." },
              { icon: <Bug size={28}/>, title: "Desparasitación", desc: "Prevención adaptada a la edad, peso y estilo de vida de tu mascota." },
              { icon: <Activity size={28}/>, title: "Revisión geriátrica", desc: "Atención tranquila para mascotas mayores en su propio entorno." },
              { icon: <HeartPulse size={28}/>, title: "Analíticas y muestras", desc: "Recogida de muestras y coordinación con laboratorio cuando sea necesario." }
            ].map((service, i) => (
              <Card key={i} className="flex flex-col h-full border border-forest/5 hover:border-sage transition-colors">
                <div className="w-14 h-14 bg-eucalyptus rounded-full flex items-center justify-center text-forest mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading text-forest mb-3">{service.title}</h3>
                <p className="text-charcoal/80 mb-8 flex-grow">{service.desc}</p>
                <Link href="/reservar" className="text-forest font-semibold flex items-center gap-2 hover:text-terracotta transition-colors">
                  Reservar <span className="text-xl">→</span>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button variant="outline">Ver todos los servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Zonas y CTA Final */}
      <section className="py-24 px-6 bg-forest text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-ivory mb-6">Bienestar que se siente en casa.</h2>
          <p className="text-xl text-eucalyptus mb-12 max-w-2xl mx-auto">
            Empezamos en Madrid Sur. Comprueba si llegamos a tu código postal y dale a tu mascota la atención que merece sin estrés.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservar" className="w-full sm:w-auto">
              <Button variant="accent" className="w-full text-lg px-10 py-4">
                Comprobar zona y reservar
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
