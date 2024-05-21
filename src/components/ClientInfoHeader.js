import React from "react";
import HeaderImage from "../utils/Header.png";

const ClientInfoHeader = () => {
  return (
    <div className="header-container flex justify-between items-center bg-blue-500 p-5 font-sans shadow-md">
      <img src={HeaderImage} alt="logo" className="logo-image" />
      <p>
        Hello, Welcome to the
        <span className="ml-1 text-white">Pest Control Services</span>
      </p>
    </div>
  );
};

export default ClientInfoHeader;
