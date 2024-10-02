"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Style } from "../Styles";
import  Construction3d from "../../Images/Construction.json"
import Lottie from "lottie-react";
import { motion } from 'framer-motion';


const Construction = () => {
  return <>
  <div>
    <div className='w-[95%] mt-[150px] pb-[50px] mx-auto'>
<div>
<div className="mt-[20px] mb-[30px] flex items-center justify-around flex-col md:flex-row">
            <motion.div
            
            initial={{ scale: 0.5 }}
            transition={{
              duration: 1.3,
              type: "tween",
            }}
            whileInView={{
              scale: 1,
            }}
            
            className="max-w-full ">
                        <h1 className="relative after:absolute after:content-[''] after:w-[100px] after:h-[4px] after:rounded-full after:bg-[--main-color] after:left-0 after:top-[-10px] mb-4 text-3xl text-[--main-color] font-bold">Architectural Styles
                        </h1>
                        <p className="mb-6 text-[20px] leading-[1.8] capitalize">
                        Choose with a unique selection of different architectural styles around the world

</p>
            </motion.div>
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
              <Lottie 
className="max-w-full"
animationData={Construction3d}

/>
            </motion.div>

        </div>
    <Swiper
              spaceBetween={5}
              slidesPerView={3}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
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
              {Style.map((st, idx) => (
                <SwiperSlide className="pb-[30px]" key={idx}>
                 <motion.div
                  initial={{ scale: 0.5 }}
                  transition={{
                    duration: 1.3,
                    type: "tween",
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                 key={idx} className="border-2 rounded-lg  border-[--main-color]">
              <div >
                <iframe className="w-full  h-[250px]" src={st.src} title={st.type}></iframe>
              </div>
              <div className="flex flex-col items-center gap-2 p-2">
                <h1 className="text-[22px] capitalize font-bold text-[--main-color]">{st.type}</h1>
                <p className="text-[17px] capitalize">{st.desc}</p>
                <label className="flex items-center box">
  <input
    type="radio"
    name="architecture"
    value="german"
    className="hidden peer"
  />
  <span className="relative capitalize font-bold group flex items-center w-fit py-1.5 pl-8 pr-2 border border-[--main-color] text-[--main-color] rounded-md before:absolute before:content-[''] before:w-3.5 before:h-3.5 before:left-2 before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-[--main-color] before:rounded-full peer-checked:bg-[--main-color] peer-checked:text-white peer-checked:capitalize peer-checked:before:w-3.5 peer-checked:before:h-3.5 peer-checked:before:border-4 peer-checked:before:border-white peer-checked:before:bg-[--main-color]">
    {st.collection}
  </span>
</label>



              </div>
            </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>


<div className="pt-[100px] pb-[100px] uplaoding">
    <div 
    
    
            
    className="flex flex-col items-center gap-[50px]">
    <motion.div 
    
    initial={{ scale: 0.5 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
    className="h-[200px] w-fit   font-bold py-[10px] mx-auto px-[30px] flex justify-center items-center text-center flex-col gap-3 rounded-xl bg-[#19283ff0]">
            <div 
            
            >
            <h3 className=" capitalize text-white text-[25px]">upload 3D model</h3>

<input className="text-[16px] outline-none shadow-sm cursor-pointer bg-white w-[232px] rounded-[50px]" type="file"name="three"placeholder="please choose your 3d model"/>
            </div>
        </motion.div>


        <motion.div
        initial={{ scale: 0.5 }}
        transition={{
          duration: 1.3,
          type: "tween",
        }}
        whileInView={{
          scale: 1,
        }}
        className="h-[200px] py-[50px] w-fit   font-bold  mx-auto px-[30px] flex justify-center items-center text-center flex-col gap-3 rounded-xl bg-[#19283ff0]">
            <h3 className=" capitalize text-white text-[25px]">upload 3D model</h3>

            <input className="text-[16px] outline-none shadow-sm cursor-pointer bg-white w-[232px] rounded-[50px]" type="file"name="three"placeholder="please choose your 3d model"/>
        </motion.div>


        <motion.div 
        initial={{ scale: 0.5 }}
        transition={{
          duration: 1.3,
          type: "tween",
        }}
        whileInView={{
          scale: 1,
        }}
        className="h-[200px] py-[50px] w-fit   font-bold  mx-auto px-[30px] flex justify-center items-center text-center flex-col gap-3 rounded-xl bg-[#19283ff0]">
            <h3 className=" capitalize text-white text-[25px]">upload CSV file</h3>

            <input className="text-[16px] outline-none shadow-sm cursor-pointer bg-white w-[232px] rounded-[50px]" type="file"name="three"placeholder="please choose your 3d model"/>
        </motion.div>



        <motion.div
        initial={{ scale: 0.5 }}
        transition={{
          duration: 1.3,
          type: "tween",
        }}
        whileInView={{
          scale: 1,
        }}
        className="bg-[#19283ff0] rounded-2xl py-[30px] text-white px-4"> 
            <h1 className="mb-5 text-center text-[--main-color] font-bold text-[33px]">Go</h1>
            <div className="flex items-center gap-[15px]">
                <p className="text-[20px] capitalize leading-[1.8]">Please go to our app to predict the price of your house and download a CSV file that predicted

</p>
<input className="text-[22px] text-white bg-[--main-color] font-bold px-[30px] py-2 rounded-xl cursor-pointer transition-all hover:bg-white hover:text-[--main-color]" type="submit" value="Save" />
            </div>
        </motion.div>
    </div>

</div>

</div>
    </div>
  </div>
  </>
}

export default Construction