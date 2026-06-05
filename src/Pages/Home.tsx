import { Breadcrumbs } from "../Componentes/Breadcrumb";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#C026D3_0%,transparent_70%)] opacity-30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <img 
            src="/logotype.png" 
            alt="Tokyo Customs" 
            className="w-[520px] md:w-[680px] mx-auto mb-8 drop-shadow-[0_0_40px_#C026D3]"
          />
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-tight">
            Especialistas en modificaciones, rendimiento y estilo único.<br />
            Transformamos tu visión en realidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/cotizar"
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/50"
            >
              Cotizar Ahora
            </Link>
            <Link 
              to="/agendar"
              className="px-12 py-5 border-2 border-white text-white rounded-2xl font-semibold text-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              Agendar Cita
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce text-4xl">
          ↓
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center bg-white">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Bienvenido a Tokyo Customs
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Con pasión por los autos y atención al detalle, creamos vehículos únicos. 
          Calidad, precisión y estilo japonés futurista.
        </p>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nuestros Servicios Principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Performance Tuning", 
                desc: "Mejoras de motor, suspensión y escape.", 
                img: "/images/body1.jpg"     
              },
              { 
                title: "Custom Body Kits", 
                desc: "Diseños agresivos y aerodinámicos.", 
                img: "/images/body2.jpg"              
              },
              { 
                title: "Interior & Audio", 
                desc: "Personalización premium del interior.", 
                img: "/images/body3.jpg"         
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explora Tokyo Customs
          </h2>
          <p className="text-gray-600 mb-12 text-lg">Descubre todo lo que tenemos para ti</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/nosotros" className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-transparent hover:border-purple-200">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Nosotros</h3>
              <p className="text-gray-500 text-sm">Conoce nuestra historia</p>
            </Link>

            <Link to="/servicios" className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-transparent hover:border-purple-200">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Servicios</h3>
              <p className="text-gray-500 text-sm">Ver todos los servicios</p>
            </Link>

            <Link to="/products" className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-transparent hover:border-purple-200">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Productos</h3>
              <p className="text-gray-500 text-sm">Accesorios y partes</p>
            </Link>

            <Link to="/cotizar" className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-transparent hover:border-purple-200">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Cotizar</h3>
              <p className="text-gray-500 text-sm">Solicita presupuesto</p>
            </Link>

            <Link to="/agendar" className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-transparent hover:border-purple-200">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Agendar Cita</h3>
              <p className="text-gray-500 text-sm">Reserva tu cita</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6 text-white">
          ¿Listo para transformar tu auto?
        </h2>
        <Link 
          to="/cotizar"
          className="inline-block px-14 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-2xl rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          SOLICITAR COTIZACIÓN GRATIS
        </Link>
      </div>
    </div>
  );
}