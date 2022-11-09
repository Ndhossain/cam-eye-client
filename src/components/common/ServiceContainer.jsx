import React from 'react';
import { Link } from 'react-router-dom';

const ServiceContainer = ({service}) => {
    const { title, picture, price, description, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-sm font-semibold text-primary'>Price: ${price}</p>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/service-details/${_id}`} className="btn btn-sm btn-primary btn-outline">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer;