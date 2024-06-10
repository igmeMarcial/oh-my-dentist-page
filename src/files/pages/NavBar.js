import React, { useEffect, useState } from "react";
import ommydentist from "../img/static/logoClinic.png";
import logoOh from "../img/static/logoClinic.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import calling from "../img/Calling.svg";

const SvgClose = (props) => {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
      {...props}
    >
      <path d="M4.293 18.293 10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414Z" />
    </svg>
  );
};

const NavBar = ({ smenu, setsmenu, phonen, link }) => {
  const [screenW, setScreenW] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const handleClick = () => {
    setsmenu(!smenu);
  };

  const handleResize = () => {
    const isScreenSmall = window.innerWidth < 1920;
    setScreenW(isScreenSmall);

    if (window.innerWidth >= 768 && smenu) {
      setsmenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smenu]); // Add smenu as a dependency
  return (
    <div className="w-full bg-bg1 hamburger-menu">
      <div
        className={`${
          screenW ? "cursor-pointer" : ""
        }   mx-0 mt-2  md:mx-auto  sm:w-[640px] w-[100%] lg:w-[800px] md:w-[768px] xl:w-[1050px] 2xl:w-[1240px] rounded-[10px] flex justify-center items-center md:px-[25px] lg:px-[25px] transition-all duration-500 sm:px-[20px] px-[30px] xl:px-[0px] h-[91px] bg-bg1`}
      >
        <div
          className={
            "md:flex hidden justify-center items-center flex-row  lg:gap-[60px] md:gap-[50px] xl:gap-[70px]"
          }
        >
          <NavLink to={"/"}>
            <img
              className={
                "xl:w-[196px] lg:w-[120px] md:w-[130px] cursor-pointer max-h-[70px] object-contain"
              }
              src={logoOh}
              alt=""
            />
          </NavLink>

          <div
            className={
              "flex lg:gap-[20px] md:gap-[20px] xl:gap-[30px] 2xl:gap-[60px] md:text-[14px] lg:text-[14px] xl:text-[16px] flex-row asd pr-12"
            }
          >
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/"}
              className={" font2 cursor-pointer"}
            >
              Inicio
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/services"}
              className={"text-darktext1 font2 cursor-pointer"}
            >
              Tratamientos
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/blogs"}
              className={"text-darktext1 font2 cursor-pointer"}
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/about"}
              className={"text-darktext1 font2 cursor-pointer"}
            >
              Nosotros
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/contact"}
              className={"text-darktext1 font2 cursor-pointer"}
            >
              Contacto
            </NavLink>
          </div>
        </div>
        <div
          className={
            " md:flex hidden 2xl:w-[204px] xl:ml-4 lg:w-[150px] md:w-[160px] md:h-[40px] xl:w-[200px] lg:h-[40px] hover:bg-bg6 bg4 xl:h-[55px] cursor-pointer xl:gap-[10px] lg:gap-[5px] 2xl:gap-[16px] justify-center items-center bg-bg2 rounded-xl"
          }
        >
          <img className={"xl:w-[24px] lg:w-[16px]"} src={calling} alt="" />
          <h2
            className={
              "font2 xl:text-base lg:text-sm 2xl:text-lg flex justify-center items-center tracking-wider text-white"
            }
          >
            <Link target="_blank" to={link}>
              {" "}
              Contáctenos
            </Link>
          </h2>
        </div>
        <div
          className={
            "flex md:hidden justify-between md:px-[50px] sm:px-[0px] items-center w-full h-full gap-4"
          }
        >
          <img
            className={
              "pepe xl:w-[176px] lg:w-[130px] md:w-[130px] cursor-pointer max-h-[70px] object-contain"
            }
            src={ommydentist}
            alt="dentis"
          />

          <div className="menu" onClick={handleClick}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              width="2em"
              height="2em"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M19 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 7a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"
              />
            </svg>
          </div>
          <div
            className={
              "hidden flex 2xl:w-[204px] lg:w-[150px] md:w-[160px] md:h-[40px] xl:w-[200px] lg:h-[40px] bg4 xl:h-[55px] cursor-pointer xl:gap-[10px] lg:gap-[5px] 2xl:gap-[16px] justify-center items-center bg-bg2 rounded-xl"
            }
          >
            <img className={"xl:w-[24px] lg:w-[16px]"} src={calling} alt="" />
            <h2
              className={
                "font2 xl:text-base lg:text-sm 2xl:text-lg flex justify-center items-center tracking-wider text-white"
              }
            >
              Contáctenos
            </h2>
          </div>
        </div>
      </div>

      {smenu && (
        <div
          className={`bg-white fixed w-full bottom-0 top-0 z-50 md:hidden flex justify-start items-center flex-col h-screen transition-transform duration-300 ${
            smenu ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <div
            className={
              "flex md:hidden justify-between md:px-[50px] sm:px-[0px] items-center w-full gap-4 px-[30px] pt-[77px]"
            }
          >
            <NavLink to={"/"}>
              <img
                className={
                  "xl:w-[196px] lg:w-[120px] md:w-[130px] cursor-pointer max-h-[70px] object-contain"
                }
                src={logoOh}
                alt=""
              />
            </NavLink>
            <div className="menu" onClick={handleClick}>
              {smenu ? (
                <SvgClose />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M19 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 7a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"
                  />
                </svg>
              )}
            </div>
          </div>
          <ul
            className={
              "flex  flex-col gap-[30px] text-2xl font2 text-text2 mt-10 w-1/2"
            }
          >
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/"}
              className={" font2 cursor-pointer py-2"}
            >
              Inicio
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/services"}
              className={"text-darktext1 font2 cursor-pointer py-2"}
            >
              Servicios
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/blogs"}
              className={"text-darktext1 font2 cursor-pointer py-2"}
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/about"}
              className={"text-darktext1 font2 cursor-pointer py-2"}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              onClick={() => {
                setsmenu(false);
              }}
              to={"/contact"}
              className={"text-darktext1 font2 cursor-pointer py-2"}
            >
              Contacto
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
