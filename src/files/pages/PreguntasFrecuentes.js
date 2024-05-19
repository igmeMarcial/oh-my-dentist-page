import React from "react";
import AccordionEmre from "./AccordionEmre";

function PreguntasFrecuentes() {
  return (
    <div
      className={
        "mt-[140px] w-full h-full flex-col flex justify-center items-center"
      }
    >
      <div className={"flex flex-col justify-center items-center"}>
        <h2
          className={
            "font1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl w-[300px] sm:w-fit  text-center lg:text-justify 2xl:text-4xl"
          }
        >
          Frequently Asked Questions
        </h2>
        <h2
          className={
            "font4 text-lg md:text-xl w-[310px] sm:w-[515px] mt-[20px] text-text2 text-center"
          }
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.,
        </h2>
      </div>
      <AccordionEmre />
    </div>
  );
}

export default PreguntasFrecuentes;
