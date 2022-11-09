import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../../common/PageBanner';
import banner from '../../../assets/otherspagebanner.jpg'
import DetailsOfService from './DetailsOfService';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {
    const serviceDetailsData = useLoaderData();

    return (
        <div className='mt-5'>
            <PageBanner image={banner} title={serviceDetailsData ? `${serviceDetailsData.title} Details` : 'No Data Found'} />
            <div className='flex mt-10 p-5 bg-slate-50 border border-slate-400 rounded-lg gap-5 flex-col md:flex-row'>
                <DetailsOfService serviceDetails={serviceDetailsData} />
                <ServiceReview serviceDetails={serviceDetailsData} />
            </div>
        </div>
    );
};

export default ServiceDetails;