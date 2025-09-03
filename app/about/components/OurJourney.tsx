'use client';
import SmallHeading from '@/app/components/utils/SmallHeading';
import { ourJourneyData } from '@/app/constant';
import React from 'react';
import OurJourneyCard from './OurJourneyCard';
import Image from 'next/image';

const OurJourney = () => {
    return (
        <div className='px-4 md:px-20 py-5 md:py-10'>
            <div className='flex flex-col items-start md:items-center'>
                <SmallHeading heading={'OUR JOURNEY'}/> 
                <h1 className='text-4xl md:text-6xl font-semibold'>Our Journey</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:mt-12">
                {ourJourneyData.map((item, index) => (
                    <OurJourneyCard 
                        key={index}
                        icon={item.icon}
                        heading={item.heading}
                        desc={item.desc}
                    />
                ))}
            </div>

            <div className="h-96 w-full relative group mt-10">
                <Image 
                    src="/ourJourneyImage.jpg" 
                    alt=""
                    fill
                    className="object-cover rounded-sm"
                />
                <div className='bg-[#d3d9f7] p-4 rounded-sm absolute top-1/2 md:-top-4 left-1/2 md:-left-4 w-[80vw] md:w-72 flex flex-col items-center transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0'>
                    <SmallHeading heading={'MISSION'}/>
                        <div className='text-center text-sm font-semibold'>
                            To transform healthcare by delivering innovative, high-quality, and patient-centric solutions in Orthopedics, Chronic Wound Management, and critical care, improving lives across India and beyond.
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default OurJourney;
