'use client';
import SmallHeading from '@/app/components/utils/SmallHeading';
import { ourJourneyData } from '@/app/constant';
import React from 'react';
import OurJourneyCard from './OurJourneyCard';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurJourney = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div 
          ref={ref} 
          className='px-4 md:px-20 py-5 md:py-10'
        >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='flex flex-col items-start md:items-center'
            >
                <SmallHeading heading={'OUR JOURNEY'}/> 
                <h1 className='text-4xl md:text-6xl font-semibold'>Our Journey</h1>
            </motion.div>

            {/* Cards */}
            <motion.div 
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:mt-12"
            >
                {ourJourneyData.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        show: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <OurJourneyCard 
                            icon={item.icon}
                            heading={item.heading}
                            desc={item.desc}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Image + Mission */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="h-96 w-full relative group mt-10"
            >
                <Image 
                    src="/ourJourneyImage.jpg" 
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className='bg-[#d3d9f7] p-4 rounded-sm absolute top-1/2 md:-top-4 left-1/2 md:-left-4 w-[80vw] md:w-72 flex flex-col items-center transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0'
                >
                    <SmallHeading heading={'MISSION'}/>
                    <div className='text-center text-sm font-semibold'>
                        To transform healthcare by delivering innovative, high-quality, and patient-centric solutions in Orthopedics, Chronic Wound Management, and critical care, improving lives across India and beyond.
                    </div>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default OurJourney;
