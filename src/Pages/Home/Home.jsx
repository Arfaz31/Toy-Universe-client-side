import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery/ImageGallery';
import PricingPlan from './PricingPlans/PricingPlan';
import TeamMembers from './TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ImageGallery/>
            <PricingPlan/>
            <TeamMembers/>
        </div>
    );
};

export default Home;