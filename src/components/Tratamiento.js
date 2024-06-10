import React from "react";

function Tratamiento({ title, info, image, index }) {
  return (
    <section
      className={`md:mt-[50px] md:mb-[50px] mt-[50px] mb-[0px] md:pt-[80px] md:pb-[80px]  pt-[50px] pb-[50px] flex justify-center items-center w-full  bg-white ${
        index % 2 === 0 ? "bg3" : ""
      }`}
    >
      <div
        className={`flex flex-col md:flex-row justify-center items-center md:gap-[40px] xl:gap-[60px] 2xl:gap-[70px] ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={
            "flex flex-col justify-center md:items-start items-center w-full"
          }
        >
          <h1
            className={
              "xl:text-5xl text-3xl 2xl:text-6xl font6 2xl:w-[auto] xl:w-[auto] lg:w-[auto] md:text-left text-center md:w-[auto] w-[330px]   whitespace-pre-wrap 2xl:text-5xl  break-words"
            }
          >
            {title}
          </h1>
          <h2
            className={
              "font4 text-[#3C4959] mt-12 md:text-left text-center xl:text-xl lg:text-lg text-sm md:text-base w-[330px] md:w-[350px] xl:w-[500px] lg:w-[400px] 2xl:w-[600px] lea whitespace-pre-wrap break-words"
            }
          >
            {info}
          </h2>
        </div>
        <div
          className={
            "relative flex justify-center items-center w-full h-full md:mt-0 mt-[80px] px-[24px] pd:mx-0"
          }
        >
          <img
            className="rounded-lg object-cover max-w-[450px] max-h-[500px]"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
}

export default Tratamiento;
