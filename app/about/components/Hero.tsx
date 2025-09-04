"use client";
import SmallHeading from '@/app/components/utils/SmallHeading';
import { ArrowDown } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Scroll function (1 screen down)
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // move down by 1 viewport height
      left: 0,
      behavior: "smooth", // smooth animation
    });
  };

  return (
    <div 
      ref={ref} 
      className='md:h-screen bg-black px-4 md:px-20 py-5 md:py-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center text-white'
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full md:w-1/2 flex flex-col justify-between md:h-full pt-14 md:pt-28'
      >
        <div>
          <SmallHeading heading="ABOUT US" />
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className='text-4xl md:text-6xl font-semibold'
          >
            About Us
          </motion.h1>
        </div>
        <button 
          onClick={handleScrollDown} 
          className='hidden md:flex border border-solid rounded-sm p-4 w-min cursor-pointer hover:bg-white hover:text-black transition'
        >
          <ArrowDown />
        </button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className='text-sm md:text-lg w-full md:w-1/2 h-full flex flex-col gap-5 md:gap-0 justify-end'
      >
        Zycure Biotech, headquartered in Hyderabad, India, and its Parent division Zychor Biologicals, specializing in Ortho, have been operating pan-India for 3 years. 
        <i className='text-teal-800 not-italic'>
          We have recently partnered with top pharma companies like Natco Pharma, Akums, Heil Pharma, and Intas Pharma for manufacturing.
        </i>
        <button 
          onClick={handleScrollDown} 
          className='flex md:hidden border border-solid rounded-sm p-4 w-min m-auto cursor-pointer hover:bg-white hover:text-black transition'
        >
          <ArrowDown />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
