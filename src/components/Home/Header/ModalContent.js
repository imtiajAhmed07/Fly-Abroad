import React from 'react';
import './HeaderModal.css'
import home from '../../../images/home.jpeg'
import { Link } from 'react-router-dom';

const ModalContent = ({modalClose}) => {
    console.log(modalClose);
    return (
        <div>
            <h2 className="mt-3 d-none d-md-inline">Make a reservation with flyAbroad</h2>
            <h4 className="mt-3 pe-3 d-inline d-md-none">Make a reservation with flyAbroad</h4>
            <button className="btn btn-sm btn-danger float-end" onClick={modalClose}>Close</button>
            <div className="row justify-content-evenly align-items-center mt-4">
                <Link to="/air-ticket" className="col-md-4 bg-white modalImage">
                    <img className="img-fluid mt-2" src={home} alt="" />
                    <h4 className="text-center pt-1">Flight Reservation</h4>
                </Link>
                <Link to="hotel-room" className="col-md-4 bg-white modalImage mt-4 mt-md-0">
                    <img className="img-fluid mt-2" src={home} alt="" />
                    <h4 className="text-center pt-1">Room Reservation</h4>
                </Link>
            </div>
        </div>
    );
};

export default ModalContent;