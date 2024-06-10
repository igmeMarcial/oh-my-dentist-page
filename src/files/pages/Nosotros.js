import React from "react";
import video1 from "../img/static/videoSmiling.mp4";
import aboutdoc1 from "../img/static/nosotros.JPG";
import doctora1 from "../img/static/imageDoctor1.png";
import doctora2 from "../img/static/doctors.jpg";
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
              Nuestra misión principal es brindarle más que un servicio, una
              atención personalizada y especializada donde se comparta la
              confianza, la honestidad y la calidez en nuestras atenciones,
              prevaleciendo el profesionalismo y el trabajo en equipo. Somos
              capaces de ofertar y realizar todo tipo de tratamientos dentales.
              Nuestra meta es concientizar a la sociedad sobre el cuidado de la
              salud oral a través del seguimiento y la prevención. En Clínica Oh
              my Dentist Perú, estamos a la vanguardia en investigación y
              desarrollo de nuevas técnicas y materiales que permitan dar
              soluciones a todos los tratamientos que realizamos.
            </h2>
            <h2
              className={
                "text-2xl  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[320px] mt-[32px] font8"
              }
            >
              ¿Por qué visitar Oh my dentist Perú?
            </h2>
            <h2
              className={
                "text-lg  2xl:w-[800px] xl:w-[500px] lg:w-[500px]  md:w-[700px] sm:w-[500px] w-[310px] mt-[44px] md:mt-[20px] text-text2 font10"
              }
            >
              Contamos con una moderna infraestructura y equipos de alta gama,
              incluyendo una cámara intraoral que nos permite visualizar todas
              las lesiones junto con nuestros pacientes. Ofrecemos citas
              programadas para evitar esperas innecesarias, garantizando
              conveniencia para nuestros clientes. Además, nuestros precios
              finales no incluyen cargos adicionales, asegurando una excelente
              relación calidad-precio.
            </h2>
          </div>
          <div>
            <img
              className={
                "  xl:w-[453px]  md:w-[300px] max-h-[300px] w-[300px] xl:max-h-[453px] object-cover rounded-[30px] rounded-[50%]"
              }
              src={aboutdoc1}
              alt=""
            />
          </div>
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
              img={doctora1}
              name="María Luisa Risco"
              specialty="odontóloga"
              biografia="Al Dra. María le apasiona crear hermosas sonrisas que impacten positivamente a sus pacientes. Su comportamiento intencionalmente tranquilo y su enfoque minimalista hacia los procedimientos de odontología general le han ganado la confianza y la lealtad de sus pacientes."
            />
            <hr className={"w-full"} />
            <Dentista
              img={doctora2}
              name="Equipo de Dentistas"
              specialty="Especialidades Variadas"
              biografia="Nuestro equipo de dentistas está compuesto por profesionales altamente calificados en diversas áreas de la odontología. Desde odontología general hasta ortodoncia, implantes dentales, endodoncia y mucho más, nuestro equipo está comprometido con brindar atención de calidad y cuidado personalizado a cada uno de nuestros pacientes."
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
