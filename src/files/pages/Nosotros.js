import React from "react";
import video1 from "../img/static/videoSmiling.mp4";
import aboutdoc1 from "../img/static/imageAbout.webp";
import uzmanlar1 from "../img/hakkimda/uzmanlar1.png";
import Footer from "./Footer";

import Dentista from "../../components/Dentista";
const About = () => {
  return (
    <div className={"mt-[140px] flex justify-center items-center"}>
      <div className={"w-full h-full"}>
        <div className={"flex justify-center items-center"}>
          <h2 className={"font1 text-5xl sm:text-6xl"}>Nosotros</h2>
        </div>
        <div
          className={
            "mt-[70px] w-full flex justify-center items-center md:flex-col flex-col lg:flex-row 2xl:flex-row gap-[80px]"
          }
        >
          <div className={"flex flex-col "}>
            <div className={"mt-[15px] w-fit text-3xl sm:text-4xl font1"}>
              Nuestro Misión
            </div>
            <h2
              className={
                "text-lg  2xl:w-[800px] xl:w-[500px] lg:w-[500px] md:w-[700px] sm:w-[500px] w-[310px] mt-[20px] text-text2 font10"
              }
            >
              Para brindar servicios de calidad, rápidamente. Porque cada
              paciente es importante para nosotros. Nuestra clínica dental ha
              brindado atención dental de calidad para toda la familia desde
              2015. Ya sea que necesite una limpieza dental regular o una
              cirugía compleja, está en buenas manos con la Dra. Malu y su
              experimentado equipo. Estamos orgullosos de ofrecer un ambiente
              cálido y acogedor y de hacer que cada cita sea lo más placentera
              posible.
            </h2>
            <h2
              className={
                "text-2xl  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[320px] mt-[32px] font8"
              }
            >
              ¿Por qué visitar Oh my dental Perú?
            </h2>
            <h2
              className={
                "text-lg  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[310px] mt-[44px] text-text2 font10"
              }
            >
              Nuestras modernas instalaciones están equipadas con instrumentos
              de alta gama, incluyendo una cámara intraoral y un escáner
              antiplaca. Ofrecemos citas programadas para evitar esperas
              innecesarias, garantizando conveniencia para nuestros clientes.
              Con un enfoque pro-cliente y un equipo de profesionales de primer
              nivel, proporcionamos tratamientos de higiene dental de calidad
              que duran una hora completa. Además, nuestro precio final no
              incluye cargos adicionales, asegurando una excelente relación
              calidad-precio.
            </h2>
          </div>
          <img
            className={
              "xl:w-[453px] md:w-[300px] w-[300px] max-h-[603px] object-contain"
            }
            src={aboutdoc1}
            alt=""
          />
        </div>
        <div className={"mt-[120px] flex flex-col justify-center items-center"}>
          <div className={"flex flex-col justify-center items-center"}>
            <h2
              className={
                "font1 text-3xl sm:text-4xl w-[330px] lg:text-4xl xl:text-5xl md:text-5xl md:w-[500px] lg:w-fit text-center"
              }
            >
              Nuestro Equipo
            </h2>
            <h2
              className={
                "font4 text-lg md:text-xl w-[310px] sm:w-[400px] md:w-[515px] mt-[40px] text-text2 text-center"
              }
            >
              Conozca más de cerca a nuestros expertos
            </h2>
          </div>
          <div
            className={
              "mt-[120px] gap-[70px] flex flex-col justify-center items-center"
            }
          >
            <Dentista
              img={uzmanlar1}
              name="Marcial Igme"
              specialty="Dentista"
              biografia="Al Dr. Igme le apasiona crear hermosas sonrisas que impacten positivamente a sus pacientes. Su comportamiento intencionalmente tranquilo y su enfoque minimalista hacia los procedimientos de odontología general le han ganado la confianza y la lealtad de sus pacientes."
            />
            <hr className={"w-full"} />
            <Dentista
              img={uzmanlar1}
              name="Marcial Igme"
              specialty="Dentista"
              biografia="El Dr. Marcial es conocido por su compromiso con la excelencia en todo lo que hace por sus pacientes, incluida la colocación de implantes dentales, carillas sin preparación, coronas y puentes, además de realizar endodoncias y cirugía oral."
            />

            <hr className={"w-full"} />
            <Dentista
              img={uzmanlar1}
              name="Marcial Igme"
              specialty="Dentista"
              biografia="El Dr. Marcial es un profesional dedicado que se destaca en todos los aspectos de la odontología, desde empastes y extracciones hasta reconstrucciones bucales completas y procedimientos cosméticos. Fuera de la oficina, al Doctor Levy le gusta hacer caminatas, viajar y explorar nuevas culturas."
            />
          </div>
        </div>
        {/* Here abaut tegnology */}
        <div className={"mt-[120px]"}>
          <div
            className={
              "w-full bg-text2   flex   justify-center items-center md:h-[550px] lg:h-[550px] relative "
            }
          >
            <video
              src={video1} // Ruta del archivo de video
              type="video/mp4" // Tipo de archivo de video
              className="w-full h-full" // Establecer el ancho al 100% del contenedor
              autoPlay
              loop
              muted
            />
            {/* here video */}
            <h2
              className={
                "font1 text-3xl sm:text-5xl lg:text-6xl absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }
            >
              Tu sonrisa es tu mejor carta de presentación
            </h2>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
