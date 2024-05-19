import React from "react";
import articles1 from "../img/anasayfa/articles/articles1.png";
import articles2 from "../img/anasayfa/articles/articles2.png";
import articles3 from "../img/anasayfa/articles/articles3.png";
import articles4 from "../img/anasayfa/articles/articles4.png";
import articles5 from "../img/anasayfa/articles/articles5.png";
import articles6 from "../img/anasayfa/articles/articles6.png";
import articles7 from "../img/anasayfa/articles/articles7.png";
import articles8 from "../img/anasayfa/articles/articles8.png";
import { useNavigate } from "react-router-dom";

function NewAticles() {
  const navigate = useNavigate();
  const handleRedirect = (item) => {
    navigate(`${item}`);

    window.scrollTo(0, 0);
  };
  return (
    <div className={"mt-[140px] w-full h-full justify-center items-center"}>
      <div
        className={
          "flex flex-col sm:w-fit w-[330px] items-center md:items-start xl:ml-16 lg:ml-12 md:ml-24 2xl:ml-24 justify-center"
        }
      >
        <h2
          className={
            "font1 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl  2xl:text-6xl"
          }
        >
          News & Articles
        </h2>
        <h2
          className={
            "font4 xl:text-lg text-md text-lg 2xl:text-xl w-[250px] sm:text-start text-center md:w-[515px] mt-[20px] text-text2 "
          }
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.{" "}
        </h2>
      </div>

      <div
        className={
          "flex flex-col mt-[71px] justify-center items-center  gap-[60px]"
        }
      >
        <div
          className={
            "grid xl:grid-cols-3 lg:w-[850px] sm:w-[600px] w-[330px] xl:w-fit grid-cols-1 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-[50px]"
          }
        >
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative "
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles1} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 1</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles2} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 2</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles3} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 3</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles4} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 4</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles5} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 5</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles6} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 6</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles7} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 7</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
          <div
            className={
              "bg8 cursor-pointer p-[20px] lg:pb-[60px] xl:pb-[40px] relative"
            }
          >
            <div className={"w-full h-fit flex justify-center items-center"}>
              <img className={"xl:w-[265px]"} src={articles8} alt="" />
            </div>
            <div
              className={
                "bg-bg2 mt-[27px] w-fit h-[35px] px-[15px] flex justify-center items-center py-5 rounded-md"
              }
            >
              <h2 className={"text-white font4 text-base"}>Kategori 8</h2>
            </div>
            <h2 className={"text-xl font2 mt-[14px]"}>Care of your Teeth</h2>
            <h3 className={"text-text2 mt-[10px] text-lg xl:text-xl w-[250px]"}>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <h4 className={"absolute text-lg right-4 bottom-3"}>
              ~Yazar Adı Soyadı
            </h4>
          </div>
        </div>

        <div className={"w-full h-full flex justify-center items-center"}>
          <div
            onClick={() => {
              handleRedirect("/blogs");
            }}
            className={
              "cursor-pointer hover:bg-bg6 bg-bg2 mt-[17px] w-fit h-[35px] px-[30px] py-[30px] flex justify-center items-center rounded-md"
            }
          >
            <h2 className={"text-white font2 text-base"}>Check out more</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAticles;
