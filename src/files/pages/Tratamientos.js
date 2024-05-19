import React, { useState } from "react";
import dish1 from "../img/anasayfa/dish1.svg";
import dish2 from "../img/anasayfa/dish2.svg";
import dish3 from "../img/anasayfa/dish3.svg";
import dish4 from "../img/anasayfa/dish4.svg";
import dish5 from "../img/anasayfa/dish5.svg";
import dish6 from "../img/anasayfa/dish6.svg";
import banner from "../img/static/Banner1.webp";
import rightcircle from "../img/anasayfa/Arrow - Right Circle.png";
import disestetigi from "../img/anasayfa/disestetigi.png";
import dishimplant from "../img/anasayfa/dishasd.png";

import disbeyazlatma from "../img/anasayfa/disbeyazlatma.png";
import acildis from "../img/anasayfa/acildis.png";
import onleme from "../img/anasayfa/onleme.png";
import { Swiper, SwiperSlide } from "swiper/react";
import docphoto1 from "../img/anasayfa/doctors/Group 1000001017.png";
import docphoto2 from "../img/anasayfa/doctors/Group 1000001018.png";
import docphoto3 from "../img/anasayfa/doctors/Group 1000001019.png";
import docphoto4 from "../img/anasayfa/doctors/Group 1000001020.png";
import docphoto5 from "../img/anasayfa/doctors/Mask group.png";
import AccordionEmre from "./AccordionEmre";
import oyununkaderi from "../img/anasayfa/oyunkaderi.png";
import serviceImg1 from "../img/static/servicesImg.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Tratamiento from "../../components/Tratamiento";

export const serviciosDentales = [
  {
    id: "Periodoncia",
    img: dish1,
    title: "Cuidamos tus encías para conservar tus dientes.",
    subTitle:
      "Las enfermedades periodontales afectan a los tejidos que protegen, rodean y soportan a los dientes. En ocasiones puede progresar sin ningún síntoma ni dolor. La ausencia de tratamiento puede originar la movilidad y pérdida prematura de la dentición.",
  },
  {
    id: "PrótesisDental",
    img: dish2,
    title: "Masticar correctamente es calidad de vida.",
    subTitle:
      "Con las prótesis dentales reponemos los dientes perdidos y solucionamos los problemas de aquellos que han sufrido un daño significativo. Para su confección aunamos el arte de las cosas hechas a mano junto con la tecnología más puntera como el escáner intraoral que nos permite ser más precisos, acortar tiempos de tratamiento y evitar las incómodas pastas de toma de impresiones.",
  },
  {
    id: "Sedación",
    img: dish1,
    title: "Convertimos el miedo en confort.",
    subTitle:
      "La sedación es una opción de tratamiento llevada a cabo por médicos especialistas en anestesia y reanimación que le permitirá afrontar sin miedo ni ansiedad y con total confort cualquier tipo de tratamiento estableciendo un equilibrio entre bienestar y seguridad. Podrá volver acompañado a su domicilio poco después de haber finalizado la intervención.",
  },
  {
    id: "ATM",
    img: dish1,
    title: "El fin de los problemas mandibulares.",
    subTitle:
      "Los trastornos de la articulación temporo-mandibular (ATM) son problemas relacionados con las articulaciones y musculatura masticatorias. La sintomatología es muy variada como: rechinamiento de los dientes, dolor de la musculatura mandibular especialmente por la mañana, chasquido o dificultad al abrir y/o cerrar la boca, entre otros.",
  },
  {
    id: "Ortodoncia",
    img: dish1,
    title: "Cuando por fin, todo encaja.",
    subTitle:
      "En nuestra clínica dental ofrecemos un tratamiento de ortodoncia personalizado para corregir las anomalías de los dientes y huesos maxilares de nuestros pacientes.",
  },
  {
    id: "ImplantesDentales",
    img: dish1,
    title: "Sonreír vuelve a tener sentido.",
    subTitle:
      "Un implante dental es una pieza de titanio diseñada para sustituir la raíz de los dientes perdidos. Realizamos una completa exploración bucodental previa y pruebas radiológicas para poder diagnosticar correctamente al paciente y realizar un plan de tratamiento individual y personalizado.",
  },
  {
    id: "EstéticaDental",
    img: dish1,
    title: "La sonrisa que buscabas.",
    subTitle:
      "Conseguir una sonrisa excelente implica que la boca tenga un óptimo estado de salud, que los dientes estén correctamente alineados y que no haya ausencias dentarias.",
  },
  {
    id: "CirugíaBucal",
    img: dish1,
    title: "Intervenciones sin dolor",
    subTitle:
      "En IDI realizamos cirugía de muelas del juicio, dientes supernumerarios, exposición de dientes Incluidos, regeneración en maxilares atróficos, frenectomías, elevación de seno, entre otros tratamientos. Disponemos de gabinetes adaptados para poder realizar este tipo de intervenciones mediante sedación endovenosa.",
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
        <div
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
                {/* <div
                  className={
                    "flex  md:flex-col lg:flex-row gap-[12px] justify-center items-center pb-6"
                  }
                >
                  <h2 className={"text-lg font4 underline"}>Randevu Oluştur</h2>
                  <img src={rightcircle} alt="" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {serviciosDentales.map((servicio, index) => (
        <Tratamiento
          key={servicio.id}
          title={servicio.id}
          info={servicio.subTitle}
          image={serviceImg1}
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
