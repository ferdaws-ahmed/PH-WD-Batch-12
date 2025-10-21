import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../findUs/FindUs';
import QZon from '../QZone/QZone';

const RightAside = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZon></QZon>
        </div>
    );
};

export default RightAside;
