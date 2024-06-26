import React from "react";
import gamadent2 from "../img/logoOhMy.jpeg";
import { Link, NavLink } from "react-router-dom";
import facebook from "../img/anasayfa/social media/facebook.png";
import instagram from "../img/anasayfa/social media/instagram.png";
import tiktok from "../img/anasayfa/social media/tiktok.png";

const linkSocialMedia = {
  fc: "https://www.facebook.com/profile.php?id=61558587249531",
  intagram: "https://www.instagram.com/ohmydentistperu",
  titkok: "https://www.tiktok.com/@ohmydentistperu",
};

const Footer = () => {
  return (
    <div className={" flex justify-center items-center"}>
      <div
        className={
          "mt-[100px] md:w-[700px] w-[350px] lg:w-[900px] xl:w-[1100px] flex flex-col justify-between items-center"
        }
      >
        <div
          className={
            "w-full flex flex-col md:flex-row gap-[25px] justify-between items-center"
          }
        >
          <img
            className={"sm:m-0 mb-4 xl:w-[176px] lg:w-[120px] md:w-[130px]"}
            src={gamadent2}
            alt=""
          />
          <ul
            className={
              "flex flex-row wsd md:gap-[20px] lg:gap-[30px] md:text-sm lg:text-[16px] text-xs gap-[15px] font2 text-text2"
            }
          >
            <NavLink
              to={"/"}
              className={" font2 cursor-pointer hover:text-[#]"}
            >
              Inicio
            </NavLink>
            <NavLink
              to={"/services"}
              className={"text-darktext1 font2 cursor-pointer hover:text-[#]"}
            >
              Tratamientos
            </NavLink>
            <NavLink
              to={"/blogs"}
              className={"text-darktext1 font2 cursor-pointer hover:text-[#]"}
            >
              Blogs
            </NavLink>
            <NavLink
              to={"/about"}
              className={"text-darktext1 font2 cursor-pointer hover:text-[#]"}
            >
              Nosotros
            </NavLink>
            <NavLink
              to={"/contact"}
              className={"text-darktext1 font2 cursor-pointer hover:text-[#]"}
            >
              Contacto
            </NavLink>
          </ul>
        </div>
        <div
          className={
            "w-full 2xl:-[1350px] h-[2px] md:mt-[30px] mt-[20px] bg-black"
          }
        ></div>
        <div
          className={
            "w-full mt-[20px] md:my-[20px]   flex flex-col  mb-6 md:flex-row justify-between items-center"
          }
        >
          <h1
            className={
              "text-sm lg:w-[500px] w-[270px] text-center md:w-full flex justify-start items-center"
            }
          >
            Hecho por ® ohmydentistperu.com
          </h1>
          <div className={"flex flex-row gap-5 md:m-0 mt-6 lg:gap-4  "}>
            <Link to={linkSocialMedia.fc}>
              <img
                className={"w-[25px] cursor-pointer"}
                src={facebook}
                alt=""
              />
            </Link>
            <Link to={linkSocialMedia.intagram}>
              <img
                className={"w-[25px] cursor-pointer"}
                src={instagram}
                alt=""
              />
            </Link>
            <Link>
              <img className={"w-[25px] cursor-pointer"} src={tiktok} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
