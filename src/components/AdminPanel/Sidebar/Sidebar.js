import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/"> <h3 className="text-center mt-md-4 mb-md-4 text-white sidebarLogo">flyAbroad</h3></Link>
            <li>
                <Link className="text-white" to='/admin/add-air-tickets'>
                    Add Air Tickets
                </Link>
            </li>
            <li className="mt-md-3">
                <Link className="text-white" to='/admin/booked-air-tickets'>
                    Booked Hotel Rooms
                </Link>
            </li>
            <li className="mt-md-3">
                <Link className="text-white" to='/admin/add-hotel-rooms'>
                    Add Hotel Rooms
                </Link>
            </li>
            <li className="mt-md-3">
                <Link className="text-white" to='/admin/booked-hotel-rooms'>
                    Booked Hotel Rooms
                </Link>
            </li>
        </div>
    );
};

export default Sidebar;