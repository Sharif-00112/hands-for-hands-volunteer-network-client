import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const JoinedEvents = () => {
    const {user} = useAuth();

    const [userJoinedEvents, setUserJoinedEvents] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/joinedEvents')
        .then (res => res.json())
        .then( data => {
            const filteredEvents = data.filter(userWiseJoinedEvents => userWiseJoinedEvents.userEmail === user.email);
            setUserJoinedEvents(filteredEvents);
        })
    } ,[user.email])

    return (
        <div>
            <h3 className='mt-5'>Events you have joined:</h3>
            <hr className='mx-auto w-50'/>
        </div>
    );
};

export default JoinedEvents;