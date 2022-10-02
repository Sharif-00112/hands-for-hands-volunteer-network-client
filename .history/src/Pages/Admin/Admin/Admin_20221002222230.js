import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import logo from '../../../images/logos/Group 1329.png'


const Admin = () => {
    useTitle("Admin");

    return (
        <div>
            <img className='w-25 mx-auto my-3' src={logo} alt="" />
            <h2>Admin Login Page</h2>
            
        </div>
    );
};

export default Admin;