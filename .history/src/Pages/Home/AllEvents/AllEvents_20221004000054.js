import React, { useEffect, useState } from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => setAllEvents(data));
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = allEvents.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setAllEvents(matchedProducts);
    }
 
    return (
        <div className="">
            <div className="search-container p-2">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="  Search Product" />
            </div>
            <h2 className='text-secondary text-center mt-4'>Our Current Events</h2>
            <hr className='w-25 mx-auto'/>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-3">
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