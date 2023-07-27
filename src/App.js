import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/layout/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/features/Contact/Contact";
import Company from "./components/views/Company/Company";
import Service from "./components/views/Service/Service";
import ServicesPage from "./components/views/ServicesPage/ServicesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
