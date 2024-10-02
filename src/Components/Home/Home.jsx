"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
  return <>
  <div className='bg-[--main-bg] text-white '>
  <div className='w-[95%] mx-auto pb-[100px] pt-[150px]'>
<div className='flex flex-col items-start justify-between gap-4 md:items-center md:flex-row '>
<motion.div
initial={{ y:250 }}
transition={{
  duration: 0.7,
  type: "tween",
}}
whileInView={{
  y: 0,
}}



className='flex md:w-[500px] w-full  flex-col items-start gap-4'>
      <h1 className='relative after:content-[""] after:absolute after:w-[80px] after:h-[4px] after:bg-[--main-color] after:rounded-md after:left-0 after:top-[-8px] text-[35px] font-bold'>Welcome To <span className='text-[--main-color]'>vitruvius</span> Project </h1>
      <p className='text-[20px] capitalize leading-[1.8]'>Do you have more to say and show? You can do it in this section. Add pictures and a short description to show visitors more of whatever it is you want.</p>
      <span className='text-[22px] text-[--main-color] font-bold'>Add a Description Here.</span>
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
   
    
    className='mt-[40px] md:mt-0'>
      <Image src={require("../../Images/myon.svg")} className='animate' />
    </motion.div>
</div>
  </div>
  </div>

  </>
}

export default Home