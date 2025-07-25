import React from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import Footer from "./Pages/Footer";
import WebIntern from "./Components/WebIntern"
import BackendIntern from "./Components/BackendIntern";
import DigitalMarketingIntern from "./Components/DigitalIntern";
import Eve from "./Components/eve";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/web-internship" element={<WebIntern />} />
          <Route path="/careers/backend-internship" element={<BackendIntern />} />
          <Route path="/careers/digital-marketing-internship" element={<DigitalMarketingIntern />} />
          <Route path="/careers/dev-mode" element={<Eve />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
