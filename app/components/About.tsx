'use client';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
    <div ref={ref} className="py-5 md:py-10 px-4 md:px-12">
      {/* Text */}
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-2xl md:text-4xl text-center"
      >
        Zycure Biotech, headquartered in Hyderabad, India, and its Parent division Zychor Biologicals,
        specializing in Ortho, have been operating pan-India for 3 years.{' '}
        <i className="text-teal-800 not-italic">
          We have recently partnered with top pharma companies like Natco Pharma, Akums, Heil Pharma, and Intas Pharma for manufacturing.
        </i>
      </motion.div>

      {/* Button */}
      <Link href="/about" className="flex justify-center">
        <motion.div
          variants={fadeUp(0.6)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex gap-1 justify-center items-center mt-4 group"
        >
          <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
            About us
          </div>
          <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">
            <MoveUpRight />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default About;
