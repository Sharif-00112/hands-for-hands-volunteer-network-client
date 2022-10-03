import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import InterestedEvents from '../InterestedEvents/InterestedEvents';
import JoinedEvents from '../JoinedEvents/JoinedEvents';

const Dashboard = () => {
    useTitle("Dashboard");
    const {user} = useAuth();

    return (
        <div>
            <h2 className='mt-3'>User Dashboard</h2>
            <h3>{user.email}</h3>
            <hr className='mx-auto w-25'/>
            
            <JoinedEvents></JoinedEvents>
            <InterestedEvents></InterestedEvents>
        </div>
    );
};

export default Dashboard;