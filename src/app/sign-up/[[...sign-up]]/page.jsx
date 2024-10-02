"use client"
import { SignUp } from '@clerk/nextjs'
import Lottie from 'lottie-react'
import login from "../../../Images/Sign.json"
import { motion } from 'framer-motion';

export default function Page() {
  return <>
<div className='flex justify-center my-[100px] '> 
<div className='flex flex-col items-center justify-around gap-4 md:flex-row'>
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
    <SignUp  />

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
animationData={login}

/>
</motion.div>


</div>


  </div>

  </>
}