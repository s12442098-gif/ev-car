import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ElectricCars from "./pages/ElectricCars";
import Registration from "./pages/Registration";
import ContactUs from "./pages/ContactUs";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electric-cars" element={<ElectricCars />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}
