import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import JoinedEvent from '../JoinedEvent/JoinedEvent';

const JoinedEvents = () => {
    const {user} = useAuth();

    const [userJoinedEvents, setUserJoinedEvents] = useState([]);

    useEffect(() =>{
        fetch('https://safe-citadel-76278.herokuapp.com/joinedEvents')
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

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-3">
                {
                    userJoinedEvents.map(joinedEvent => <JoinedEvent
                    key={joinedEvent._id}
                    joinedEvent = {joinedEvent}
                    ></JoinedEvent>)
                }
            </div>
        </div>
    );
};

export default JoinedEvents;