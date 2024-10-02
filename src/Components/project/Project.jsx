"use client"
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import  saved from "../../Images/saved.json"
import { motion } from 'framer-motion';


const Project = () => {
  return (
    <>
      <div className="my-[100px]  w-[90%] mx-auto pt-[50px]">
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
            
            className="w-[400px]  max-w-full">
                        <h1 className="mb-4 relative after:absolute after:content-[''] after:w-[100px] after:h-[4px] after:rounded-full after:bg-[--main-color] after:left-0 after:top-[-10px] text-3xl text-[--main-color] font-bold">Your Saved Projects</h1>
                        <p className="mb-6 text-[20px] leading-[1.8] capitalize">
  Here you can find all the projects you have saved. Feel free to download and use them as inspiration for your own work.
</p>
            </motion.div>
            <div>

            </div>
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
className="max-w-full "
animationData={saved}

/>
            </motion.div>

        </div>
<div>

<div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 lg:grid-cols-4">
          <motion.div
          initial={{ scale: 0.5 }}
          transition={{
            duration: 1.3,
            type: "tween",
          }}
          whileInView={{
            scale: 1,
          }}
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div
          
            className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                                  className="h-[150px]"

                  src={require("../../Images/OIP (2).jpg")}
                  width={200}
                  height={200}
                />
              </div>
              <div
              
      className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
                
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
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
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                                  className="h-[150px]"

                  src={require("../../Images/house1.jpg")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
        
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
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
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                                  className="h-[150px]"

                  src={require("../../Images/OIP.jpg")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
   
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
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
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all  shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                  src={require("../../Images/Small-villas-designs-with-pictures.2.jpg")}
                  width={200}
                  height={200}
                  className="h-[150px]"
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
  
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
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
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                  src={require("../../Images/imd.jpeg")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
        
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
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
          className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                  src={require("../../Images/house2.jpg")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
            
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
          </motion.div>
        </div>
        <motion.div
         initial={{ scale: 0.5 }}
         transition={{
          duration: 0.7,
          type: "tween",
         }}
         whileInView={{
           scale: 1,
         }}
        
        >

<input type="submit" value="Send" className="rounded-xl px-5 py-1 mt-[30px] font-bold border border-[--main-color] text-[25px] text-[--main-color] transition-all hover:text-white hover:scale-[1.2] cursor-pointer hover:bg-[--main-color]" />

        </motion.div>
</div>
      </div>
    </>
  );
};

export default Project;
