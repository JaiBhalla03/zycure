import React from 'react';
import Hero from './components/Hero';
import OurJourney from './components/OurJourney';
import Mission from './components/Mission';
import Team from './components/Team';
import LookingAhead from './components/LookingAhead';

const page = () => {
    return (
        <div>
            <Hero/>
            <OurJourney/>
            <Team/>
            <Mission/>
            <LookingAhead/>
        </div>
    );
};

export default page;