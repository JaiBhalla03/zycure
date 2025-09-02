'use client';
import React from 'react';
import ChooseUsCard from './ChooseUsCard';
import { whyChooseUs } from '../constant';

const WhyChooseUs = () => {
    const whyChooseUsData = whyChooseUs;
    return (
        <div className='px-20 py-10 flex flex-col gap-5'>
            <h1 className='text-6xl text-black font-extrabold text-center'>Why choose us?</h1>
            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-3 gap-2'>
                    <ChooseUsCard 
                        index={whyChooseUsData[0].index} 
                        heading={whyChooseUsData[0].heading}
                        desc={whyChooseUsData[0].desc}
                        color={whyChooseUsData[0].color}
                        height={whyChooseUsData[0].height}
                    />
                    <ChooseUsCard 
                        index={whyChooseUsData[1].index} 
                        heading={whyChooseUsData[1].heading}
                        desc={whyChooseUsData[1].desc}
                        color={whyChooseUsData[1].color}
                        height={whyChooseUsData[1].height}
                    />
                    <ChooseUsCard 
                        index={whyChooseUsData[2].index} 
                        heading={whyChooseUsData[2].heading}
                        desc={whyChooseUsData[2].desc}
                        color={whyChooseUsData[2].color}
                        height={whyChooseUsData[2].height}
                    />
                </div>
                <ChooseUsCard 
                    index={whyChooseUsData[3].index} 
                    heading={whyChooseUsData[3].heading}
                    desc={whyChooseUsData[3].desc}
                    color={whyChooseUsData[3].color}
                    height={whyChooseUsData[3].height}
                />
            </div>
        </div>
    );
};

export default WhyChooseUs;