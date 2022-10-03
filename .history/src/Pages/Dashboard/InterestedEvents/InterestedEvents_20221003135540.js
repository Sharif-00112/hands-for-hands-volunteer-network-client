import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import InterestedEvent from '../InterestedEvent/InterestedEvent';

const InterestedEvents = () => {
    const {user} = useAuth();

    const [allInterestedEvents, setAllInterestedEvents] = useState([]);
    const [userInterestedEvents, setUserInterestedEvents] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/interestedEvents')
        .then(res => res.json())
        .then(data => setAllInterestedEvents(data));
    }, [])

    const filteredEvents =  allInterestedEvents.filter(userWiseInterestedEvents => userWiseInterestedEvents.userEmail === user.email);
    setUserInterestedEvents(filteredEvents);

    return (
        <div>
            <h3 className='mt-5'>Events you are interested to:</h3>
            <hr className='mx-auto w-50'/>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-3">
                {/* {
                    interestedEvents.map(interestedEvent => <InterestedEvent
                        key={interestedEvent._id}
                        interestedEvent = {interestedEvent}
                    ></InterestedEvent>)
                } */}

                {
                    
                }
            </div>
        </div>
    );
};

export default InterestedEvents;