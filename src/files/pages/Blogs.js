import React, { useState } from "react";
import dish1 from "../img/anasayfa/dish1.png";
import rightcircle from "../img/anasayfa/Arrow - Right Circle.png";
import disestetigi from "../img/anasayfa/disestetigi.png";
import dishimplant from "../img/anasayfa/dishasd.png";

import disbeyazlatma from "../img/anasayfa/disbeyazlatma.png";
import acildis from "../img/anasayfa/acildis.png";
import onleme from "../img/anasayfa/onleme.png";
import { Swiper, SwiperSlide } from "swiper/react";
import docphoto1 from "../img/anasayfa/doctors/Group 1000001017.png";
import docphoto2 from "../img/anasayfa/doctors/Group 1000001018.png";
import docphoto3 from "../img/anasayfa/doctors/Group 1000001019.png";
import docphoto4 from "../img/anasayfa/doctors/Group 1000001020.png";
import docphoto5 from "../img/anasayfa/doctors/Mask group.png";
import AccordionEmre from "./AccordionEmre";
import oyununkaderi from "../img/anasayfa/oyunkaderi.png";
import Footer from "./Footer";
import searchimg from "../img/blogs/search.png";
import articles1 from "../img/anasayfa/articles/articles1.png";
import articles2 from "../img/anasayfa/articles/articles2.png";
import articles3 from "../img/anasayfa/articles/articles3.png";
import articles4 from "../img/anasayfa/articles/articles4.png";
import articles5 from "../img/anasayfa/articles/articles5.png";
import articles6 from "../img/anasayfa/articles/articles6.png";
import articles7 from "../img/anasayfa/articles/articles7.png";
import articles8 from "../img/anasayfa/articles/articles8.png";

import blogfoto1 from "../img/blogs/Rectangle 652.png";
import blogfoto2 from "../img/blogs/Rectangle 653.png";
import blogfoto3 from "../img/blogs/Rectangle 654.png";
import blogfoto4 from "../img/blogs/Rectangle 655.png";

import downicon from "../img/blogs/Arrow - Down 2.png";

import oynatdeneme from "../img/blogs/oynatdeneme.png";
import VideoFile from "./VideoFile";
import { useNavigate } from "react-router-dom";
import { articulos } from "../../data/data";
import Blog from "../../components/Blog";
import "./blogs.css";
const Blogs = () => {
  const navigate = useNavigate();
  const handleRedirect = (item) => {
    navigate(`${item}`);

    window.scrollTo(0, 0);
  };
  return (
    <div className={" flex flex-col"}>
      <section className={" section-main-container "}>
        <div className="main-container-blog">
          <div
            style={{ marginLeft: "-10px", marginRight: "-10px" }}
            className="collection-list"
          >
            {articulos.map((item, index) => (
              <Blog
                key={item.id}
                image={item.imgUrl}
                title={item.title}
                text={item.textInfo}
                date={item.posted}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
