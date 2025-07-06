import React from "react";

import { useNavigate } from "react-router-dom";
import { articulos } from "../../data/data";
import Blog from "../../components/Blog";
import { Helmet } from 'react-helmet-async';
import "./blogs.css";
const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className={" flex flex-col"}>
      <Helmet>
        <title>Oh My Dentist Perú | Blogs</title>
        <meta name="description" content="Explora nuestros blogs para obtener información valiosa sobre odontología, consejos y más." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/blogs" />
      </Helmet>
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
    </div>
  );
};

export default Blogs;
