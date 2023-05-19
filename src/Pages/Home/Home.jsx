import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery/ImageGallery';
import PricingPlan from './PricingPlans/PricingPlan';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ImageGallery/>
            <PricingPlan/>
        </div>
    );
};

export default Home;