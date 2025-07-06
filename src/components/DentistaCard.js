import React from "react";

// Recibimos `isReversed` para alternar el layout
const DentistaCard = ({ img, name, specialty, biografia, isReversed }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
      {/* Imagen */}
      <div
        className={`flex justify-center md:col-span-1 ${
          isReversed ? "md:order-last" : ""
        }`}
      >
        <img
          src={img}
          alt={name}
          className="w-48 h-48 md:w-full md:h-auto object-cover rounded-full md:rounded-2xl shadow-xl"
        />
      </div>

      {/* Biografía */}
      <div className="md:col-span-2 space-y-3">
        <h3 className="text-2xl font-bold text-dark">{name}</h3>
        <p className="font-semibold text-primary">{specialty}</p>
        <p className="text-gray-600 leading-relaxed">{biografia}</p>
      </div>
    </div>
  );
};

export default DentistaCard;