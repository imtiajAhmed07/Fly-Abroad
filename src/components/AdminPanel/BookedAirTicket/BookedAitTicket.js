import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookedAitTicket = () => {
    return (
        <div>
            <div className="row adminBorder">
                <div className="col-md-3 sidebarBackground">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h1>booked air ticket</h1>
                </div>
            </div>
        </div>
    );
};

export default BookedAitTicket;