import SmallHeading from '@/app/components/utils/SmallHeading';
import { MoveUpRight } from 'lucide-react';
import React from 'react';

const LookingAhead = () => {
    return (
        <div className='px-20 py-10 flex flex-col items-center'>
            <SmallHeading heading="OUR JOURNEY"/>
            <h1 className='text-6xl font-semibold'>Looking Ahead</h1>
            <p className='text-2xl text-center py-10'>
                As we step into the future, Zycure Biotech remains dedicated to shaping the next era of healthcare innovation. Our focus is not only on addressing today’s medical challenges but also on anticipating tomorrow’s needs with foresight and determination. By combining cutting-edge research, global partnerships, and a passion for patient care, we are building a future where advanced healthcare is accessible, sustainable, and impactful.
            </p>
            <div className='flex gap-1 justify-center mx-auto items-center group'>
                <div className="h-10 flex justify-center items-center text-xs cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2">See our products</div>
                <div className="h-10 flex justify-center items-center cursor-pointer group-hover:bg-black group-hover:text-white duration-300 rounded-sm border-2 border-solid border-black text-black p-2"><MoveUpRight/></div>
            </div>
        </div>
    );
};

export default LookingAhead;