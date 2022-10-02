import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import InterestedEvents from '../InterestedEvents/InterestedEvents';
import JoinedEvents from '../JoinedEvents/JoinedEvents';

const Dashboard = () => {
    useTitle("Dashboard");

    return (
        <div>
            <h2 className='m-3'>User Dashboard</h2>
            <hr className='mx-auto w-25'/>
            <JoinedEvents></JoinedEvents>
            <InterestedEvents></InterestedEvents>
        </div>
    );
};

export default Dashboard;