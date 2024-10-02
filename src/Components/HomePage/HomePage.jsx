"use client"
import Lottie from 'lottie-react';
import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import home from "../../Images/homepage.json"
import { motion } from 'framer-motion';

const HomePage = () => {
  return <>
  <div id='bg' >
    <div className=' pt-[100px]  bg-[#0009] '>
<div className='w-[95%] mx-auto'>
<div className='flex flex-col items-center justify-around md:flex-row'>
<motion.div
 initial={{ y:250 }}
 transition={{
   duration: 0.7,
   type: "tween",
 }}
 whileInView={{
   y: 0,
 }}

>
      <Lottie 
className="max-w-full"
animationData={home}

/>
      </motion.div>
    <motion.div
    initial={{ y:-250 }}
    transition={{
      duration: 0.7,
      type: "tween",
    }}
    whileInView={{
      y: 0,
    }}
   
    
    >
      <h1  className="relative after:absolute after:content-[''] after:w-[100px] after:h-[5px] after:rounded-full after:bg-[--main-color] after:left-0 after:top-[-10px] text-[35px] text-[--main-color] font-bold">
      <Typewriter
                  words={[
                    "Welcome To Construction Project"
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
      </h1>

                <p className='text-[20px] leading-[1.8] text-white font-bold capitalize'>are facilitating the creation of your property from scratch to finish
                </p>
    </motion.div>
</div>

</div>
    </div>
  </div>
  </>
}

export default HomePage