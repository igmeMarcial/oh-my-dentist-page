import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/static/news/logo.png"; 
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

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
];

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 w-full mt-0">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <Link to="/">
            <img src={logo} alt="Logo Oh My Dentist" className="h-24" />
          </Link>
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-medium">
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
        </div>

        {/* Divisor semántico */}
        <hr className="my-8 border-gray-700" />

        {/* Sección inferior: Copyright y Redes Sociales */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 text-sm">
          {/* Usamos <p> para el copyright */}
          <p className="text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ohmydentistperu.com. Todos los derechos reservados.
          </p>
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
                {/* Clonamos el icono para pasarle el tamaño fácilmente */}
                {React.cloneElement(social.icon, { size: 22 })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;