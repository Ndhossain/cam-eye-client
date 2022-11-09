import React, { useEffect, useState } from 'react';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import banner4 from '../../../assets/banner4.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerImages = [banner1, banner2, banner3, banner4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const unsub = setInterval(() => {
            setCurrentIndex(prev => prev < bannerImages.length - 1 ? prev + 1 : 0)
        }, 5000);

        return () => clearInterval(unsub);
    }, [bannerImages.length]);

    const currentImage = bannerImages[currentIndex];

    return (
        <div className="relative rounded-xl overflow-hidden w-full sm:h-[650px] h-[450px]">
            <div className="w-full absolute flex duration-300">
                <BannerItem image={currentImage} />
            </div>
        </div>
    );
};

export default Banner;