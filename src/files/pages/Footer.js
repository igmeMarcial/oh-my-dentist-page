import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/static/news/logo.png"; 
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';

const navLinks = [
  { to: "/", text: "Inicio" },
  { to: "/services", text: "Tratamientos" },
  { to: "/blogs", text: "Blogs" },
  { to: "/about", text: "Nosotros" },
  { to: "/contact", text: "Contacto" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61558587249531", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/ohmydentistperu", label: "Instagram" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@ohmydentistperu", label: "TikTok" },
  { icon: <FaWhatsapp />, href: "https://wa.me/51987654321", label: "WhatsApp" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@ohmydentistperu", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 w-full mt-0">
      <div className="container mx-auto px-6 py-12">
        {/*
          MODIFICACIÓN PRINCIPAL:
          - En móvil (por defecto): 'flex-col' apila todo y 'items-center' lo centra.
          - En pantallas medianas ('md') y más grandes:
            - 'md:flex-row' cambia la dirección a horizontal.
            - 'md:justify-between' crea el espacio entre los 3 elementos.
        */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-4">
          
          {/* COLUMNA 1: Navegación (Izquierda en desktop) */}
          <nav>
            {/* 'justify-center' para móvil, 'md:justify-start' para alinear a la izquierda en desktop */}
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* COLUMNA 2: Logo (Centro) */}
          {/* Al estar en el medio del código, flexbox lo colocará en el centro visualmente */}
          <Link to="/">
            <img src={logo} alt="Logo Oh My Dentist" className="h-24" />
          </Link>

          {/* COLUMNA 3: Redes Sociales (Derecha en desktop) */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visita nuestro ${social.label}`}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                {React.cloneElement(social.icon, { size: 22 })}
              </a>
            ))}
          </div>
        </div>

        {/* Divisor semántico */}
        <hr className="my-8 border-gray-700" />

        {/* Sección inferior: Copyright (se mantiene igual) */}
        <div className="text-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ohmydentistperu.com. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;