import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <hr className='mx-auto w-75'/>
            <p><small>Copyright @ {year}; All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;