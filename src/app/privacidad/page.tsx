import Navbar from "@/components/marketing/Navbar"
import Footer from "@/components/marketing/Footer"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-verde-profundo">Política de Privacidad</h1>
            <p className="text-gris-piedra">Última actualización: Mayo 2026</p>
          </div>

          <div className="prose prose-verde max-w-none text-gris-piedra space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">1. Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es Calmavet [Nombre Legal], con domicilio en Madrid y correo electrónico de contacto hola@calmavet.es.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">2. Finalidad del Tratamiento</h2>
              <p>
                Tratamos los datos que nos facilita con el fin de gestionar la reserva de citas veterinarias, la prestación de servicios médicos a domicilio, la gestión administrativa y contable, así como el envío de comunicaciones relacionadas con su mascota.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de sus datos es la ejecución del contrato de prestación de servicios veterinarios que se formaliza al realizar una reserva.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">4. Conservación de Datos</h2>
              <p>
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial y durante los años necesarios para cumplir con las obligaciones legales (especialmente en materia de historial clínico veterinario).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">5. Derechos</h2>
              <p>
                Usted tiene derecho a obtener confirmación sobre si en Calmavet estamos tratando sus datos personales. Tiene derecho a acceder a sus datos, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
