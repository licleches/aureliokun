import { Breadcrumbs } from "../componentes/Breadcrumb";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      <div className="bg-gradient-to-br from-zinc-900 to-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Desde mantenimiento preventivo hasta modificaciones personalizadas. 
            Calidad y precisión en cada trabajo.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Mantenimiento Preventivo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cambio de aceite y filtros",
              "Alineación, balanceo y rotación de llantas",
              "Afinación mayor y menor del motor",
              "Revisión y cambio de líquidos (frenos, dirección, refrigerante)",
              "Cambio de baterías y sistema eléctrico",
              "Mantenimiento de sistema de frenos"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Mecánica General y Diagnóstico
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Diagnóstico con escáner computarizado (Check Engine)",
              "Reparación de frenos (balatas, discos, rectificación)",
              "Suspensión y dirección (amortiguadores, terminales, rotulas)",
              "Reparación y mantenimiento de motores",
              "Reparación y servicio de transmisiones",
              "Sistema de escape y emisiones",
              "Reparación de sistema eléctrico y electrónico"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Modificaciones y Estilo Custom
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Instalación de suspensiones deportivas (coilovers)",
              "Modificaciones de escape (catback, headers)",
              "Instalación de rines y neumáticos de alto desempeño",
              "Sistemas de audio premium y multimedia",
              "Iluminación LED y faros proyectores",
              "Body kits y piezas aerodinámicas",
              "Detallado profesional y wrapping"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all border border-purple-100 hover:border-purple-300">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-zinc-900 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          ¿Necesitas algún servicio?
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Cotiza tu servicio sin compromiso y agenda tu cita.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/cotizar"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:scale-105 transition-all"
          >
            Cotizar Ahora
          </a>
          <a 
            href="/agendar"
            className="inline-block px-10 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </div>
  );
}