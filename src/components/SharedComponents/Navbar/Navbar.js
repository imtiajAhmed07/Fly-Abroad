import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light me-3 navShadow ms-3 mt-md-3 bg-white">
            <div className="container-fluid">
                <Link to="/" className="fontFamily main-text fs-3 mainLogo logo link ps-md-5">fly<span style={{color: 'black'}}>Abroad</span></Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto pe-md-5" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link nav-text nav-item me-4 link">
                            Home
                        </Link>
                        <Link to="/air-ticket" className="nav-link nav-text nav-item me-4 link">
                            Air
                        </Link>
                        <Link to="/hotel-room" className="nav-link nav-text nav-item me-4 link">
                            Accommodation
                        </Link>
                        <Link to="/client-satisfaction" className="nav-link nav-text nav-item me-4 link">
                            Client Satisfaction
                        </Link>
                        <Link to="/contact-us" className="nav-link nav-text  nav-item me-4 link">
                            Contact US
                        </Link>
                    </ul>
                    <a className="userImg" href=""></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;