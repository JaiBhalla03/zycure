'use client';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Authenticity = () => {
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
    <div ref={ref} className="relative px-4 md:px-20 py-5 md:py-10">
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="h-96 w-full relative group"
      >
        <Image
          src="/authenticity.jpg"
          alt="authenticity"
          fill
          className="object-cover rounded-sm"
        />

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="p-10 flex flex-col md:flex-row justify-around md:justify-between items-center md:items-end text-white absolute top-0 left-0 rounded-sm h-full w-full"
        >
          <p className="text-2xl md:text-4xl font-semibold">
            We prioritize authenticity to ensure our customers receive only the
            highest quality products.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Authenticity;
