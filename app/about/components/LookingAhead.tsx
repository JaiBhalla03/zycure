"use client";
import SmallHeading from '@/app/components/utils/SmallHeading';
import { MoveUpRight } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const LookingAhead = () => {
  // intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className='px-4 md:px-20 py-5 md:py-10 flex flex-col items-start md:items-center'
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex flex-col items-start md:items-center'
      >
        <SmallHeading heading="OUR JOURNEY" />
        <h1 className='text-4xl md:text-6xl font-semibold'>Looking Ahead</h1>
      </motion.div>
      
      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className='text-lg md:text-2xl text-center py-4 md:py-10'
      >
        As we step into the future, Zycure Biotech remains dedicated to shaping the next era of healthcare innovation. Our focus is not only on addressing today’s medical challenges but also on anticipating tomorrow’s needs with foresight and determination. By combining cutting-edge research, global partnerships, and a passion for patient care, we are building a future where advanced healthcare is accessible, sustainable, and impactful.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className='flex gap-1 justify-center mx-auto items-center group'
      >
        <Link 
          href="/products"
          className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"
        >
          See our products
        </Link>
        <Link 
          href="/products"
          className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"
        >
          <MoveUpRight/>
        </Link>
      </motion.div>
    </div>
  );
};

export default LookingAhead;
