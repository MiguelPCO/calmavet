import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Footer from "@/components/marketing/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Home as HomeIcon, CreditCard, Stethoscope, Syringe, Bug, Activity } from "lucide-react";
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

      {/* Placeholder for the rest of the page to avoid errors in this step */}
      <div id="rest-of-page"></div>
      
      <Footer />
    </main>
  );
}
