import React from 'react';
import PickAccommodation from '../PickAccommodation/PickAccommodation';
import Header from '../Header/Header';
import PlaneBanner from '../PlaneBanner/PlaneBanner';
import Navbar from '../../SharedComponents/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container headerBackground">
                <div className="container">
                    <Header></Header>
                    <PlaneBanner></PlaneBanner>
                    <PickAccommodation></PickAccommodation>
                </div>
            </div>
        </div>
    );
};

export default Home;