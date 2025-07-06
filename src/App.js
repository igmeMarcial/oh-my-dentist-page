import "./App.css";
import Inicio from "./files/pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Blogs from "./files/pages/Blogs";
import avatar from "../src/files/img/static/profile-pic.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import NavBar from "./files/pages/NavBar";
import React, { useState } from "react";
import HeaderTop from "./files/pages/HeaderTop";
import Tratamientos from "./files/pages/Tratamientos";
import About from "./files/pages/Nosotros";
import Contacto from "./files/pages/Contacto";
import Footer from "./files/pages/Footer";

export const phoneNumberTwo = "986482183"; 
function App() {
  let phoneNumber = "986482183";
  

  phoneNumber = phoneNumber.split(" ").join("");

  const message =
    "Hola, me gustaría hacer una cita en la Clínica Dental. ¿Podrían ayudarme?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <HelmetProvider>
    <Router>
    <div className="flex flex-col min-h-screen bg-light overflow-x-hidden">
      <HeaderTop phone={phoneNumber} />
      <NavBar
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        whatsappLink={whatsappLink}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio phonen={phoneNumberTwo} link={whatsappLink} />} />
          <Route path="/services" element={<Tratamientos phonen={phoneNumber} />} />
          <Route path="/blogs" element={<Blogs phonen={phoneNumber} />} />
          <Route path="/about" element={<About phonen={phoneNumber} />} />
          <Route path="/contact" element={<Contacto phonen={phoneNumber} />} />
        </Routes>
      </main>

      <FloatingWhatsApp
        statusMessage={"En línea"}
        chatMessage={"¡Hola! 🦷\n¿Cómo podemos ayudarte?"}
        phoneNumber={phoneNumberTwo}
        accountName={"Clínica Dental Sonrisa Perfecta"} // Nombre más amigable
        placeholder={"Escribe tu mensaje..."}
        avatar={avatar}
        notification
        notificationSound
      />
      <Footer />
    </div>
  </Router>
  </HelmetProvider>
  );
}

export default App;
