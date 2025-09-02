"use client";
import { LucideIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

interface OurJourneyCardProps{
    icon: LucideIcon;
    heading: String;
    desc: String;
}

const OurJourneyCard = ({icon: Icon, heading, desc}: OurJourneyCardProps) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <Icon size={35}/>
            <div className='text-md font-semibold border-b-1 p-2 w-full'>{heading}</div>
            <i className='not-italic p-2 text-xs font-light text-gray-500'>{desc}</i>
        </div>
    );
};

export default OurJourneyCard;