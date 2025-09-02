'use client'
import React from 'react';
import Image from 'next/image';
import SmallHeading from '@/app/components/utils/SmallHeading';
import { missionCardData } from '@/app/constant';
import MissionCard from './MissionCard';

const Mission = () => {
    const missionData = missionCardData;
    return (
        <div className='relative px-20 py-10 bg-black text-white'>
            <SmallHeading heading={'MISSION'}/>
            <h1 className='text-6xl font-semibold'>Our Mission</h1>  
            <div className='flex w-full py-10'>
                <div className='relative w-full md:w-1/2 h-64 md:h-96'>
                    <Image
                        src={'/missionImage.jpg'}
                        alt={''}
                        fill
                        className='object-cover rounded-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 text-center md:text-left px-4 flex flex-col justify-end'>
                    <p className='text-sm'>
                        At Zycure Biotech, our mission is to transform healthcare by delivering innovative, reliable, and patient-centric solutions. We strive to bridge unmet medical needs in Orthopedics, Chronic Wound Management, and Critical Care through advanced research, strong collaborations, and world-class manufacturing standards. Our goal is to enhance the quality of life for patients while building a healthier future for communities across India and beyond.
                    </p>
                </div>
            </div>  
            <div className='px-10'>
                {
                    missionData.map((item, index) => (
                        <MissionCard
                            key={index}
                            position={item.position}
                            num = {item.num}
                            heading = {item.heading}
                            desc = {item.desc}
                        />
                    ))
                }
            </div> 
        </div>
    );
};

export default Mission;
