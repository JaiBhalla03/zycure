'use client'
import React from 'react';
import Image from 'next/image';
import SmallHeading from '@/app/components/utils/SmallHeading';
import { missionCardData } from '@/app/constant';
import MissionCard from './MissionCard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mission = () => {
    const missionData = missionCardData;

    // hook for intersection observer
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div 
          ref={ref}
          className='relative px-4 md:px-20 py-5 md:py-10 bg-black text-white'
        >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <SmallHeading heading={'MISSION'}/> 
                <h1 className='text-4xl md:text-6xl font-semibold'>Our Mission</h1>  
            </motion.div>

            {/* Image + Paragraph */}
            <div className='flex flex-col md:flex-row gap-5 md:gap-0 w-full py-10'>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className='relative w-full md:w-1/2 h-64 md:h-96'
                >
                    <Image
                        src={'/missionImage.jpg'}
                        alt={''}
                        fill
                        className='object-cover rounded-lg'
                    />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className='w-full md:w-1/2 text-left md:px-4 flex flex-col justify-end'
                >
                    <p className='text-sm'>
                        At Zycure Biotech, our mission is to transform healthcare by delivering innovative, reliable, and patient-centric solutions. We strive to bridge unmet medical needs in Orthopedics, Chronic Wound Management, and Critical Care through advanced research, strong collaborations, and world-class manufacturing standards. Our goal is to enhance the quality of life for patients while building a healthier future for communities across India and beyond.
                    </p>
                </motion.div>
            </div>  

            {/* Mission Cards */}
            <div className='md:px-10 space-y-5 md:space-y-0'>
                {missionData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 + index * 0.5 }}
                    >
                        <MissionCard
                            position={item.position}
                            num={item.num}
                            heading={item.heading}
                            desc={item.desc}
                        />
                    </motion.div>
                ))}
            </div> 
        </div>
    );
};

export default Mission;
