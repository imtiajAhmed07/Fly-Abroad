import React from 'react';
import { Link } from 'react-router-dom';
import './PlaneBanner.css'

const PlaneBanner = () => {
    return (
        <div>
            <div className="mt-5 pt-2">
                <div className="planeBanner mt-5">
                    <div className="d-none d-md-flex align-items-center planeBannerBackground" style={{ height: '100%' }}>
                        <div className="ps-3 ms-5">
                            <h1 className="mainLogo main-text">fly<span style={{ color: 'white' }}>Abroad</span></h1>
                            <h2 className="text-white mb-4">All around the World</h2>
                            <Link to="/air-ticket" className="main-btn">Flight Reservation</Link>
                        </div>
                    </div>
                    <div className="d-flex d-md-none align-items-center justify-content-center planeBannerBackground" style={{ height: '100%' }}>
                        <div className="text-center">
                            <h1 className="mainLogo main-text">fly<span style={{ color: 'white' }}>Abroad</span></h1>
                            <h2 className="text-white mb-4">All around the World</h2>
                            <Link to="/air-ticket" className="main-btn">Flight Reservation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaneBanner;