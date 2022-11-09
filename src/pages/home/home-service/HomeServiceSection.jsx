import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ServiceContainer from '../../../components/common/ServiceContainer';
import { Link } from 'react-router-dom';

const HomeServiceSection = () => {
    const [servicesData, setServicesData] = useState([]);
    const [error, setError] = useState(false);
    const page = 0;
    const size = 3;

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/services?page=${page}&size=${size}`
        }).then((res) => {
            setServicesData(res.data.services);
        }).catch(err => {
            console.log(err)
            setError(true);
        })
    }, [size, page]);

    return (
        <div className='mt-10'>
            <h4 className='text-center text-primary font-bold text-xl'>Service</h4>
                {error ? 
                    (<h1 className='text-2xl text-center mt-10'>
                        Something went wrong. Please refresh the page.
                    </h1>) : (
                        <>
                            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-7'>
                                {
                                    !error && servicesData.map(service => <ServiceContainer service={service} />)
                                }
                            </div>
                            <div className='flex justify-center mt-5'>
                                <Link to='/services' className='btn btn-primary'>View All</Link>
                            </div>
                        </>
                    )}
        </div>
    );
};

export default HomeServiceSection;