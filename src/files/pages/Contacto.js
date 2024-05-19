import React, { useEffect, useState } from "react";
import "../../App.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import chorrillos from "../img/static/Chorrillos.jpg";
import chat from "../img/iletisim/chat.png";
import pin from "../img/iletisim/pin 1.png";
import time from "../img/iletisim/time.png";
import telefon from "../img/iletisim/telefon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "./Footer";
const Contacto = (props) => {
  const { phonen } = props;
  const [value, setValue] = useState();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {}, [value]);
  return (
    <div className={"mt-[120px]"}>
      <div className={"flex flex-col justify-center items-center"}>
        <h2 className={"font1 text-5xl"}>Contáctenos</h2>
        <h2
          className={
            "font4 text-sm sm:w-[415px] w-[315px] mt-[20px] text-text2 text-center"
          }
        >
          ¡Nos encantaría saber de usted! Llámenos o envíenos un correo
          electrónico utilizando la información a continuación.
        </h2>
      </div>
      <div
        className={
          "flex mt-[80px] items-center justify-center gap-16 xl:gap-8 flex-col xl:flex-row"
        }
      >
        <div
          className={"flex flex-col w-[330px] sm:w-[503px] xl:w-fit gap-[20px]"}
        >
          <div className={"relative "}>
            {/* <img src={harita} alt="" /> */}
            <div className="bg16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.0034648333387!2d-77.04707225826556!3d-12.05846861588262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91111617523%3A0x5f2808bc2ee542d5!2sEstaci%C3%B3n%20N%C2%B0%2011%20-%20L%C3%ADnea%202%20del%20metro%20Lima%20PARQUE%20MURILLO!5e0!3m2!1sen!2spe!4v1715830361393!5m2!1sen!2spe"
                // width="503"
                height="325"
                style={{
                  border: 0,
                  borderRadius: "30px",
                  width: "100%",
                }}
                allowfullscreen=""
                loading="lazy"
                title="Mapa de la Estación N° 11 - Línea 2 del metro Lima PARQUE MURILLO"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <div
              className={"absolute w-full px-[20px] pb-[20px] bottom-0 left-0"}
            >
              <div
                className={
                  " h-[93px] gap-4 pl-[30px] flex justify-start items-center bg-white rounded-[10px]"
                }
              >
                <div
                  className={"w-12 h-12 bg13 flex justify-center items-center"}
                >
                  <img src={konum} alt="" />
                </div>
                <div className={"flex justify-center flex-col"}>
                  <h3 className={"font21"}>Avenida</h3>
                  <h2 className={"font4 text-text2"}>No se sabe</h2>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className={
              " h-[118px] gap-4 pl-[30px] flex justify-start items-center bg15 rounded-[10px]"
            }
          >
            <div className={"w-12 h-12 bg13 flex justify-center items-center"}>
              <img src={time} alt="" />
            </div>
            <div className={"flex justify-center flex-col"}>
              <h3 className={"font21"}>Horario de antención</h3>
              <h2 className={"font4 text-text2 w-[200px] sm:w-[300px]"}>
                Lunes - Sabado (9:00am - 18:00pm) Feriados (Cerrado)
              </h2>
            </div>
          </div>
          <a
            target="_blank"
            href="mailto:igmemarcial@gmail.com"
            className={
              " h-[93px] gap-4 pl-[30px] flex justify-start items-center bg15 rounded-[10px]"
            }
          >
            <div className={"w-12 h-12 bg13 flex justify-center items-center"}>
              <img src={pin} alt="" />
            </div>
            <div className={"flex justify-center flex-col"}>
              <h3 className={"font21"}>Correo Electrónico</h3>
              <h2 className={"font4 text-text2"}>igmemarcial@gmail.com</h2>
            </div>
          </a>

          <a
            target={"_blank"}
            href={`tel:${phonen}`}
            className={
              " h-[93px] gap-4 pl-[30px] flex justify-start items-center bg15 rounded-[10px]"
            }
          >
            <div className={"w-12 h-12 bg13 flex justify-center items-center"}>
              <img src={telefon} alt="" />
            </div>
            <div className={"flex justify-center flex-col"}>
              <h3 className={"font21"}>Número de Celular</h3>
              <h2 className={"font4 text-text2"}>965350071</h2>
            </div>
          </a>

          <a
            target={"_blank"}
            href={`https://api.whatsapp.com/send/?phone=9${phonen}&text&type=phone_number&app_absent=0`}
            className={
              " h-[93px] gap-4 pl-[30px] flex justify-start items-center bg15 rounded-[10px]"
            }
          >
            <div className={"w-12 h-12 bg13 flex justify-center items-center"}>
              <img src={chat} alt="" />
            </div>
            <div className={"flex justify-center flex-col"}>
              <h3 className={"font21"}>Whatsapp </h3>
              <h2 className={"font4 text-text2"}>+51 946250071</h2>
            </div>
          </a>
        </div>
        <div
          className={
            "flex flex-col w-[330px] sm:w-[700px] px-[46px] py-[30px] h-fit bg16"
          }
        >
          <div className={"flex flex-col w-full sm:flex-row gap-[32px]"}>
            <div className={"flex flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>Nombre</h4>
              <div
                className={
                  "w-[232px] h-[55px] bg17 flex items-center pl-0 text-text4 font4"
                }
              >
                <input
                  className={"w-full h-full m-4 border-none outline-none"}
                  placeholder={"Primer Nombre"}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className={"flex w-full flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>Apellidos</h4>
              <div
                className={
                  "w-[232px] lg:w-full h-[55px] bg17 flex items-center pl-0 text-text4 font4"
                }
              >
                <input
                  className={"w-full h-full m-4 border-none outline-none"}
                  placeholder={"Apellidos"}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={"mt-[20px]"}>
            <div className={"flex flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>Correo</h4>
              <div
                className={
                  "w-full h-[55px] bg17 flex items-center pl-0 text-text4 font4"
                }
              >
                <input
                  className={"w-full h-full m-4 border-none outline-none"}
                  placeholder={"tucorreo@gmail.com"}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={"mt-[20px]"}>
            <div className={"flex flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>
                Número de celular
              </h4>
              <div
                className={
                  "w-full h-[55px] bg17 gap-4 flex items-center pl-4 text-text4 font4"
                }
              >
                <PhoneInput
                  defaultCountry={"PE"}
                  placeholder="Ingrese número de teléfono "
                  value={value}
                  onChange={setValue}
                  required
                />
              </div>
            </div>
          </div>
          <div className={"mt-[20px]"}>
            <div className={"flex flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>Fecha</h4>
              <div
                className={
                  "w-full h-[55px] bg17 flex items-center pl-4 text-text4 font4"
                }
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className={"mt-[20px] h-full w-full"}>
            <div className={"flex w-full h-full flex-col gap-[10px]"}>
              <h4 className={"flex flex-col font21 text-text2"}>Mensaje</h4>
              <div className={"w-full h-full bg17 flex p-4  text-text4 font4"}>
                <textarea
                  className={
                    "w-full h-[162px] max-h-[162px] flex border-none outline-none"
                  }
                  placeholder={"Message"}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={"mt-[30px] flex justify-center items-center"}>
            <div
              className={
                "bg-bg2 hover:bg-bg7 cursor-pointer w-[250px] h-[55px] px-[15px] flex justify-center items-center py-[30px] rounded-xl"
              }
            >
              <h2 className={"text-white font2 text-[16px]"}>
                Haga una cita ahora
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-[120px] md:mt-[150px]"}>
        <div
          className={
            "w-full bg-text2   flex   justify-center items-center md:h-[550px] lg:h-[550px] relative "
          }
        >
          <img
            src={chorrillos}
            className="w-full h-full"
            style={{ opacity: 0.5 }}
          />

          <h2
            className={
              "font1 text-1xl font-bold sm:text-3xl lg:text-4xl absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            Nuestra oficina está disponible para responder sus preguntas y
            evaluar sus síntomas.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
