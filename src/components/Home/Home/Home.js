import React from 'react';
import PickAccommodation from '../PickAccommodation/PickAccommodation';
import Header from '../Header/Header';
import PlaneBanner from '../PlaneBanner/PlaneBanner';

const Home = () => {
    return (
        <div className="container headerBackground">
            <div className="container">
                <Header></Header>
                <PlaneBanner></PlaneBanner>
                <PickAccommodation></PickAccommodation>
            </div>
        </div>
    );
};

export default Home;