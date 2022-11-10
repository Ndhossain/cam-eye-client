import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SpinnerDotted } from 'spinners-react';
import banner from '../../../assets/otherspagebanner.jpg';
import PageBanner from '../../common/PageBanner';
import ServiceContainer from '../../common/ServiceContainer';

const Service = () => {
    const [loading, setLoading] = useState(false);
    const [servicesData, setServicesData] = useState([]);
    const [error, setError] = useState(false);
    const [count , setCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 3;

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: `https://cam-eye-server-side.vercel.app/services?page=${page}&size=${size}`
        }).then((res) => {
            setServicesData(res.data.services);
            setCount(res.data.count);
            setLoading(false);
        }).catch(err => {
            console.log(err)
            setError(true);
        })
    }, [size, page]);

    const pageSize = Math.ceil(count / size);
    console.log(pageSize);

    return (
        <div className='mt-5'>
            <PageBanner image={banner} title='Services' />
            {
                loading && (
                    <div className='h-screen flex justify-center items-center'>
                        <SpinnerDotted size={30} thickness={200} color={'#0077FF'} />
                    </div>
                )
            }
            {!loading && error ? 
                    (<h1 className='text-2xl text-center mt-10'>
                        Something went wrong. Please refresh the page.
                    </h1>) : (
                        <>
                            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-7'>
                                {
                                    !error && servicesData.map(service => <ServiceContainer key={service._id} service={service} />)
                                }
                            </div>
                            <div className='flex justify-center mt-5 gap-3'>
                                {
                                    [...Array(pageSize).keys()].map(key => (
                                        <button
                                            onClick={() => setPage(key)}
                                            key={key}
                                            className={`btn btn-sm btn-circle btn-primary ${key === page ? '' : 'btn-outline'}`}
                                        >
                                            {key + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        </>
                    )}
        </div>
    );
};

export default Service;