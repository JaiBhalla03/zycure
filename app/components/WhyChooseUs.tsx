'use client';
import React from 'react';
import ChooseUsCard from './ChooseUsCard';
import { whyChooseUs } from '../constant';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
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
    <div ref={ref} className="px-4 md:px-20 py-5 md:py-10 flex flex-col gap-5">
      {/* Heading */}
      <motion.h1
        variants={fadeUp(0.1)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-4xl md:text-6xl text-black font-extrabold text-center"
      >
        Why choose us?
      </motion.h1>

      {/* Cards */}
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {whyChooseUs.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp(0.2 + index * 0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <ChooseUsCard
                index={item.index}
                heading={item.heading}
                desc={item.desc}
                color={item.color}
                height={item.height}
              />
            </motion.div>
          ))}
        </div>

        {/* Last card full width */}
        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <ChooseUsCard
            index={whyChooseUs[3].index}
            heading={whyChooseUs[3].heading}
            desc={whyChooseUs[3].desc}
            color={whyChooseUs[3].color}
            height={whyChooseUs[3].height}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
