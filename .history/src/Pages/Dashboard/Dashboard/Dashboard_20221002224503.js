import React from 'react';
import { useTitle } from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle("Dashboard");

    return (
        <div>
            <h2>User Dashboard</h2>
        </div>
    );
};

export default Dashboard;