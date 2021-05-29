import React from 'react';
import './Header.css'
import city from '../../../images/city.svg';
import HeaderModal from './HeaderModal';


const Header = () => {
    return (
        <header>
            <div className="mt-5 pt-md-5">
                <div className="row mt-md-5">
                    <div className="col-md-6">
                        <h1 className="head-text">Travel is an investment<br /> in yourself</h1>
                        <p className="mt-3">“The biggest adventure you can take is to live the life of your dreams”</p>
                        <HeaderModal></HeaderModal>
                    </div>
                    <div className="mt-5 mt-md-0 col-md-6 text-center text-md-none">
                        <img src={city} alt="" className="fluid headerImg mt-md-5" />
                    </div>
                </div>
           </div>
        </header>
    );
};

export default Header;