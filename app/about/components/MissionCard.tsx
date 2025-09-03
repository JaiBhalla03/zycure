import React from 'react';

interface MissionCardProps{
    position: Boolean;
    num: String;
    heading: String;
    desc: String;
}

const MissionCard = ({position, num, heading, desc}: MissionCardProps) => {
    return (
        <div className={`flex ${position ? 'justify-start' : 'justify-end'}`}>
            <div className='w-full md:w-1/3'>
                <div>
                    <div className='border-b-1 pb-2 border-white flex items-center gap-2'>
                        <div className='text-xs text-yellow-300'>{num}</div>
                        <h1 className='text-4xl tracking-wide'>{heading}</h1>
                    </div>
                    <p className='text-sm pt-2 font-light'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default MissionCard;