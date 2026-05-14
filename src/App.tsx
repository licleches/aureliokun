import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";                  
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <div className=" h-[100dvh] bg-[#EDBB99]">
      <Products />
    </div>
  );
}