import React from 'react';
import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'
import './Banner.css'
import BannerItem from './BannerItem';
const Banner = () => {
    const bannerData = [
        {
            image: slider1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: slider2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: slider3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: slider4,
            prev: 3,
            id: 4,
            next: 1
        }
    ]
    return (
        <>
            <div className="carousel w-full h-4/5">
                {
                    bannerData.map(b => <BannerItem img={b.image} id={b.id} key={b.id} prev={b.prev} next={b.next} ></BannerItem>)
                }
            </div>
        </>
    );
};

export default Banner;