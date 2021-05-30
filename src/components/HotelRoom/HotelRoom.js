import React from 'react';
import Navbar from '../SharedComponents/Navbar/Navbar';
import './HotelRoom.css'

const HotelRoom = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-md-8" style={{ border: '1px solid red' }}>
                            <h1>hello</h1>
                            <h1>hello</h1>
                            <h1>hello</h1>
                            <h1>hello</h1>
                            <h1>hello</h1>
                        </div>
                        <div className="col-md-4" style={{ border: '1px solid black' }}>
                            <div className="bookedRoom">
                                <h4>Booking Detilas</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelRoom;