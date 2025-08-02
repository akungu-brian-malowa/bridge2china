import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import WhyChina from "./pages/WhyChina";
import ShoppingGuide from "./pages/ShoppingGuide";
import Faq from "./pages/Faq";

function App() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/why-china" element={<WhyChina />} />
          <Route path="/shopping-guide" element={<ShoppingGuide/>}/>
          <Route path="/frequently-asked-questions" element={<Faq/>}/>
        </Routes>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;
