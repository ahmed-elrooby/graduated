"use client"
import { motion } from 'framer-motion'
import React from 'react'

const RoadMap = () => {
  return <>
  <div  className='w-[90%] ref m-auto mt-[50px] mb-[100px]'>
    <motion.h1
    initial={{ scale: 0.5 }}
    transition={{
      duration: 1.3,
      type: "tween",
    }}
    whileInView={{
      scale: 1,
    }}
    
    className='text-[40px] font-bold mb-[20px] text-[--main-color] text-center'>Road Map</motion.h1>

<div className='flex flex-col gap-[20px] items-start'>
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
<h1 className='text-[25px] lg:mb-2 mb-0 font-bold capitalize text-[--main-color]'>if you customer</h1>
<p className='text-[19px]'>follow this steps</p>
</motion.div>
    <motion.div
    initial={{ y:200 }}
    transition={{
      duration: 0.7,
      type: "tween",
    }}
    whileInView={{
      y: 0,
    }}
    
    className='relative m-auto  after:content-[""] after:absolute after:left-[50%]  top-[5px] h-full w-[1px] md:w-[2px] bg-[--main-color]'>

        <div className="text-white py-4 pr-2 pl-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm mr-[20px] lg:mr-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:right-[-6px] after:right-[-27px] lg:after:right-[-52px] after:top-[10px] bg-[--main-color] relative  float-end">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>choose style
</h1>
<p className='capitalize'>Choose your architecture or
upload your own</p>
        </div>
        <div className='clear-both'></div>









        <div className="text-white py-4 pl-2 mt-4 pr-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm ml-[20px] lg:ml-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:left-[-6px] after:left-[-27px] lg:after:left-[-52px] after:top-[10px] bg-[--main-color] relative  float-start">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>Fill out the form
</h1>
<p className='capitalize'>Fill in your form with
the required data to get the right price</p>
        </div>
        <div className='clear-both'></div>






        <div className="text-white py-4 pr-2 pl-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm mr-[20px] lg:mr-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:right-[-6px] after:right-[-27px] lg:after:right-[-52px] after:top-[10px] bg-[--main-color] relative  float-end">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>publish

</h1>
<p className='capitalize'>If you agree to the price
publish your project to contractors</p>
        </div>
        <div className='clear-both'></div>










        <div className="text-white py-4 pl-2 mt-4 pr-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm ml-[20px] lg:ml-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:left-[-6px] after:left-[-27px] lg:after:left-[-52px] after:top-[10px] bg-[--main-color] relative  float-start">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>contract
</h1>
<p className='capitalize'>Upon approval, the contract will be signed.

</p>
        </div>
        <div className='clear-both'></div>
















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
<h1 className='text-[25px] lg:mb-2 mb-0 font-bold capitalize text-[--main-color]'>if you are a contractor
</h1>
<p className='text-[19px]'>follow this steps</p>
</motion.div>
    <motion.div
     initial={{ y:200 }}
     transition={{
       duration: 0.7,
       type: "tween",
     }}
     whileInView={{
       y: 0,
     }}
    className='relative m-auto  after:content-[""] after:absolute after:left-[50%]  top-[5px] h-full w-[1px] md:w-[2px] bg-[--main-color]'>

        <div className="text-white py-4 pr-2 pl-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm mr-[20px] lg:mr-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:right-[-6px] after:right-[-27px] lg:after:right-[-52px] after:top-[10px] bg-[--main-color] relative  float-end">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>choose style
</h1>
<p className='capitalize'>Choose your architecture or
upload your own</p>
        </div>
        <div className='clear-both'></div>









        <div className="text-white py-4 pl-2 mt-4 pr-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm ml-[20px] lg:ml-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:left-[-6px] after:left-[-27px] lg:after:left-[-52px] after:top-[10px] bg-[--main-color] relative  float-start">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>Fill out the form
</h1>
<p className='capitalize'>Fill in your form with
the required data to get the right price</p>
        </div>
        <div className='clear-both'></div>






        <div className="text-white py-4 pr-2 pl-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm mr-[20px] lg:mr-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:right-[-6px] after:right-[-27px] lg:after:right-[-52px] after:top-[10px] bg-[--main-color] relative  float-end">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>publish

</h1>
<p className='capitalize'>If you agree to the price
publish your project to contractors</p>
        </div>
        <div className='clear-both'></div>










        <div className="text-white py-4 pl-2 mt-4 pr-[20px] lg:pl-[30px] h-full lg:h-auto   rounded-sm ml-[20px] lg:ml-[40px] w-[150px] md:w-[400px]  after:absolute after:content-[''] after:w-[15px] after:h-[15px] lg:after:w-[25px] lg:after:h-[25px] before:absolute before:content-[''] before:w-[14px] before:h-[14px] lg:before:w-[20px] lg:before:h-[20px] before:rotate-45 before:bg-[--main-color] before:top-[10px] after:rounded-full after:bg-[--main-color]  before:left-[-6px] after:left-[-27px] lg:after:left-[-52px] after:top-[10px] bg-[--main-color] relative  float-start">
<h1 className='font-bold md:text-[22px] text-[16px] capitalize'>contract
</h1>
<p className='capitalize'>Upon approval, the contract will be signed.

</p>
        </div>
        <div className='clear-both'></div>
















    </motion.div>
</div>


  </div>
  </>
}

export default RoadMap