"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { array } from "./array";
import DarkMode from "../DarkMode/DarkMode";
import { array2 } from './array2';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setOpen(false); 
  };

  const { userId } = useAuth();

  return (
    <div className="mx-auto fixed top-0 w-full z-[1000]">
      <div className="shadow-lg  bg-[--main-bg]">
        <nav className="flex items-center py-[5px] justify-between w-[90%] m-auto ">
          <Link href="/">
            <Image
              src={require("../../Images/logo.jpeg")}
              className="w-[70px] border-[3px] border-white hover:border-[--main-color] transition-all hover:scale-[1.1] h-[70px] rounded-full"
              alt="Logo"
            />
          </Link>
          <div
            id="menu"
            onClick={() => setOpen(!open)}
            className="relative flex flex-col gap-1 cursor-pointer lg:hidden group animate-pulse"
          >
            <span
              className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-[20px] group-hover:w-[40px] bg-[--main-color] h-[3px] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
          <ul
  className={`lg:flex items-center lg:flex-row lg:gap-[20px]   bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-md ${
    open
      ? '  flex flex-col gap-3 mt-3 absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-white after:absolute after:top-[-14px] after:right-3 after:rotate-[45deg] top-[76px] right-[30px] w-[60%] border border-gray-200 p-4'
      : "hidden"
  } lg:mt-0`}
>
  {userId
    ? array2.map((item, index) => <>
     <li key={index} className="relative text-white">
          <Link
            className={`relative flex gap-2 items-center text-[20px] hover:after:w-full hover:text-[--main-color] font-bold w-full  py-2 capitalize rounded after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:rounded-lg ${
              open ? "w-[50%] text-[--main-color] items-start " : "w-full"
            } after:bg-[--main-color] after:transition-all after:duration-300 ${
              activeIndex === index ? "after:w-full text-[--main-color]" : ""
            }`}
            href={item.href}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </Link>
        </li>
    </>
       
      )
    : array.map((item, index) => (
        <li key={index} className="relative text-white">
          <Link
            className={`relative flex gap-2 items-center text-[20px] hover:after:w-full hover:text-[--main-color] font-bold w-full  py-2 capitalize rounded after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:rounded-lg ${
              open ? "w-[50%] text-[--main-color] items-start " : "w-full"
            } after:bg-[--main-color] after:transition-all after:duration-300 ${
              activeIndex === index ? "after:w-full text-[--main-color]" : ""
            }`}
            href={item.href}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </Link>
        </li>
      ))}
      {userId && (
    <li className="transition-all hover:scale-[1.3]"><UserButton /></li>
  )}
  <li>
    <DarkMode />
  </li>
  
</ul>
 
        </nav>
      </div>
    </div>
  );
};

export default Header;
