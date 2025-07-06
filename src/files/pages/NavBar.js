import React, {  useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/static/news/logo2.png"; 
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const NavItem = ({ to, children, setMenuOpen }) => {
  const baseClasses = "font-medium tracking-wide text-dark hover:text-primary transition-colors duration-300";
  const activeClasses = "text-accent font-bold";

  return (
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : ""}`}
    >
      {children}
    </NavLink>
  );
};

const NavBar = ({ isMenuOpen, setMenuOpen, whatsappLink }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenuOpen]);

  const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/services", text: "Tratamientos" },
    { to: "/blogs", text: "Blogs" },
    { to: "/about", text: "Nosotros" },
    { to: "/contact", text: "Contacto" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 w-full">
      {/* El 'relative' aquí es crucial para que funcione el 'absolute' del logo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* ======================= INICIO DE CAMBIOS ======================= */}

          {/* 1. El Link del logo ahora es 'absolute' para que pueda ser más grande que el header */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="absolute top-1/2 transform -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-105"
          >
            {/* 2. Aumentamos significativamente la altura del logo */}
            <img 
              src={logo} 
              alt="Logo Clínica Dental Oh My Dentist Perú" 
              className="h-24 md:h-28 object-contain" // Mucho más alto que h-20
            />
          </Link>

          {/* 3. Creamos un espaciador para empujar la navegación a la derecha */}
          <div className="w-32 md:w-40" /> 
          {/* Este div invisible ocupa el espacio que el logo dejó libre */}

          {/* ======================== FIN DE CAMBIOS ========================= */}


          {/* Navegación para Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} setMenuOpen={setMenuOpen}>
                {link.text}
              </NavItem>
            ))}
          </nav>

          {/* Botón CTA para Desktop */}
          <Link
            to={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            <FiPhone />
            Agendar Cita
          </Link>

          {/* Botón de Menú para Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-dark focus:outline-none"
              aria-label="Abrir menú"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Overlay para Móvil (sin cambios) */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-5">
            {/* En el menú móvil, mostramos el logo de nuevo para que tenga contexto */}
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Logo Clínica Dental" className="h-16 object-contain" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
              <FiX size={30} className="text-dark" />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-20 gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-semibold ${isActive ? "text-accent" : "text-dark"}`
              }
            >
              {link.text}
            </NavLink>
          ))}
          <Link
            to={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            <FiPhone size={22} />
            ¡Contáctanos por WhatsApp!
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;