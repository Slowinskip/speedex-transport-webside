import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/layout/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import Banner from "./components/views/Banner/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Banner /> <Home />
      <Footer />
    </>
  );
}

export default App;
