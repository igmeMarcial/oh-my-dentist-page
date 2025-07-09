import React from "react";
import "../files/pages/blogs.css";

function Blog({ image, title, text, date }) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform  transition-transform duration-300 ease-in-out">
      <div className="w-full h-56">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Imagen del artículo: ${title}`}
        />
      </div>
      <div className="flex-grow flex flex-col p-6">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-medium">
            Publicado el {date}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Blog;