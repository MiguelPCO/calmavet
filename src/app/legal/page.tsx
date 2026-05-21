import Navbar from "@/components/marketing/Navbar"
import Footer from "@/components/marketing/Footer"

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-blanco-calido">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-verde-profundo">Aviso Legal</h1>
            <p className="text-gris-piedra">Última actualización: Mayo 2026</p>
          </div>

          <div className="prose prose-verde max-w-none text-gris-piedra space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">1. Datos Identificativos</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> [Nombre de la Empresa/Autónomo - Calmavet]</li>
                <li><strong>NIF/CIF:</strong> [Número de identificación]</li>
                <li><strong>Domicilio:</strong> [Dirección física en Madrid Sur]</li>
                <li><strong>Correo electrónico:</strong> hola@calmavet.es</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">2. Usuarios</h2>
              <p>
                El acceso y/o uso de este portal de Calmavet atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">3. Uso del Portal</h2>
              <p>
                calmavet.es proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Calmavet o a sus licenciantes a los que el USUARIO pueda tener acceso.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-carbon">4. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                Calmavet no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
