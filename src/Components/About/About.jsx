
"use client";

import Lottie from 'lottie-react';
import React, { useState } from 'react';
import AboutAnimation from "../../Images/About.json";
import Image from 'next/image';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { team } from '../team';
import Link from 'next/link';
import { X } from 'lucide-react';
import {
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import {  Github } from "lucide-react";
import { motion } from 'framer-motion';

const About = () => {
  const [popupImage, setPopupImage] = useState(null);

  const pop = (e) => {
    setPopupImage( e.target.src.replace(window.location.origin, ''));
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <div>
        <div className="pt-[150px] bg-[--main-bg] text-white">
          <div className="w-[95%] mx-auto">
            <div className="flex flex-col items-center justify-around md:flex-row">
              <motion.p
              initial={{ scale: 0.5 }}
              transition={{
                duration: 1.3,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              
              className='w-full md:w-[600px] capitalize text-[23px] relative after:content-[""] after:top-[-10px] after:left-0 after:absolute after:w-[120px] after:rounded-full after:h-[4px] after:bg-[--main-color] '>
                "We are a dedicated team of <span className='font-bold text-[--main-color]'>developers</span> and creatives, passionate about delivering innovative and high-quality tech solutions that meet our clients' needs. Our goal is to provide the best user experience through modern designs and advanced applications that align with the demands of the digital age. We believe in effective communication and building long-term relationships with our clients, striving to offer exceptional services and continuous support to help them achieve their goals."
              </motion.p>
              <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 1.3,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              
              >
              <Lottie animationData={AboutAnimation} className="max-w-full" />

              </motion.div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="bg-[#0009] py-[100px] overlay">
            {/* Swiper */}
            <Swiper
              spaceBetween={5}
              slidesPerView={3}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {team.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                   initial={{ scale: 0.5 }}
                   transition={{
                     duration: 1.3,
                     type: "tween",
                   }}
                   whileInView={{
                     scale: 1,
                   }}
                  id='parent' className="flex pb-2 flex-col border-[2px] items-center border-[--main-color] gap-3  bg-[--main-bg] text-white rounded-lg ">
                    <Image onClick={pop} className="w-[200px] h-[200px]  rounded-full border-4 border-[--main-color]  mt-3 cursor-pointer " width={250} height={200} src={item.src} alt={item.name} />
                    <div className='flex flex-col items-center gap-2 mb-[5px]'>
                      <div className="flex flex-col items-center gap-2 ">
                        <h1 className="text-[--main-color] font-bold capitalize text-[22px]">{item.name}</h1>
                        <p className="capitalize text-[17px] text-center">{item.track}</p>
                      </div>
                      <div className="px-3 ">
                        {item.scoial.map((soc, idx) => (
                          <div key={idx} className="flex items-center gap-3 mb-2">
                            <Link href={soc.Facehref}>              <FaFacebook className="cursor-pointer opacity-[0.8] transition-all group-hover:text-white text-[#4267B2] hover:opacity-[1]" size={28} />
                            </Link>
                            <Link href={soc.Githubhref}>            <Github className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color]   hover:opacity-[1]"  size={28} />
                            </Link>
                            <Link href={soc.Linkedhref}>              <FaLinkedin className="cursor-pointer text-[#0077b5] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]" size={28} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {popupImage && (
        <div className="fixed top-[44px]  left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70" onClick={closePopup}>
          <div className="relative border-[10px] border-white">
            <Image width={450} height={100} src={popupImage} alt="Popup" className="md:w-[450px] w-full h-auto rounded-lg" />
            <X onClick={closePopup} className='absolute top-[-22px] right-[-22px] cursor-pointer bg-[--main-color] w-[50px] h-[50px] rounded-full border-[2px]  text-center border-[--main-color] flex justify-center items-center  ' color='white' size={28}/>
            </div>
        </div>
      )}
    </>
  );
};

export default About;
