'use client'
import SmallHeading from '@/app/components/utils/SmallHeading';
import { TeamCardData } from '@/app/constant';
import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className='px-10 md:px-20 py-10 flex flex-col items-center gap-10'>
            <SmallHeading heading="MEET THE TEAM" />
            <h1 className='text-4xl md:text-6xl font-semibold text-center'>Our Team</h1>
            
            <div className='flex flex-col gap-10 w-full'>
                {TeamCardData.map((item, index) => (
                    <TeamCard
                        key={index}
                        reverse={item.reverse}
                        imageSrc={item.imageSrc}
                        heading={item.heading}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
