import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery/ImageGallery';
import PricingPlan from './PricingPlans/PricingPlan';
import TeamMembers from './TeamMembers/TeamMembers';
import useTitle from '../../UseTitle/UseTitle';
import ReactTab from './ReactTab';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <ImageGallery/>
            <ReactTab/>
            <PricingPlan/>
            <TeamMembers/>
        </div>
    );
};

export default Home;