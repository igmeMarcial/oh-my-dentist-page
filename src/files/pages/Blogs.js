import React from "react";
import { articulos } from "../../data/data";
import Blog from "../../components/Blog";
import { Helmet } from 'react-helmet-async';
import "./blogs.css";
const Blogs = () => {
  return (
    <div className={" flex flex-col"}>
      <Helmet>
        <title>Oh My Dentist Perú | Blogs</title>
        <meta name="description" content="Explora nuestros blogs para obtener información valiosa sobre odontología, consejos y más." />
        <link rel="canonical" href="https://www.ohmydentistperu.com/blogs" />
      </Helmet>
      <section className={" section-main-container "}>
        <div className="main-container-blog">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {articulos.map((item) => (
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
