import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center mt-10 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 px-3 py-2'>Latest</p>
            
            <Marquee className='flex' pauseOnClick={true}>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae error optio nam numquam voluptas id. Impedit quas velit nisi obcaecati.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
