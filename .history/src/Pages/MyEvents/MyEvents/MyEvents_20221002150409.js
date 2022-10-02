import React from 'react';
import { useTitle } from '../../../hooks/useTitle';

const MyEvents = () => {
    useTitle("My Events");

    return (
        <div>
            <h2>My Events</h2>
        </div>
    );
};

export default MyEvents;