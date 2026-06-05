import { Breadcrumbs } from "../Componentes/Breadcrumb";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      <div className="bg-gradient-to-br from-zinc-900 to-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Sobre Tokyo Customs
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Más que un taller, somos apasionados por transformar autos en obras de arte.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Tokyo Customs nació en 2022 con una misión clara: llevar el estilo japonés de personalización 
              y el tuning de alto rendimiento a Sonora, México.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fundado por entusiastas de los autos, creemos que cada vehículo tiene un alma que merece 
              ser resaltada. Combinamos precisión técnica, creatividad y las mejores herramientas para 
              entregar resultados que superen las expectativas.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/taller.jpg"         
              alt="Taller Tokyo Customs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegir Tokyo Customs?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Profesionalismo", desc: "Mecánicos certificados y con amplia experiencia en modificaciones." },
              { title: "Transparencia", desc: "Presupuestos claros, sin sorpresas. Te explicamos todo paso a paso." },
              { title: "Calidad Premium", desc: "Usamos repuestos y materiales de las mejores marcas." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Nuestro Equipo</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Técnicos apasionados y altamente capacitados que comparten tu misma pasión por los autos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Kim Lluvia", 
                role: "Especialista en Motor y Tuning", 
                experience: "+8 años de experiencia",
                img: "/images/kim.jpeg"     
              },
              { 
                name: "Kenji Nakamura", 
                role: "Especialista en Suspensión y Frenos", 
                experience: "+6 años de experiencia",
                img: "/images/nos1.jpg"     
              },
              { 
                name: "Han Lue", 
                role: "Especialista en Electrónica y Diagnóstico", 
                experience: "+7 años de experiencia",
                img: "/images/nos2.jpg"     
              },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow">
                <img 
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-purple-600">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Visítanos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Ubicación</h3>
            <p className="text-gray-600 mb-6">
              Blvd. Luis Donaldo Colosio 1234, Col. Centro<br />
              Hermosillo, Sonora, México
            </p>
            <p className="text-gray-600">
              Horario:<br />
              Lunes a Viernes: 8:00 am - 6:00 pm<br />
              Sábado: 9:00 am - 2:00 pm
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center border">
            <p className="text-gray-500 text-center">
              Aquí irá el mapa de Google Maps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}