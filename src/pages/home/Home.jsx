import React from 'react';
import About from './about/About';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner />
            <About />
        </div>
    );
};

export default Home;