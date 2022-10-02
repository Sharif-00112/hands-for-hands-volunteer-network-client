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
        // <div className='container' id='events'>
        //     <div className="row">
        //         <h1 className='text-primary text-center mt-2'> Our Events</h1>
        //         <div className="events-container">
        //             {
        //                 allEvents.map(singleEvent => <SingleEvent 
        //                     key={singleEvent._id}
        //                     singleEvent = {singleEvent}
        //                 ></SingleEvent>)
        //             }
        //         </div>
        //     </div>
        // </div>

        <div className="">
            <h1 className='text-primary text-center mt-2'> Our Events</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3 m-2">
                {
                    allEvents.map(singleEvent => <SingleEvent 
                        key={singleEvent._id}
                        singleEvent = {singleEvent}
                    ></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default AllEvents;