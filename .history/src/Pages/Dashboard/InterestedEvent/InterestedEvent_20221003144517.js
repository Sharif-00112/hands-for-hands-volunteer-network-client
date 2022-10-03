import React, { useEffect, useState } from 'react';

const InterestedEvent = (props) => {
    // console.log(props.interestedEvent);
    const {userEmail, eventId, eventTitle, clickTime, _id} = props.interestedEvent;

    const [interestedEventDetails, setInterestedEventDetails] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => {
            const filteredEvents = data.filter(selectedEvent => selectedEvent._id === eventId)
            setInterestedEventDetails(filteredEvents);
        });
    }, [eventId])

    return (
        <div className="">
            <div className="col">
                <div className="card h-100">
                    {/* <img src={eventImage} className="card-img-top p-2" alt={eventTitle}/> */}
                    <div className="card-body">
                        {/* <h5 className={eventTitle}>{eventTitle}</h5> */}
                        {/* <p className="card-text">{description}</p> */}
                        {/* <small className="text-muted pe-2">Event Date: {eventDate}</small> */}
                    </div>
                    <div className="card-footer">
                        {/* <Link to={`/interested/${_id}`}><button className='btn btn-outline-dark btn-sm mx-2' onClick={handleInterestedBtn}>Interested</button></Link> */}
                        {/* <button className='btn btn-outline-dark btn-sm mx-2' onClick={handleInterestedBtn}>Interested</button> */}

                        {/* <Link to={`/join/${_id}`}><button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button></Link> */}
                        {/* <button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestedEvent;