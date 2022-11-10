import React from 'react';

const BlogContainer = ({blog}) => {
    const {Que, Ans} = blog;
    return (
        <div className='border border-primary p-6 rounded-lg'>
            <h1 className='text-xl font-semibold text-primary'>Que: {Que}</h1>
            <p className='text-md mt-5'><span className='font-semibold'>Ans:</span> {Ans}</p>
        </div>
    );
};

export default BlogContainer;