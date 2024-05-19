import React from "react";
import "../files/pages/blogs.css";
function Blog({ image, title, text, date }) {
  return (
    <div className=" collection-item ">
      <div className="blog-link ">
        <div className="blog-container">
          <div className="text-left">
            <div className="text-dark-grey-text border-b-1 border-orange-500 ml-[20px] pt-0 font-roboto text-sm font-medium no-underline inline-block absolute bottom-0 left-0 right-0">
              {date}
            </div>
            <div></div>
            <h2 className="text-gray-700 text-left uppercase mt-0 mb-[15px] pt-[10px] pb-0 font-roboto font-semibold text-lg leading-none">
              {title}
            </h2>
            <p className="text-gray-700 font-roboto text-base font-normal leading-[1.5] text-left mt-[10px] mb-[10px]">
              {text}
            </p>
          </div>
        </div>
        <div className="blog-link-photo">
          <img
            className="object-cover w-full max-w-none h-full inline-block align-middle"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
