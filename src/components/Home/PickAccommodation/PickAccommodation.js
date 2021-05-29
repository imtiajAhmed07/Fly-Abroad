import React from 'react';
import './PickAccommodation.css'
import villa1 from '../../../images/villa1.jpeg'
import villa2 from '../../../images/villa2.png'
import villa3 from '../../../images/villa3.jpeg'
import { Link } from 'react-router-dom';

const PickAccommodation = () => {
    return (
        <main>
            <div>
                <div className="row mt-5">
                    <h2 className="d-none d-md-block mb-3">Find your Accommodation</h2>
                    <h2 className="text-center d-block d-md-none mb-3">Find your Accommodation</h2>
                    <Link className="col-md-4 text-hover">
                        <img className="w-100" src={villa1} alt="" />
                        <h5 className="mt-3 d-none d-md-block">Front Pool</h5>
                        <h5 className="mt-3 pb-3 text-center d-block d-md-none" style={{borderBottom: "1px solid black"}}>Front Pool</h5>
                    </Link>
                    <Link className="mt-4 mt-md-0 col-md-4 text-hover">
                        <img className="w-100" src={villa2} alt="" />
                        <h5 className="mt-3 d-none d-md-block">Hill View</h5>
                        <h5 className="mt-3 pb-3 text-center d-block d-md-none" style={{borderBottom: "1px solid black"}}>Hill View</h5>
                    </Link>
                    <Link className="mt-4 mt-md-0 col-md-4 text-hover">
                        <img className="w-100" src={villa3} alt="" />
                        <h5 className="mt-3 d-none d-md-block">Outdoor Gateway</h5>
                        <h5 className="mt-3 pb-3 text-center d-block d-md-none" style={{borderBottom: "1px solid black"}}>Outdoor Gateway</h5>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PickAccommodation;