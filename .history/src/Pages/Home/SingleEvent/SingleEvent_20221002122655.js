import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    // console.log(props.singleEvent);
    const {eventTitle, description, eventDate, eventImage, _id} = props.singleEvent;

    return (
        <div className='bg-success bg-opacity-25'>
            <img className='w-100 p-2' src={eventImage} alt="" />
            <h2>{eventTitle}</h2>
            <p>Date: {eventDate}</p>
            <p><small>{description}</small></p>
            
            <Link to={`/join/${_id}`}><button className='btn btn-secondary'>Join Now</button></Link>
        </div>
    );
};

export default SingleEvent;