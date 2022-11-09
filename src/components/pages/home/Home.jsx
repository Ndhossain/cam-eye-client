import React from 'react';
import About from './about/About';
import Banner from './banner/Banner';
import HomeServiceSection from './home-service/HomeServiceSection';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner />
            <About />
            <HomeServiceSection />
        </div>
    );
};

export default Home;