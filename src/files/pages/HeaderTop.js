import React from "react";

const HeaderTop = ({ phone }) => {
  return (
    <div className="header-top bg-gray-100 py-2 md:py-4 w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm md:text-base text-center">
            <span className="mr-2">
              Horario:{" "}
              <span className="font-bold text-[0.7rem] md:text-[1rem]">
                Lunes a Viernes - 8am a 9pm / Sábados - 9am a 6pm
              </span>
            </span>
            <br className="md:hidden" />
            <span>
              Contáctenos: <span className="font-bold">+51 {phone}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
