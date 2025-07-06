import React from "react";
import banner from "../img/static/Banner1.webp";
import serviceImg1 from "../img/static/tratamientos/periodoncia.JPG";
import serviceImg2 from "../img/static/tratamientos/endodoncia.JPG";
import serviceImg3 from "../img/static/tratamientos/curacionesdental.jpg";
import serviceImg4 from "../img/static/tratamientos/ortodoncia.JPG";
import serviceImg5 from "../img/static/tratamientos/rehabilitacionOral.JPG";
import serviceImg6 from "../img/static/tratamientos/edontopedria.jpg";
import serviceImg7 from "../img/static/tratamientos/esteticadental.jpg";
import { FiArrowDownCircle } from 'react-icons/fi';
import TratamientoDetallado from "../../components/Tratamiento";
import { Helmet } from 'react-helmet-async';



export const serviciosDentales = [
  {
    slug: "periodoncia",
    nombre: "Periodoncia",
    img: serviceImg1,
    tagline: "Cuidamos tus encías para conservar tus dientes.",
    descripcion: "Protege tus encías con nuestros tratamientos especializados. Prevenimos, diagnosticamos y tratamos enfermedades periodontales para mantener tus encías saludables y tus dientes firmes."
  },
  {
    slug: "endodoncia",
    nombre: "Endodoncia",
    img: serviceImg2,
    tagline: "Masticar correctamente es calidad de vida.",
    descripcion: "Elimina infecciones y alivia el dolor dental. Tratamos el interior de tus dientes para conservar tu sonrisa saludable. Confía en nuestros expertos para un cuidado efectivo y profesional."
  },
  {
    slug: "ortodoncia",
    nombre: "Ortodoncia",
    img: serviceImg4,
    tagline: "Cuando por fin, todo encaja.",
    descripcion: "Corrige la alineación de tus dientes y mejora tu mordida con brackets y alineadores modernos para lograr una sonrisa perfecta y funcional."
  },
  {
    slug: "Odontopediatría",
    img: serviceImg6,
    tagline: "Sonreír vuelve a tener sentido.",
    nombre: "Odontopediatría",
    descripcion:
      "Cuidamos la salud dental de los más pequeños con tratamientos especializados. Nuestro equipo de odontopediatras se dedica a crear un ambiente amigable y seguro para que los niños desarrollen hábitos dentales saludables desde temprana edad.",
  },
  {
    slug: "Rehabilitación Oral",
    img: serviceImg5,
    tagline: "El fin de los problemas mandibulares.",
    nombre: "Rehabilitación Oral",
    descripcion:
      "Restauramos la función y estética de tu boca con prótesis dentales avanzadas. Nuestros tratamientos de rehabilitación oral te ayudarán a recuperar la confianza en tu sonrisa y mejorar tu calidad de vida. Confía en nuestros especialistas para un cuidado dental integral.",
  },
  {
    slug: "Estética Dental",
    img: serviceImg7,
    tagline: "La sonrisa que buscabas.",
    nombre: "Estética Dental",
    descripcion:
      "Mejora la apariencia de tu sonrisa con nuestros tratamientos de blanqueamiento, carillas y remodelación dental. Logra una sonrisa radiante y confiada con la ayuda de nuestros expertos en estética dental.",
  },
  {
    slug: "Curaciones Dentales",
    img: serviceImg3,
    tagline: "Convertimos el miedo en confort.",
    nombre: "Curaciones Dentales",
    descripcion:
      "Restaura la salud y función de tus dientes con nuestras curaciones dentales. Tratamos caries y daños menores para prevenir problemas mayores y mantener tu sonrisa en perfectas condiciones. Confía en nuestra atención experta y cuidadosa.",
  },
];

const Tratamientos = (props) => {
  // Función para el scroll suave
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Oh My Dentist Perú | Tratamientos</title>
        <meta name="description" content="Ofrecemos una amplia gama de tratamientos dentales, desde ortodoncia hasta estética dental. Agenda tu cita con la Dra. María Luisa Risco." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/services" />
      </Helmet>
      {/* =================================================================== */}
      {/* SECCIÓN 1: HÉROE DE LA PÁGINA                                     */}
      {/* =================================================================== */}
      <section
        className="relative bg-cover bg-center text-white py-24 md:py-32"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Nuestros Tratamientos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Desde ortodoncia hasta implantes, disponemos del equipo profesional y las instalaciones más avanzadas para devolverle la salud y estética a tu sonrisa.
          </p>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 2: GALERÍA DE SERVICIOS                                     */}
      {/* =================================================================== */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Explora Nuestros Servicios</h2>
            <p className="mt-2 text-gray-600">Haz clic en un tratamiento para ver más detalles.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviciosDentales.map((servicio) => (
              <a
                key={servicio.slug}
                href={`#${servicio.slug}`}
                onClick={(e) => handleScrollTo(e, servicio.slug)}
                className="group block bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{servicio.tagline}</p>
                <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-2">
                  <span className="font-semibold text-sm">Ver detalles</span>
                  <FiArrowDownCircle />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* =================================================================== */}
      {/* SECCIÓN 3: DETALLE DE CADA TRATAMIENTO                            */}
      {/* =================================================================== */}
      <div >
        {serviciosDentales.map((servicio, index) => (
          <TratamientoDetallado
            key={servicio.slug}
            id={servicio.slug}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            image={servicio.img}
            index={index}
            whatsappLink={props.whatsappLink} // <-- Pasa el link de WhatsApp
          />
        ))}
      </div>

      {/* =================================================================== */}
      {/* SECCIÓN 4: CTA FINAL                                              */}
      {/* =================================================================== */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold">¿Listo para transformar tu sonrisa?</h2>
          <p className="mt-3 max-w-2xl mx-auto opacity-90">
            Estamos emocionados de servirte a ti y a tu familia. ¡Contacta con nosotros hoy mismo para programar una cita!
          </p>
          <div className="mt-8">
            <a 
              href={props.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all"
            >
              Agendar mi Cita
            </a>
          </div>
        </div>
      </section>

      {/* No olvides importar y añadir el Footer si no está en App.js */}
    </div>
  );
};

export default Tratamientos;
