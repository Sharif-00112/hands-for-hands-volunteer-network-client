import React, { useEffect } from 'react';
import { useState } from 'react';
import InterestedEvent from '../InterestedEvent/InterestedEvent';

const InterestedEvents = () => {
    const [interestedEvents, setInterestedEvents] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/interestedEvents')
        .then(res => res.json())
        .then(data => setInterestedEvents(data));
    }, [])

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
                    interestedEvents.filter()
                }
            </div>
        </div>
    );
};

export default InterestedEvents;