import React from "react";
import { useNavigate } from "react-router-dom";

function Dentista({ img, name, specialty, biografia }) {
  const navigate = useNavigate();
  const handleRedirect = (item) => {
    navigate(`${item}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={
        "flex md:flex-col flex-col justify-center items-center lg:flex-row gap-[30px]"
      }
    >
      <img className={"md:w-[600px] lg:w-[306px]"} src={img} alt="" />
      <div
        className={
          "flex flex-col justify-center items-center lg:justify-start lg:items-start"
        }
      >
        <div className={"flex sm:flex-row flex-col gap-[16px] items-center"}>
          <h2 className={"font6 !2xl:text-xl text-2xl md:text-4xl"}>{name}</h2>
          <h3 className={"font4 2xl:text-sm text-base md:text-2xl"}>
            {specialty}
          </h3>
        </div>
        <div
          className={
            "font11 2xl:text-[18px] md:text-[20px] mt-4 lg:w-[600px] sm:w-[500px] w-[330px] md:w-[650px] xl:w-[757px] text-text2"
          }
        >
          {biografia}
        </div>
        <div
          onClick={() => {
            handleRedirect("/contact");
          }}
          className={
            "hover:bg-bg6 bg-bg2 w-fit mt-[35px] h-[35px] sm:p-[40px] p-[25px] lg:p-[25px] flex justify-center items-center rounded-md cursor-pointer cursor-pointer"
          }
        >
          <h2 className={"text-white font9 sm:text-3xl lg:text-lg"}>
            Haga una cita
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Dentista;
