import React, { useState } from "react";
import dish1 from "../img/anasayfa/dish1.svg";
import dish2 from "../img/anasayfa/dish2.svg";
import banner from "../img/static/Banner1.webp";
import serviceImg1 from "../img/static/tratamientos/periodoncia.JPG";
import serviceImg2 from "../img/static/tratamientos/endodoncia.JPG";
import serviceImg3 from "../img/static/tratamientos/curacionesdental.jpg";
import serviceImg4 from "../img/static/tratamientos/ortodoncia.JPG";
import serviceImg5 from "../img/static/tratamientos/rehabilitacionOral.JPG";
import serviceImg6 from "../img/static/tratamientos/edontopedria.jpg";
import serviceImg7 from "../img/static/tratamientos/esteticadental.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Tratamiento from "../../components/Tratamiento";

export const serviciosDentales = [
  {
    id: "Periodoncia",
    img: serviceImg1,
    title: "Cuidamos tus encías para conservar tus dientes.",
    subTitle:
      "Protege tus encías con nuestros tratamientos especializados de periodoncia. Prevenimos, diagnosticamos y tratamos enfermedades periodontales para mantener tus encías saludables y tus dientes firmes. Visítanos para una evaluación y mantén tu sonrisa en óptimas condiciones.",
  },
  {
    id: "Endodoncia",
    img: serviceImg2,
    title: "Masticar correctamente es calidad de vida.",
    subTitle:
      "Elimina infecciones y alivia el dolor dental con nuestros tratamientos de endodoncia. Tratamos el interior de tus dientes para conservar tu sonrisa saludable. Confía en nuestros expertos para un cuidado dental efectivo y profesional.",
  },

  {
    id: "Ortodoncia",
    img: serviceImg4,
    title: "Cuando por fin, todo encaja.",
    subTitle:
      "Corrige la alineación de tus dientes y mejora tu mordida con nuestros tratamientos de ortodoncia. Utilizamos brackets y alineadores modernos para lograr una sonrisa perfecta y funcional. Disfruta de una mejor salud dental y una sonrisa más hermosa.",
  },
  {
    id: "Odontopediatría",
    img: serviceImg6,
    title: "Sonreír vuelve a tener sentido.",
    subTitle:
      "Cuidamos la salud dental de los más pequeños con tratamientos especializados. Nuestro equipo de odontopediatras se dedica a crear un ambiente amigable y seguro para que los niños desarrollen hábitos dentales saludables desde temprana edad.",
  },
  {
    id: "Rehabilitación Oral",
    img: serviceImg5,
    title: "El fin de los problemas mandibulares.",
    subTitle:
      "Restauramos la función y estética de tu boca con prótesis dentales avanzadas. Nuestros tratamientos de rehabilitación oral te ayudarán a recuperar la confianza en tu sonrisa y mejorar tu calidad de vida. Confía en nuestros especialistas para un cuidado dental integral.",
  },
  {
    id: "Estética Dental",
    img: serviceImg7,
    title: "La sonrisa que buscabas.",
    subTitle:
      "Mejora la apariencia de tu sonrisa con nuestros tratamientos de blanqueamiento, carillas y remodelación dental. Logra una sonrisa radiante y confiada con la ayuda de nuestros expertos en estética dental.",
  },
  {
    id: "Curaciones Dentales",
    img: serviceImg3,
    title: "Convertimos el miedo en confort.",
    subTitle:
      "Restaura la salud y función de tus dientes con nuestras curaciones dentales. Tratamos caries y daños menores para prevenir problemas mayores y mantener tu sonrisa en perfectas condiciones. Confía en nuestra atención experta y cuidadosa.",
  },
];

const Tratamientos = () => {
  const navigate = useNavigate();
  const handleRedirect = (item) => {
    navigate(`${item}`);

    window.scrollTo(0, 0);
  };

  return (
    <div className={"w-full h-full"}>
      <div className={"mt-[140px]"}>
        <div className={"flex flex-col justify-center items-center"}>
          <h2
            className={
              "font1 xl:text-6xl text-5xl 2xl:text-6xl text-center md:text-start"
            }
          >
            Nuestros tratamientos
          </h2>
          <h2
            className={
              "font4 text-lg xl:text-xl w-[320px] md:w-[450px] lg:w-[515px] mt-[40px] text-text2 text-center"
            }
          >
            Ortodoncia, cirugía bucal, implantes... Disponemos del equipo
            profesional y las instalaciones más avanzadas para llevar a cabo su
            tratamiento.{" "}
          </h2>
        </div>
        {/* <div
          className={
            "w-full bg3 flex flex-col justify-center items-center py-[50px]  mt-[70px]"
          }
        >
          <div
            className={
              " w-fit rounded-lg grid md:grid-row grid-cols2 md:grid-cols-2 lg:grid-cols-3 flex-col px-[35px]  py-[50px] gap-[30px] justify-center items-center h-fit lg:h-fit"
            }
          >
            {serviciosDentales.map((servicio) => (
              <div
                key={servicio.id}
                className={
                  "2xl:w-[400px] xl:w-[330px] lg:w-[300px] md:w-[320px] w-full py-[15px] md:px-[20px] lg:px-[35px] md:h-[450px] lg:h-full gap-[16px] rounded-xl  bg-white flex justify-start items-center flex-col"
                }
              >
                <img
                  className={"xl:w-[60px] lg:w-[50px]"}
                  src={servicio.img}
                  alt=""
                />
                <h1
                  className={
                    "font2 text-black lg:text-xl md:text-2xl text-2xl text-center xl:text-2xl"
                  }
                >
                  {servicio.id}
                </h1>
                <h1
                  className={
                    "font4 text-text2 px-4 md:h-[170px] lg:h-32 2xl:text-lg text-base text-center "
                  }
                >
                  {servicio.title}{" "}
                </h1>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      {serviciosDentales.map((servicio, index) => (
        <Tratamiento
          key={servicio.id}
          title={servicio.id}
          info={servicio.subTitle}
          image={servicio.img}
          index={index + 1}
        />
      ))}

      <section className={"mt-[120px]"}>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={
            "w-full h-fit bg-bg5 md:p-16 p-16 lg:p-12 xl:gap-[60px] sm:p-16  flex justify-center items-center md:flex-col lg:flex-row flex-col"
          }
        >
          <div
            className={
              "flex flex-col justify-center md:items-start items-center  md:p-0 "
            }
          >
            <h1
              className={
                "font1 text-white text-3xl w-[330px] lg:text-3xl xl:text-5xl sm:w-[400px] md:text-3xl md:w-[400px] lg:w-[500px] xl:w-[650px] leading-8"
              }
            >
              Estamos emocionados de servirle a usted y a su familia. ¡Llame hoy
              para programar citas!
            </h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tratamientos;
