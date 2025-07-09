  import React from "react";

import videoSmiling from "../img/static/videoSmiling.mp4";
import aboutImage from "../img/static/nosotros.JPG";
import doctora1 from "../img/static/imageDoctor1.png";
import doctora2 from "../img/static/doctors.jpg";
import DentistaCard from "../../components/DentistaCard";
import { Helmet } from 'react-helmet-async';




const About = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Oh My Dentist Perú | Nosotros</title>
        <meta name="description" content="Conoce más sobre nuestra clínica, nuestra misión, nuestros valores y nuestro equipo de profesionales." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/about" />
      </Helmet>
      {/* =================================================================== */}
      {/* SECCIÓN 1: HÉROE - QUIÉNES SOMOS                                    */}
      {/* =================================================================== */}
      <section className="bg-light py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Conoce la misión, los valores y el equipo que hacen de Oh My Dentist Perú tu mejor opción para el cuidado dental.
          </p>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 2: MISIÓN Y FILOSOFÍA                                     */}
      {/* =================================================================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Columna de Texto */}
            <div className="text-gray-700 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-4">Nuestra Misión</h2>
                <p className="leading-relaxed">
                En OhMyDentistPeru, nuestra misión es construir, junto a ti, un nuevo concepto de salud bucal: sin miedos, sin juicios y con decisiones compartidas.
Aquí no solo tratamos dientes: te escuchamos, te explicamos y caminamos contigo en cada etapa del proceso.
Creemos que cuando el paciente entiende, confía y se involucra, la odontología deja de ser una obligación... y se convierte en un acto de autocuidado.
Somos un equipo, y tu bienestar es nuestra meta común.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark mb-4">¿Por qué visitarnos?</h2>
                <p className="leading-relaxed">
                  Contamos con una moderna infraestructura y equipos de alta gama, incluyendo una cámara intraoral que nos permite visualizar todas las lesiones junto con nuestros pacientes. Ofrecemos citas programadas para evitar esperas innecesarias, garantizando conveniencia para nuestros clientes. Además, nuestros precios finales no incluyen cargos adicionales, asegurando una excelente relación calidad-precio.
                </p>
              </div>
            </div>
            {/* Columna de Imagen */}
            <div className="flex justify-center">
              <img
                src={aboutImage}
                alt="Instalaciones de la clínica"
                className="shadow-2xl xl:w-[453px]  md:w-[300px] max-h-[300px] w-[300px] xl:max-h-[453px] object-cover rounded-[50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 3: NUESTRO EQUIPO                                         */}
      {/* =================================================================== */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
            Profesionales apasionados y dedicados a tu sonrisa.
          </p>
          <div className="mt-12 max-w-4xl mx-auto space-y-16">
            <DentistaCard
              img={doctora1}
              name="Dra. María Luisa Risco"
              specialty="Odontóloga General"
              biografia="A la Dra. María le apasiona crear hermosas sonrisas que impacten positivamente a sus pacientes. Su comportamiento intencionalmente tranquilo y su enfoque minimalista hacia los procedimientos de odontología general le han ganado la confianza y la lealtad de sus pacientes."
              isReversed={false}
            />
            <DentistaCard
              img={doctora2}
              name="Nuestro Equipo de Especialistas"
              specialty="Especialidades Variadas"
              biografia="Nuestro equipo de dentistas está compuesto por profesionales altamente calificados en diversas áreas. Desde odontología general hasta ortodoncia, implantes y endodoncia, nuestro equipo está comprometido con brindar atención de calidad y cuidado personalizado a cada uno de nuestros pacientes."
              isReversed={true}
            />
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 4: VIDEO DE FILOSOFÍA                                     */}
      {/* =================================================================== */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <video
          src={videoSmiling}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // Importante para autoplay en móviles
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-dark bg-opacity-50"></div>
        {/* Texto */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight shadow-text">
            Tu sonrisa es tu mejor carta de presentación
          </h2>
        </div>
      </section>

      {/* No olvides el Footer */}
    </div>
  );
};

export default About;