import React from 'react';

interface SmallHeadingProps{
    heading: String;
}

const SmallHeading = ({heading}: SmallHeadingProps) => {
    return (
        <div className={`flex items-center gap-1`}>
            <div className='h-2 w-2 rounded-full bg-amber-300'></div>
            <div className='text-xs font-extralight'>{heading}</div>
        </div>
    );
};

export default SmallHeading;