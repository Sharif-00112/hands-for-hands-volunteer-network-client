import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    // console.log(props.singleEvent);
    const {eventTitle, description, eventDate, eventImage, _id} = props.singleEvent;

    return (
        <div className="">
            <div className="col">
                <div className="card h-100">
                    <img src={eventImage} className="card-img-top p-2" alt={eventTitle}/>
                    <div className="card-body">
                        <h5 className={eventTitle}>{eventTitle}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted pe-2">Event Date: {eventDate}</small>
                        <Link to={`/join/${_id}`}><button className='btn btn-outline-secondary btn-sm'>Join Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;