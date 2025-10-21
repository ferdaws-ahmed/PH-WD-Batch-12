import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playground from '../../assets/playground.png'

const QZon = () => {
    return (
        <div className='bg-base-200 w-[70%] p-3'>
            <h1 className='text-lg font-bold'>Q-Zone</h1>
            <div className='space-y-5'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZon;
