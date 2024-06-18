import React from "react";
import backgroundImage from "../assets/download.jpeg"; // Adjust the path as needed
import logo from "../assets/logo.png"; // Adjust the path as needed
import LoginButton from "../auth/LoginButton";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full height
    // width: '100vw', // Full width
  };

  return (
    <div style={style}>
      <div className="flex justify-center items-end">
        <img src={logo} className="h-32 w-32 mt-8" alt="" />
      </div>
      <h1 className="text-center mt-2 text-xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-extrabold font-sans ">
        Mazhi Bus
      </h1>
      <p></p>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 mb-4">
        <LoginButton />
        <div className="text-center text-[12px] mt-2 text-white">
          By using this application, you agree to our{" "}
          <Link to="/terms" className="text-blue-500 underline">
            Terms and Conditions
          </Link>
          .
        </div>
      </div>
      <div className="grid grid-cols-6 w-full absolute bottom-0">
        <div className="h-1 bg-yellow-400"></div>
        <div className="h-1 bg-pink-400"></div>
        <div className="h-1 bg-gray-400"></div>
        <div className="h-1 bg-indigo-400"></div>
        <div className="h-1 bg-blue-400"></div>
        <div className="h-1 bg-green-400"></div>
      </div>
    </div>
  );
};

export default GetStarted;
