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
import Eve from "./Components/Eve"
import FrontendReadmore from "./Components/ForntendReadmore"
import BackendReadmore from "./Components/BackendReadmore"
import AppdevelopmentReadmore from "./Components/AppdevelopmentReadmore"
import DigitalMarketingReadmore from "./Components/DigitalMarketingReadmore"
import UiReadmore from "./Components/UiReadmore"
import SoftwareReadmore from "./Components/SoftwareReadmore"
import CustomerSupportVoice from "./Components/CustomerSupportVoice";
import TechnicalSupport from "./Components/TechnicalSupport";
import CustomerSupportnonVoice from "./Components/CustomerSupportnonVoice"; 

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
          <Route path="/services/frontend-read-more" element={<FrontendReadmore />} />
          <Route path="/services/backend-read-more" element={<BackendReadmore />} />
          <Route path="/services/appdevelopment-read-more" element={<AppdevelopmentReadmore />} />
          <Route path="/services/digital-marketing-read-more" element={<DigitalMarketingReadmore />} />
          <Route path="/services/ui-ux-read-more" element={<UiReadmore />} />
          <Route path="/services/software-read-more" element={<SoftwareReadmore />} />
          <Route path="/careers/customer-support-voice" element={<CustomerSupportVoice />} />
          <Route path="/careers/tech-support-voice" element={<TechnicalSupport />} />
          <Route path="/careers/customer-support-non-voice" element={<CustomerSupportnonVoice />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
