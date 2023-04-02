import Navbar from "./Components/Navigasi/Navbar";
import Home from "./Components/Pages/Home/Home";
import Service from "./Components/Pages/Service/Service";
import "./App.css";
import Tempat from "./Components/Pages/Tempat/Tempat";
import Paket from "./Components/Pages/Paket/Paket";
import Hero from "./Components/Pages/Hero/Hero";
import Footer from "./Components/Pages/Footers/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tempat />
      <Service />
      <Paket />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
