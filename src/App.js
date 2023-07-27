import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/layout/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/features/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
