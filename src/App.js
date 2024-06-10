import "./App.css";
import Inicio from "./files/pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./files/pages/Blogs";

import whatsapp from "../src/files/img/whatsapp-svgrepo-com (1).svg";
import avatar from "../src/files/img/static/profile-pic.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import NavBar from "./files/pages/NavBar";
import React, { useState } from "react";
import HeaderTop from "./files/pages/HeaderTop";
import Tratamientos from "./files/pages/Tratamientos";
import About from "./files/pages/Nosotros";
import Contacto from "./files/pages/Contacto";

function App() {
  let phoneNumber = "987257410";
  let phoneNumberTwo = "994647290"; //solo was

  phoneNumber = phoneNumber.split(" ").join("");

  const message =
    "Hola, me gustaría hacer una cita en la Clínica Dental. ¿Podrían ayudarme?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-start items-center flex-col ">
      <Router>
        <HeaderTop phone={phoneNumber} />
        <NavBar
          smenu={menu}
          setsmenu={setMenu}
          phonen={phoneNumber}
          link={whatsappLink}
        />
        <div className={"w-full h-screen"}>
          <Routes>
            <Route
              path={"/"}
              element={<Inicio phonen={phoneNumberTwo} link={whatsappLink} />}
            />
            <Route
              path={"/services"}
              element={<Tratamientos phonen={phoneNumber} />}
            />
            <Route path={"/blogs"} element={<Blogs phonen={phoneNumber} />} />
            <Route path={"/about"} element={<About phonen={phoneNumber} />} />
            <Route
              path={"/contact"}
              element={<Contacto phonen={phoneNumber} />}
            />
          </Routes>
        </div>
      </Router>
      <div className={"relative h-screen"}>
        <img
          className={"absolute right-0 bottom-0 h-[300px] w-[300px]"}
          src={whatsapp}
          alt=""
        />
      </div>
      <FloatingWhatsApp
        statusMessage={"Visto por última vez: Oh my Dentist Perú"}
        chatMessage={"¡Hola! 🦷\n¿En qué puedo ayudarte?"}
        phoneNumber={phoneNumberTwo}
        accountName={"Dra. Maria Luisa Risco"}
        placeholder={"Escribir un mensaje"}
        avatar={avatar}
      />
    </div>
  );
}

export default App;
