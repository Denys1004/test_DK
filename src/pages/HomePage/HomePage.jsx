import React from 'react';
import UsersForm from "../../components/UsersForm/UsersForm";

// Images
import images from '../../constans/images';

// Styles
import './HomePage.scss';


const HomePage = () => {

    return (
        <div className='page'>
            <div className="page__inside-page">

                <div className="company-logo">
                    <img src={images.logo} alt="logo" />
                </div>
                
                <UsersForm />
                
            </div>
        </div>
    )
}

export default HomePage;