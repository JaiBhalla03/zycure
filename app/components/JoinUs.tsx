'use client';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const JoinUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' },
    },
  });

  return (
    <div
      ref={ref}
      className="py-5 md:py-10 px-4 md:px-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp(0.1)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-4xl md:text-6xl text-black font-extrabold"
      >
        Join Us
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeUp(0.3)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="md:w-96 text-sm text-gray-500 font-extralight text-center"
      >
        Explore our website learn more about our mission and products. Welcome
        to a healthier future with Zycure Biologicals!
      </motion.p>

      {/* Button */}
      <motion.div
        variants={fadeUp(0.5)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Link
          href={'/contact'}
          className="flex gap-1 justify-center mx-auto items-center mt-4 group"
        >
          <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
            Contact us
          </div>
          <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
            <MoveUpRight />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default JoinUs;
