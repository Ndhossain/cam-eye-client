import React from 'react';
import About from './about/About';
import Banner from './banner/Banner';
import Contacts from './contacts/Contacts';
import HomeServiceSection from './home-service/HomeServiceSection';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div className='mt-4'>
            <Helmet>
                <title>Home - Cam-Eye</title>
            </Helmet>
            <Banner />
            <About />
            <HomeServiceSection />
            <Contacts />
        </div>
    );
};

export default Home;