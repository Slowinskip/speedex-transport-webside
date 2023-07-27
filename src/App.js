import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/layout/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/features/Contact/Contact";
import Company from "./components/views/Company/Company";
import Service from "./components/views/Service/Service";
import ServicesPage from "./components/views/ServicesPage/ServicesPage";
import { QuoteChoising } from "./components/views/QuoteChoising/QuoteChoising";
import QuoteAir from "./components/views/QuoteAir/QuoteAir";
import QuoteOcean from "./components/views/QuoteOcean/QuoteOcean";
import QuoteLand from "./components/views/QuoteLand/QuoteLand";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/quote" element={<QuoteChoising />} />
        <Route path="/quoteAir" element={<QuoteAir />} />
        <Route path="/quoteOcean" element={<QuoteOcean />} />
        <Route path="/quoteLand" element={<QuoteLand />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
