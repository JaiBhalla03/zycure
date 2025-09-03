'use client'
import SmallHeading from '@/app/components/utils/SmallHeading';
import { TeamCardData } from '@/app/constant';
import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className='px-4 md:px-20 py-5 md:py-10 flex flex-col items-start md:items-center gap-5 md:gap-10'>
            <div className='flex flex-col items-start md:items-center'>
                <SmallHeading heading="MEET THE TEAM" />
                <h1 className='text-4xl md:text-6xl font-semibold text-center'>Our Team</h1>
            </div>
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
