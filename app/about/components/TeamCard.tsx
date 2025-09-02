import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface TeamCardProps {
    reverse: boolean;
    imageSrc: string | StaticImageData;
    heading: string;
    desc: string;
}

const TeamCard = ({ reverse, imageSrc, heading, desc }: TeamCardProps) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full items-center gap-6`}>
            {/* Image half width */}
            <div className='relative w-full md:w-1/2 h-64 md:h-96'>
                <Image
                    src={imageSrc}
                    alt={heading}
                    fill
                    className='object-cover rounded-lg'
                />
            </div>

            {/* Text half width */}
            <div className='w-full md:w-1/2 text-center md:text-left px-4'>
                <h2 className='text-xl md:text-3xl font-semibold mb-2'>{heading}</h2>
                <p className='text-gray-600 text-sm'>{desc}</p>
            </div>
        </div>
    );
};

export default TeamCard;
