import React from "react";

const HeaderTop = () => {
  return (
    <div className="header-top bg-gray-100 py-2 md:py-4 w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm md:text-base text-center">
            <span className="mr-2">
              Horario:{" "}
              <span className="font-bold">
                Lunes a Viernes - 9am a 7pm / Sábados - 9am a 1pm
              </span>
            </span>
            <br className="md:hidden" />
            <span>
              Contáctenos: <span className="font-bold">+51 964350071</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
