import "./App.css";
import Inicio from "./files/pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./files/pages/Blogs";
import Blogs1 from "./files/pages/Blogs1";

import whatsapp from "../src/files/img/whatsapp-svgrepo-com (1).svg";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import NavBar from "./files/pages/NavBar";
import React, { useState } from "react";
import HeaderTop from "./files/pages/HeaderTop";
import Tratamientos from "./files/pages/Tratamientos";
import About from "./files/pages/Nosotros";
import Contacto from "./files/pages/Contacto";

function App() {
  let phoneNumber = "964 350071";

  phoneNumber = phoneNumber.split(" ").join("");

  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-start items-center flex-col ">
      <Router>
        <HeaderTop />
        <NavBar smenu={menu} setsmenu={setMenu} phonen={phoneNumber} />
        <div className={"w-full h-screen"}>
          <Routes>
            <Route path={"/"} element={<Inicio phonen={phoneNumber} />} />
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
            <Route
              path={"/blogs/blogs1"}
              element={<Blogs1 phonen={phoneNumber} />}
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
        statusMessage={"Visto por última vez: Oh my Dentis Perú"}
        chatMessage={"¡Hola! 🤝\n¿En qué puedo ayudarte?"}
        phoneNumber={"964350071"}
        accountName={"Oh my Dentis Perú"}
        placeholder={"Escribir un mensaje"}
      />
    </div>
  );
}

export default App;
