import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agendar from "./pages/Agendar";
import Cotizar from "./pages/Cotizar";
import Home from "./pages/home";
import Products from "./pages/products";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Us";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/products" element={<Products />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
