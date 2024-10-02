"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
const Contact = () => {
  return <>
  <div>
    <div className='w-[90%] m-auto mb-[50px] mt-[150px]'>
    <motion.p
    initial={{ scale: 0.5 }}
    transition={{
      duration: 1.3,
      type: "tween",
    }}
    whileInView={{
      scale: 1,
    }}
    
    className='text-[20px] mx-auto mb-4 font-bold w-full md:w-[450px] leading-[1.8] capitalize text-[--main-color] relative after:absolute after:content-[""] after:top-[-6px] after:left-0 after:w-[100px] after:h-[3px] after:bg-[--main-color]'>We're here to help and answer any questions you might have. Please don't hesitate to get in touch with us.</motion.p>

      <motion.div
      initial={{ y: 190 }}
      transition={{
        duration: 1.3,
        type: "tween",
      }}
      whileInView={{
        y: 0,
      }}
      className='flex flex-col items-center justify-center gap-7 md:flex-row'>
      <Image src={require("../../Images/contact.svg")} className='max-w-full w-[400px]' alt='contact'/>

      <form className='flex w-full gap-1 md:gap-5' action="">
      <div className='flex flex-col gap-2 md:gap-5'>
        <input className='outline-none150px w-[150px] md:w-[220px] xl:w-[300px] border-[2px] py-[10px] px-2 rounded-md  border-[--main-color]' type="text" name="name" id="name" placeholder='your name' />
        <input className='outline-none w-[150px]   md:w-[220px] xl:w-[300px]  border-[2px] py-[10px]  px-2 rounded-md border-[--main-color]' type="text" name="name" id="name" placeholder='your phone' />
        <input className='outline-none w-[150px]   md:w-[220px] xl:w-[300px] border-[2px] py-[10px]  px-2 rounded-md border-[--main-color]' type="email" name="name" id="name" placeholder='your Email' />
        <input className='outline-none w-[150px]   md:w-[220px] xl:w-[300px] border-[2px] py-[10px]  px-2 rounded-md border-[--main-color]' type="text" name="name" id="name" placeholder='your subject' />
      </div>
      <div className='flex flex-col gap-3'>
        <textarea name="" id="" className='md:w-[250px] lg:w-[300px] w-[200px] outline-none rounded-md p-[5px] border-[2px] border-[--main-color] h-[200px]'placeholder='your message'></textarea>
        <input type="submit" value="send message" className='border-[2px] cursor-pointer transition-all hover:bg-[--main-color] hover:text-white py-2 font-bold text-[20px] capitalize text-[--main-color] rounded-full border-[--main-color]' />
      </div>
    </form>
      </motion.div>
    </div>
   
  </div>
  </>
}

export default Contact