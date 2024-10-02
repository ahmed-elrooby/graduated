import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[--main-bg]  p-4">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col-reverse items-center justify-between pb-4 border-b-4 border-white md:flex-row">
            
            <div className="md:w-[500px] text-[17px] w-full text-white leading-[1.7] capitalize">
            This site specializes in construction. It's available to carry out any project for our clients whether by sending 3D/2D models of private projects or choosing from our site. Moreover, our clients can send us models to calculate the costs for them.
            </div>
            <Image
              src={require("../../Images/logo.jpeg")}
              className="w-[80px] border-[3px] border-white  hover:border-[--main-color] transition-all hover:scale-[1.1] h-[80px] rounded-full"
              alt="Logo"
            />

          </div>
          <h1 className="text-[--main-color] text-[25px] font-bold text-center mt-2">© 2024 Ahmed El Rooby. All Rights Reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
