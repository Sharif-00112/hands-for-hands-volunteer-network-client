import React, { useEffect, useState } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => setAllEvents(data));
    }, [])


    return (
        <div className='container' id='events'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Events</h1>
                <div className="events-container">
                    {
                        allEvents.map(singleEvent => <SingleEvent 
                            key={singleEvent._id}
                            singleEvent = {singleEvent}
                        ></SingleEvent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEvents;