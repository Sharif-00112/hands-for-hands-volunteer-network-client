import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JoinedEvent = (props) => {
    // console.log(props.joinedEvent);
    const {userEmail, eventTitle, eventId, _id} = props.joinedEvent;

    const [joinedEventDetails, setJoinedEventDetails] = useState([]);

    const id = _id;

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => {
            const filteredEvents = data.filter(selectedEvent => selectedEvent._id === eventId)
            setJoinedEventDetails(filteredEvents[0]);
        });
    }, [eventId])
    // console.log(joinedEventDetails);

    const handleLeaveBtn = () => {
        
    }

    return ( 
        <div className="">
        <div className="col">
            <div className="card h-100">
                <img src={joinedEventDetails.eventImage} className="card-img-top p-2" alt={joinedEventDetails.eventTitle}/>
                <div className="card-body">
                    <h5 className='card-title'>{joinedEventDetails.eventTitle}</h5>
                    <p className="card-text">{joinedEventDetails.description}</p>
                    <small className="text-muted pe-2">Event Date: {joinedEventDetails.eventDate}</small>
                </div>
                <div className="card-footer">
                    {/* <Link to={`/interested/${_id}`}><button className='btn btn-outline-dark btn-sm mx-2' onClick={handleInterestedBtn}>Interested</button></Link> */}
                    <button className='btn btn-outline-dark btn-sm mx-2' onClick={handleLeaveBtn}>Leave</button>

                    <Link to={`/donation/${_id}`}><button className='btn btn-outline-warning btn-sm mx-2'>Donate</button></Link>
                    {/* <button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Donate</button> */}
                </div>
            </div>
        </div>
    </div>
    );
};

export default JoinedEvent;