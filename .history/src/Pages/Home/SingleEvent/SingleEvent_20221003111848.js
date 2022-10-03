import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SingleEvent = (props) => {
    // console.log(props.singleEvent);
    const {eventTitle, description, eventDate, eventImage, _id} = props.singleEvent;
    const { user } = useAuth();

    const handleInterestedBtn = () =>{
        //add (POST) the event to a new cluster interested_events_DB storing user email and event id
        const userEmail = user.email;
        const eventId = _id;
        const interestedEventData = {userEmail, eventId, eventTitle};

        axios.post('http://localhost:3001/interestedEvents', interestedEventData)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('Added in Interest List!')
            }
        })
    }

    const handleJoinBtn = () =>{
        //add (POST) the event to a new cluster joined_events_DB storing user email and event id
        const userEmail = user.email;
        const eventId = _id;
        const joinedEventData = {userEmail, eventId};

    }

    return (
        <div className="">
            <div className="col">
                <div className="card h-100">
                    <img src={eventImage} className="card-img-top p-2" alt={eventTitle}/>
                    <div className="card-body">
                        <h5 className={eventTitle}>{eventTitle}</h5>
                        <p className="card-text">{description}</p>
                        <small className="text-muted pe-2">Event Date: {eventDate}</small>
                    </div>
                    <div className="card-footer">
                        {/* <Link to={`/interested/${_id}`}><button className='btn btn-outline-dark btn-sm mx-2' onClick={handleInterestedBtn}>Interested</button></Link> */}
                        <button className='btn btn-outline-dark btn-sm mx-2' onClick={handleInterestedBtn}>Interested</button>

                        {/* <Link to={`/join/${_id}`}><button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button></Link> */}
                        <button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;