import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';


const CompleteProfile = () => {
    useTitle("Complete Profile");

    const {error, verifyEmail} = useAuth();

    return (
        <div>
            <h3 className='pt-5'>Complete Profile</h3> 
            <hr className='w-25 mx-auto'/>

            <br />

            <Link className='text-decoration-none text-white m-2' to="/changePassword"><button className='btn btn-secondary p-2 m-3'>Change Password</button></Link>

            <Link className='text-decoration-none text-white m-2' to="/updateName"><button className='btn btn-secondary p-2 m-3'>Update User Name</button></Link>

            <button onClick={verifyEmail} className='btn btn-success p-2 m-3'>Verify Email</button>

            <br />
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default CompleteProfile;