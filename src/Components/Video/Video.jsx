"use client"
import { Play, X } from 'lucide-react'
import React, { useState } from 'react'

const Video = () => {
  const [open, setOpen] = useState(false);
  const handleOpen =()=>{
    setOpen(true)
  }
  const closeVideo = ()=>{
    setOpen(false);
    document.getElementById("videos").pause();
  }
  return <>
  <div className='h-screen py-[50px] video relative  '>
    <div onClick={handleOpen} className={` justify-center ${open?"hidden":"flex"} cursor-pointer items-center w-[200px] h-[200px] rounded-full border-[3px] border-[--main-color] tocenter`}>
    <Play color='#00838F' size={36}/>
    </div>
    <div className={`relative m-auto justify-center items-center ${open?"flex":"hidden"}  w-[650px]`}>
    <video id='videos' src='/video.mp4' controls className="w-full "/>
    {/* <h1 onClick={closeVideo} className='p-0 m-0 font-bold text-white select-none '>x</h1> */}
<X onClick={closeVideo} className='absolute top-[-15px] right-[-15px] cursor-pointer bg-[--main-color] w-[50px] h-[50px] rounded-full border-[2px]  text-center border-[--main-color] flex justify-center items-center  ' color='white' size={28}/>
    </div>



    
  </div>
  </>
}

export default Video