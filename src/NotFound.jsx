import React from "react";
import monkey from "../public/monkey.svg"; // adjust path if needed
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#989898] px-4 text-center">

      <img
        src={monkey}
        alt="Monkey Not Found"
        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
      />


      <h1 className="text-2xl md:text-4xl font-bold text-white mt-6">
        404 - Page Not Found
      </h1>

      <p className="text-sm md:text-base text-white/80 mt-2">
        The page you are looking for doesn’t exist.
      </p>

      <button
        onClick={() => navigate("/home")}
        className="mt-6 bg-[#c45022] hover:bg-[#d75a28] text-white px-6 py-2 rounded-xl transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;