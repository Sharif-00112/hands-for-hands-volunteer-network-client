import React from 'react';
import cover from '../../../images/logos/cover.jpg'

const Banner = () => {
    return (
        <div>
            <img className='img-fluid m-3' src={cover} alt="CoverPhoto" />
        </div>
    );
};

export default Banner;