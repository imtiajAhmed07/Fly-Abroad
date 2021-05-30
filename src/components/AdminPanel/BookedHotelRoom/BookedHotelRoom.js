import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookedHotelRoom = () => {
    return (
        <div>
            <div className="row adminBorder">
                <div className="col-md-3 sidebarBackground">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h1>booked hotel rooms</h1>
                </div>
            </div>
        </div>
    );
};

export default BookedHotelRoom;