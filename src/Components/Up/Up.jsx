"use client";
import React, { useState, useEffect } from "react";
import { FaJetFighterUp } from 'react-icons/fa6';

const Up = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
                <div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
          onClick={handleTop}
          className="flex animate-bounce fixed bottom-[100px] right-[20px] items-center justify-center w-[60px] h-[60px] font-bold text-[--main-color] z-[555555] transition-all border-[3px] border-[--main-color] rounded-full cursor-pointer hover:bg-[--main-color] hover:text-white"
        >
          <FaJetFighterUp size={36} />
        </div>
      )}
    </>
  );
};

export default Up;
