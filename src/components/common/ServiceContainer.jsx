import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceContainer = ({service}) => {
    const { title, picture, price, description, _id } = service;
    return (
        <PhotoProvider>
            <div className="card bg-base-100 shadow-xl">
                <PhotoView src={picture}>
                    <figure><img src={picture} alt={title} /></figure>
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-sm font-semibold text-primary'>Price: ${price}</p>
                    <p>{description.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service-details/${_id}`} className="btn btn-sm btn-primary btn-outline">View Details</Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceContainer;