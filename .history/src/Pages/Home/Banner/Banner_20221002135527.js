import React from 'react';
import cover from '../../../images/logos/cover.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-100' src={cover} alt="CoverPhoto" />
        </div>
    );
};

export default Banner;