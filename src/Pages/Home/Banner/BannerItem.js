import React from 'react';

const BannerItem = ({ id, img, prev, next }) => {
    return (
        <>
            <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className="carusol-img"><img alt='' src={img} className="w-full" /></div>
                <div className="absolute flex justify-start transform -translate-y-1/2  left-24 top-1/4">
                    <h1 className='text-5xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2  left-24 top-1/2">
                    <p className='text-xl text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2  left-24 top-3/4">
                    <button className="btn btn-error mr-5">Error</button>
                    <button className="btn btn-outline btn-error">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    );
};

export default BannerItem;