import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ imageSrc, title, subtitle }) {
 

 
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer  bg-white" >
      {" "}
      <img className="w-full" src={imageSrc} alt="Card Image" />{" "}
      <div className="px-6 py-4">
        {" "}
        <div className="font-bold text-xl mb-2">{title}</div>{" "}
        <p className="text-gray-700 text-base">{subtitle}</p>{" "}
      </div>{" "}
    </div>
  );
}

export default Card;
