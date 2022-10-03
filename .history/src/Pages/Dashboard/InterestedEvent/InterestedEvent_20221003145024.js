import React, { useEffect, useState } from 'react';

const InterestedEvent = (props) => {
    // console.log(props.interestedEvent);
    const {userEmail, eventId, clickTime} = props.interestedEvent;

    const [interestedEventDetails, setInterestedEventDetails] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => {
            const filteredEvents = data.filter(selectedEvent => selectedEvent._id === eventId)
            setInterestedEventDetails(filteredEvents[0]);
        });
    }, [eventId])
    console.log(interestedEventDetails);

    return (
        <div className="">
            <div className="col">
                <div className="card h-100">
                    <img src={interestedEventDetails.eventImage} className="card-img-top p-2" alt={interestedEventDetails.eventTitle}/>
                    <div className="card-body">
                        <h5 className='card-title'>{interestedEventDetails.eventTitle}</h5>
                        <p className="card-text">{interestedEventDetails.description}</p>
                        <small className="text-muted pe-2">Event Date: {interestedEventDetails.eventDate}</small>
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