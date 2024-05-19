import React from "react";

function SectionTecnologia({ image }) {
  return (
    <div className={"mt-[120px] flex flex-col justify-center items-center"}>
      <div className={"flex flex-col justify-center items-center"}>
        <h2
          className={
            "font1 lg:text-4xl xl:text-5xl text-center sm:w-fit w-[300px] text-3xl sm:text-4xl"
          }
        >
          Seguimos de cerca la tecnología
        </h2>
        <h2
          className={
            "font4 text-lg md:text-xl w-[310px] sm:w-[400px] md:w-[515px] mt-[40px] text-text2 text-center"
          }
        >
          Integración de Inteligencia Artificial y Tecnología Avanzada
        </h2>
      </div>
      <div
        className={
          "mt-[100px] w-full flex justify-center items-center flex-col lg:flex-row gap-[20px]"
        }
      >
        <img className={"w-[310px] md:w-full"} src={image} alt="" />
        <div className={"flex flex-col justify-start items-center"}>
          <div className={"sm:w-fit w-[310px] text-center  text-xl font2"}>
            El Futuro de la Odontología
          </div>
          <h2
            className={
              "text-lg lg:w-[450px] w-[320px] sm:w-[500px] xl:w-[650px] flex flex-col gap-[25px] mt-[15px]  text-text2 font10 text"
            }
          >
            Los odontólogos modernos ya se valen del software para capturar
            percepciones en la toma de decisiones clínicas. Estas prácticas
            continuarán evolucionando para integrar algoritmos de inteligencia
            artificial que permitan a los profesionales encontrar las mejores
            opciones de tratamiento para sus pacientes.
            <h2>
              En la era del siglo XXI, las radiografías digitales y la imagen
              tridimensional se han convertido en el estándar de atención
              odontológica. El uso de escáneres intraorales con datos
              digitalizados para impresiones dentales en 3D, en lugar de las
              tradicionales impresiones de silicona de polivinilo y base de
              goma, es ahora una práctica habitual para la colocación de coronas
              dentales.
            </h2>
            <h2>
              La inteligencia artificial está sentando las bases para el futuro
              de la industria dental. Hoy en día, los robots dentales pueden
              llevar a cabo diversas funciones, desde el relleno de cavidades
              hasta la limpieza o extracción de dientes, transformando la forma
              en que se realizan los procedimientos odontológicos.
            </h2>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SectionTecnologia;
