import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import InterestedEvent from '../InterestedEvent/InterestedEvent';

const InterestedEvents = () => {
    const {user} = useAuth();

    const [userInterestedEvents, setUserInterestedEvents] = useState([]);

    useEffect( ()=>{
        fetch('https://safe-citadel-76278.herokuapp.com/interestedEvents')
        .then(res => res.json())
        .then(data => {
            const filteredEvents = data.filter(userWiseInterestedEvents => userWiseInterestedEvents.userEmail === user.email)
            setUserInterestedEvents(filteredEvents);
        });
    }, [user.email])

    return (
        <div>
            <h3 className='mt-5'>Events you are interested to:</h3>
            <hr className='mx-auto w-50'/>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-3">
                {
                    userInterestedEvents.map(interestedEvent => <InterestedEvent
                        key={interestedEvent._id}
                        interestedEvent = {interestedEvent}
                    ></InterestedEvent>)
                }
            </div>
        </div>
    );
};

export default InterestedEvents;