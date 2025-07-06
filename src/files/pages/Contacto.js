import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiClock, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import chorrillosImage from "../img/static/Chorrillos.jpg";
import { phoneNumberTwo } from "../../App";
import { Helmet } from 'react-helmet-async';


const initialForm = {
  nombre: "",
  apellido: "",
  correo: "",
  numero: "",
  mensaje: "",
  fecha: new Date(),
};

const Contacto = (props) => {
  const { phonen } = props;
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Lógica del Formulario (mejorada) ---
  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) errors.nombre = "El nombre es requerido.";
    if (!formData.correo.trim()) {
      errors.correo = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      errors.correo = "El formato del correo no es válido.";
    }
    if (!formData.numero) {
      errors.numero = "El número es requerido.";
    } else if (!isPossiblePhoneNumber(formData.numero)) {
      errors.numero = "El número de teléfono no es válido.";
    }
    if (!formData.mensaje.trim()) errors.mensaje = "El mensaje es requerido.";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, numero: value });
  };
  
  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const templateParams = {
        to_name: "María Luisa Risco",
        from_name: `${formData.nombre} ${formData.apellido}`,
        message: formData.mensaje,
        email: formData.correo,
        phone: formData.numero,
        date: formData.fecha.toLocaleDateString('es-ES'),
      };

      emailjs.send("service_hzgaygz", "template_13so0xa", templateParams, "wYgHawbaiSneLzziy")
        .then(() => {
          alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
          setFormData(initialForm);
        })
        .catch((error) => {
          alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
          console.error("FAILED...", error.text);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };
  
  // --- Componente de Tarjeta de Información ---
  const InfoCard = ({ icon, title, content, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-lg hover:bg-light transition-colors">
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <div>
        <h3 className="font-bold text-dark">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </a>
  );

  return (
    <div className="bg-white">
      <Helmet>
        <title>Oh My Dentist Perú | Contacto</title>
        <meta name="description" content="Contáctanos para agendar una cita, enviar consultas o simplemente saludarnos. Estamos para servirte." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/contact" />
      </Helmet>
      {/* =================================================================== */}
      {/* SECCIÓN 1: HÉROE DE CONTACTO                                      */}
      {/* =================================================================== */}
      <section className="bg-light py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark">Contáctanos</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            ¡Nos encantaría saber de ti! Llámanos, envíanos un correo o completa el formulario para agendar tu cita.
          </p>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 2: INFORMACIÓN Y FORMULARIO                               */}
      {/* =================================================================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Columna Izquierda: Información de Contacto */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-dark mb-6">Información de la Clínica</h2>
              <div className="space-y-4">
                <InfoCard icon={<FiMapPin size={24} />} title="Dirección" content="C. Ontario 156, Chorrillos 15056" href="https://maps.app.goo.gl/TuEjxUfE9N3c5W6d9" />
                <InfoCard icon={<FiClock size={24} />} title="Horario de Atención" content="L-S: 8:00am - 9:00pm" />
                <InfoCard icon={<FiMail size={24} />} title="Correo Electrónico" content="oh.mydentist18@gmail.com" href="mailto:oh.mydentist18@gmail.com" />
                <InfoCard icon={<FiPhone size={24} />} title="Teléfono" content={phonen} href={`tel:${phonen}`} />
                <InfoCard icon={<FiMessageSquare size={24} />} title="WhatsApp" content={phoneNumberTwo} href={`https://wa.me/51994647290`} />
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.7502649611154!2d-76.9997815950192!3d-12.180114256938793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9d1ef5bd041%3A0x4247265294f33409!2sC.%20Ontario%20156%2C%20Chorrillos%2015056!5e0!3m2!1sen!2spe!4v1717736011326!5m2!1sen!2spe"
                  height="300"
                  style={{ border: 0, width: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación de la clínica"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="lg:col-span-3 bg-light p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-dark mb-6">Agenda una Cita</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre y Apellido */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                    {formErrors.nombre && <p className="mt-1 text-sm text-red-600">{formErrors.nombre}</p>}
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                    <input type="text" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} placeholder="Tu apellido" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                  </div>
                  {/* Correo y Teléfono */}
                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input type="email" name="correo" id="correo" value={formData.correo} onChange={handleChange} placeholder="tu@correo.com" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                    {formErrors.correo && <p className="mt-1 text-sm text-red-600">{formErrors.correo}</p>}
                  </div>
                  <div>
                     <label htmlFor="numero" className="block text-sm font-medium text-gray-700 ">Número de Teléfono</label>
                     <PhoneInput defaultCountry="PE" value={formData.numero} onChange={handlePhoneChange} className="mt-1 react-phone-input pl-4 text-text4 font4 bg17 h-[49px]" />
                     {formErrors.numero && <p className="mt-1 text-sm text-red-600">{formErrors.numero}</p>}
                  </div>
                </div>
                {/* Fecha */}
                <div className="mt-6">
                  <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha de Preferencia</label>
                  <DatePicker selected={formData.fecha} onChange={handleDateChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" dateFormat="dd/MM/yyyy" />
                </div>
                {/* Mensaje */}
                <div className="mt-6">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea name="mensaje" id="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos el motivo de tu consulta..." className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                  {formErrors.mensaje && <p className="mt-1 text-sm text-red-600">{formErrors.mensaje}</p>}
                </div>
                {/* Botón de envío */}
                <div className="mt-8 text-right">
                  <button type="submit" disabled={isSubmitting} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400">
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECCIÓN 3: BANNER FINAL                                           */}
      {/* =================================================================== */}
      <section className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${chorrillosImage})` }}>
        <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight shadow-text">
            Nuestra clínica está lista para responder tus preguntas y evaluar tus síntomas.
          </h2>
        </div>
      </section>
      
    </div>
  );
};

export default Contacto;
