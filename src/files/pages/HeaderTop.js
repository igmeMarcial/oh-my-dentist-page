
import React from "react";
import { FiClock, FiPhone } from 'react-icons/fi'; 

const HeaderTop = ({ phone }) => {
  return (
    <div className="bg-primary text-white w-full shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between py-2 text-sm">
          <div className="flex items-center gap-2 mb-1 sm:mb-0 font-bold text-[0.7rem] md:text-[1rem]">
            <FiClock />
            <span>L-V: 8am - 9pm / Sáb: 9am - 6pm</span>
          </div>
          <a href={`tel:+51${phone}`} className="flex items-center gap-2 hover:text-gray-200 transition-colors ">
            <FiPhone />
            <span className="font-semibold">Llámanos: +51 {phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
