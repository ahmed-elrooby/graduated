"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from "../Images/loading.json"

const loading = () => {
  return <>
  <div className='h-screen w-full bg-[#19283f8c] flex items-center justify-center text-center relative z-[59955555]'>
<Lottie animationData={loadingAnimation} className="w-[200px] h-[200px]" loop={true}/>

  </div>
  </>
}

export default loading