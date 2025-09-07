import SmallHeading from '@/app/components/utils/SmallHeading';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface TeamCardProps {
    reverse: boolean;
    designation: string;
    name: string;
    desc: string;
}

const TeamCard = ({ reverse, designation, name, desc }: TeamCardProps) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full gap-6`}>
            <div className='w-full md:text-left px-0 md:px-4'>
                <SmallHeading heading={designation}/>
                <h2 className='text-xl md:text-3xl font-semibold mb-2'>{name}</h2>
                <p className='text-gray-600 text-sm'>{desc}</p>
            </div>
        </div>
    );
};

export default TeamCard;
