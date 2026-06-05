import { Breadcrumbs } from "../componentes/Breadcrumb";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      <div className="bg-gradient-to-br from-zinc-900 to-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Tienda de Refacciones y Accesorios
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Las mejores marcas y productos para mantener y mejorar tu auto.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Refacciones Comunes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Balatas de Cerámica",
                desc: "Alta durabilidad y mejor frenado",
                img: "/images/balatas.jpg"
              },
              {
                name: "Bujías de Iridio",
                desc: "Mejor rendimiento y ahorro de combustible",
                img: "/images/bujias.jpg"
              },
              {
                name: "Filtros de Alto Flujo",
                desc: "K&N y marcas premium",
                img: "/images/filtro.jpg"
              },
              {
                name: "Discos de Freno",
                desc: "Originales y deportivos",
                img: "/images/discos.jpg"
              },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all group">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Líquidos y Químicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Aceite Sintético Mobil 1",
                desc: "5W-30 / 5W-40",
                img: "/images/mobil.jpg"
              },
              {
                name: "Anticongelante Prestone",
                desc: "Protección máxima",
                img: "/images/anticongelante.jpg"
              },
              {
                name: "Aditivos para Combustible",
                desc: "Mejora el rendimiento",
                img: "/images/aditivo.jpg"
              },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all group">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Accesorios y Performance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rines Deportivos",
                desc: "18'' - 20'' en diferentes diseños",
                img: "/images/rines.jpg"
              },
              {
                name: "Coilovers Ajustables",
                desc: "Suspensión deportiva",
                img: "/images/coilovers.jpg"
              },
              {
                name: "Sistema de Escape",
                desc: "Catback y headers",
                img: "/images/escape.jpg"
              },
              {
                name: "Luces LED Ambientales",
                desc: "Iluminación interior premium",
                img: "/images/luces.jpg"
              },
              {
                name: "Volantes Deportivos",
                desc: "Estilo racing",
                img: "/images/volante.jpg"
              },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all group border border-purple-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}