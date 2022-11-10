import React from 'react';
import PageBanner from '../../common/PageBanner';
import banner from '../../../assets/otherspagebanner.jpg'
import { useLoaderData } from 'react-router-dom';
import BlogContainer from './BlogContainer';

const Blogs = () => {
    const blogData = useLoaderData();

    return (
        <div className='mt-5'>
            <PageBanner title="My Blogs" image={banner} />
            <div className='mt-10 grid md:grid-cols-2 gap-5'>
                {
                    blogData.map(blog => <BlogContainer key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;