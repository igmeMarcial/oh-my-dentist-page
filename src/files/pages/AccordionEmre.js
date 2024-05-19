import React, { useState } from "react";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import arti from "../img/anasayfa/artt.png";
import "./accordion.css";
import eksi from "../img/anasayfa/eksi.png";

const AccordionEmre = () => {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <img
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
            src={isEnter ? eksi : arti}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left text-base md:text-lg p-8 hover:bg-slate-100 ${
            isEnter && "bg-slate-200"
          }`,
      }}
      contentProps={{
        className: "transition-height text-base duration-200 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    />
  );

  return (
    <div className={"flex justify-center mt-[46px] items-center"}>
      <div className="mx-2 my-4 w-[330px] md:w-[630px] ">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={200}>
          <AccordionItem header="¿Qué es un dentista cosmético?" initialEntered>
            Un dentista cosmético es un médico que se centra en mejorar la
            estética de los dientes y las encías. Es un campo que no se enseña
            en las facultades de odontología debido a que la formación
            universitaria se centra en el mantenimiento de la salud dental.
            Aquellos que opten por seguir una educación superior y una formación
            rigurosa pueden aprender sobre el complejo campo de la cosmética
            después de realizar odontología general o de rutina durante un
            período de tiempo. Es importante tener en cuenta que todos los
            odontólogos están capacitados para conservar la salud, pero la
            experiencia y el conocimiento en estética son variables y ningún
            organismo o academia garantiza la calidad.
          </AccordionItem>

          <AccordionItem header="¿Es segura la odontología cosmética?">
            La odontología cosmética en Inglaterra es increíblemente segura y no
            debes preocuparte en absoluto al acudir a una cita. Especialmente no
            con Marylebone Smile Clinic, ubicada en el corazón del distrito de
            atención médica privada de Londres, Harley Street. Siempre le
            aconsejaremos que haga su propia investigación y busque opiniones de
            familiares y amigos para asegurarnos de que está tomando la decisión
            correcta para usted en ese momento. El turismo dental, sin embargo,
            es otra historia. Visitar países como Turquía para recibir
            tratamientos dentales cosméticos no es necesariamente seguro y no se
            recomienda, ya que en otros países estos servicios de salud tienen
            un nivel más bajo que los de Inglaterra. Por encima de esto,
            generalmente es recomendable recibir atención médica y dental en el
            país en el que pretende vivir a largo plazo. Esto es para que pueda
            mantener un punto de contacto con una clínica para mantener
            cualquier trabajo dental que tenga o si surge un problema o
            accidente.
          </AccordionItem>

          <AccordionItem header="¿La odontología cosmética está disponible en el NHS?">
            No, la odontología cosmética no está cubierta por la asistencia
            sanitaria pública del NHS. Nuestros servicios se definen como
            estéticos y electivos por naturaleza y, por lo tanto, no están
            calificados como necesarios para la salud y el funcionamiento de sus
            dientes y boca. Además, no sería apropiado asignar recursos a través
            del Servicio Nacional de Salud en su forma actual.
          </AccordionItem>
          <AccordionItem header="¿Por qué es famosa Harley Street?">
            El distrito médico de Harley Street en Marylebone, Londres, ha sido
            el hogar de los mejores profesionales sanitarios privados del Reino
            Unido desde el siglo XIX. Algunos de los nombres más influyentes del
            sector sanitario han pasado tiempo trabajando en Harley Street, como
            Florence Nightingale en la década de 1850 y Lionel Logue en la
            década de 1930. Hoy en día, Harley Street mantiene su reputación de
            albergar clínicas con los mejores estándares de atención médica
            privada y específicamente clínicas de estética privadas como la
            nuestra en Marylebone Smile Clinic. Estas clínicas atraen a miembros
            de la población en general hasta celebridades y otras figuras
            famosas que viajan desde todo el mundo en busca de servicios
            cosméticos.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionEmre;
