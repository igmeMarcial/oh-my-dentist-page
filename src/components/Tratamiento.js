import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

// Recibimos los props con los nuevos nombres
function TratamientoDetallado({ id, nombre, descripcion, image, index, whatsappLink }) {
  // Lógica para alternar el layout
  const isReversed = index % 2 !== 0;

  return (
    // La sección ahora tiene un ID para el anclaje del scroll
    <section id={id} className={`py-16 md:px-12 md:py-24 ${isReversed ? "bg-light" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna de Imagen */}
          <div className={`flex justify-center ${isReversed ? "md:order-last" : ""}`}>
            <img
              className="rounded-2xl object-cover w-full max-w-md h-auto shadow-2xl"
              src={image}
              alt={`Tratamiento de ${nombre}`}
            />
          </div>

          {/* Columna de Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dark">
              {nombre}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {descripcion}
            </p>
            {/* Botón CTA específico para este tratamiento */}
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all"
              >
                <FaWhatsapp size={20} />
                <span>Consultar sobre {nombre}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TratamientoDetallado;