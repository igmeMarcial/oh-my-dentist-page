import React, { useState } from "react";

import Footer from "./Footer";

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
