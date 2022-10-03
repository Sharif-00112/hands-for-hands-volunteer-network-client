import React, { useEffect } from 'react';
import { useState } from 'react';

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


        </div>
    );
};

export default InterestedEvents;