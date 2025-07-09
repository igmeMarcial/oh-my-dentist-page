import React from "react";
import { Helmet } from 'react-helmet-async';
import profilfoto2 from "../img/static/profile2.png";
import profilfoto3 from "../img/static/profile3.png";
import profilfoto4 from "../img/static/profile4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiPhone ,FiArrowRight, FiCheckCircle} from "react-icons/fi";
import { FaWhatsapp,FaQuoteLeft, FaStar } from "react-icons/fa";
import dentistImage from "../img/malu1.png"; // La foto de la doctora
import spinningTeeth from "../img/dish.svg"; // Los dientes que giran
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';

import testimonialPhoto1 from "../img/static/profile1.png";
import { Link} from "react-router-dom";

import doctora from "../img/static/news/d5.jpeg";
import doctora2 from "../img/static/news/d6.jpeg";
import Feature from "../../components/ImagenComparison";


const Inicio = (props) => {
  const { phonen, link: whatsappLink } = props;
  return (
    <div className={"w-full flex flex-col"}>
       <Helmet>
        <title>Oh My Dentist Perú | Clínica Dental en Chorrillos, Lima</title>
        <meta name="description" content="Odontología integral de confianza en Chorrillos. Ofrecemos estética dental, ortodoncia, endodoncia y más. Agenda tu cita con la Dra. María Luisa Risco." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/" />
      </Helmet>
       <section className="bg-white">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* --- Columna Izquierda: Texto y Botones (CTA) --- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-dark leading-tight">
                Oh My Dentist Perú
                <span className="block text-primary">Odontología Integral</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg text-gray-600">
              Soy la doctora María Luisa Risco. Brindamos odontología integral al servicio de la comunidad. Contamos con experiencia y calidad en nuestro trabajo. Valoramos la seguridad y fomentamos la confianza en nuestros pacientes.
              </p>
              
              {/* Botones de Acción */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaWhatsapp size={22} />
                  Agendar Cita Ahora
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <FiPhone size={20} />
                  Llámanos
                </a>
              </div>
            </div>

            {/* --- Columna Derecha: Imagen y Animación --- */}
            <div className="relative flex justify-center items-center h-[350px] lg:h-[450px] ">
              {/* Círculo de fondo con tu color primario */}
              <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-primary bg-opacity-10 rounded-full"></div>
              
              {/* Dientes giratorios con sombra de tu color de acento */}
              <img 
                src={spinningTeeth} 
                alt="Animación de dientes"
                className="absolute w-full h-[80%] animate-spin-slow"
                style={{ filter: `drop-shadow(0 0 15px #e5633455)` }} // Sombra con tu color de acento
              />
              
              {/* Imagen de la Doctora */}
              <img 
                src={dentistImage} 
                alt="Doctora María Luisa Risco"
                className="absolute bottom-0 h-[110%] w-auto object-contain"
                style={{ maskImage: "linear-gradient(black 75%, transparent)" }}
              />
            </div>

          </div>
        </div>
      </section>
     
      {/* =================================================================== */}
{/* SECCIÓN 2: TARJETAS DE SERVICIOS                                    */}
{/* =================================================================== */}
<section className="bg-light py-20 flex flex-col w-full">
  <div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Estética Dental", description: "Embellece tu sonrisa con blanqueamientos, carillas y remodelación dental.", icon: "🦷" },
        { title: "Endodoncia", description: "Tratamos el interior de tus dientes para eliminar infecciones y aliviar el dolor.", icon: "✨" },
        { title: "Ortodoncia", description: "Corrige la posición de tus dientes y mejora tu mordida con aparatos dentales.", icon: "😁" },
        { title: "Rehabilitación Oral", description: "Restauramos la función y estética bucal con prótesis dentales avanzadas.", icon: "🛠️" },
      ].map((service, index) => (
        <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
          <Link to="/services" className="font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2">
            Ver más <FiArrowRight />
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
{/* =================================================================== */}
{/* SECCIÓN 3: POR QUÉ ELEGIRNOS                                       */}
{/* =================================================================== */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Columna de la imagen */}
      <div className="order-last lg:order-first flex justify-center items-center">
      <div className=" text-center mx-auto lg:mx-0 w-full max-w-[26rem] aspect-[2/3] rounded-2xl  overflow-hidden shadow-2xl">
          <Feature />
        </div>
      </div>
      {/* Columna de texto */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark">¿Por qué elegir Oh My Dentist Perú?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Encontrarás atención dental excepcional, respaldada por un equipo experimentado y tecnología de vanguardia, garantizando la mejor experiencia y resultados para ti.
        </p>
        {/* Lista de beneficios */}
        <ul className="mt-8 space-y-4 text-left max-w-md mx-auto lg:mx-0">
          {[
            "Calidad Garantizada",
            "Equipo Profesional y Experimentado",
            "Tecnología Avanzada",
            "Atención Personalizada y Cálida",
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <FiCheckCircle className="text-primary mr-3 flex-shrink-0" size={22} />
              <span className="text-gray-700 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all">
            Contactar Ahora
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* =================================================================== */}
{/* SECCIÓN 4: CONOZCA A NUESTRA EXPERTA                              */}
{/* =================================================================== */}
<section className="py-20 bg-light">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Conozca a Nuestra Experta</h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
      Descubra el compromiso y la experiencia de nuestra talentosa doctora, dedicada a brindarle la mejor atención con una calidad humana inigualable.
    </p>
    <div className="mt-12 flex justify-center">
      <div className="relative inline-block">
        <img
          src={doctora}
          alt="Doctora María Luisa Risco"
          className="rounded-2xl shadow-2xl w-full max-w-sm h-auto object-cover"
        />
        {/* Overlay con el nombre */}
        <div className="absolute bottom-5 left-5 right-5 bg-accent bg-opacity-90 text-white p-4 rounded-xl text-left">
          <h3 className="text-xl font-bold">Dra. María Luisa Risco</h3>
          <p className="text-sm opacity-90">Odontóloga Profesional</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* =================================================================== */}
{/* SECCIÓN 5: TESTIMONIOS (CON SWIPER)                                 */}
{/* =================================================================== */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Nuestros Pacientes Nos Avalan</h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
      La satisfacción y la sonrisa de nuestros pacientes es nuestra mayor recompensa. Vea lo que dicen de nosotros.
    </p>
    <div className="mt-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="pb-16" // Padding bottom para que se vean los puntos
      >
        {[
          { name: "Marcial Igme", photo: testimonialPhoto1, text: "Excelente trabajo, maravilloso personal y trato, estoy muy contento con los resultados." },
          { name: "Zara Villanueva", photo: profilfoto2, text: "La atención es excelente, son muy profesionales. Del mejor equipamiento que he visto." },
          { name: "Jhon Flores", photo: profilfoto3, text: "Instalaciones de mucha calidad y el personal muy, muy amable. Lo recomiendo sin dudarlo." },
          { name: "Alonzo Barreda", photo: profilfoto4, text: "El equipo es amable y profesional. Me impresiona la calidad de los materiales que utilizan." },
        ].map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-light p-8 rounded-xl shadow-md h-full flex flex-col">
              <FaQuoteLeft className="text-accent text-3xl mb-4" />
              <p className="text-gray-600 mb-6 flex-grow text-left">"{testimonial.text}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.photo} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-dark text-left">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>
{/* =================================================================== */}
{/* SECCIÓN 6: CTA FINAL (LLAMADA A LA ACCIÓN)                          */}
{/* =================================================================== */}
<section className="bg-primary text-white">
  <div className="container mx-auto px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold">Priorizamos tu Salud y Bienestar</h2>
        <p className="mt-4 text-lg opacity-90 max-w-lg mx-auto md:mx-0">
          Nuestro principal objetivo es conseguir y mantener la salud, función y estética bucodental de nuestros pacientes, con calidad humana y cercanía.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
            Más Información
          </Link>
        </div>
      </div>
      {/* Imagen */}
      <div className="flex justify-center">
        <img src={doctora2} alt="Sonrisa saludable" className=" max-h-[400px] max-w-sm rounded-2xl" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Inicio;
