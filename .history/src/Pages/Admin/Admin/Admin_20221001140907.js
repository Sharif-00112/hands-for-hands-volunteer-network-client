import React from 'react';
import { useTitle } from '../../../hooks/useTitle';

const Admin = () => {
    useTitle("Admin");

    return (
        <div>
            <h2>Admin Page</h2>
        </div>
    );
};

export default Admin;