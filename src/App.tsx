import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa todas tus páginas
import Agendar from "./Pages/Agendar";
import Cotizar from "./Pages/Cotizar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Servicios from "./Pages/Servicios";
import Nosotros from "./Pages/Us";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path="/Agendar" element={<Agendar />} />
        <Route path="/Cotizar" element={<Cotizar />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />


        {/* Ruta para páginas no encontradas (404) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;