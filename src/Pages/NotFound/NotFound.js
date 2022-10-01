import React from 'react';
import { Link } from 'react-router-dom';
import errorIMG from '../../images/logos/404-error.jpg'

const NotFound = () => {
    return (
        <div>
            {/* <h2>404 Not Found</h2> */}
            <img className='w-50 px-5' src={errorIMG} alt="404 Page Not Found!" />
            <br />
            <Link to='/'><button className='btn btn-secondary mb-5'>Go to Homepage</button></Link>
        </div>
    );
};

export default NotFound;