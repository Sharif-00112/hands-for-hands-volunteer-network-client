import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    // console.log(props.singleEvent);
    const {eventTitle, description, eventDate, eventImage, _id} = props.singleEvent;

    return (
        // <div className='card'>
        //     <img className='w-100 p-2' src={eventImage} alt="" />
        //     <h2>{eventTitle}</h2>
        //     <p>Date: {eventDate}</p>
        //     <p><small>{description}</small></p>
            
        //     <Link to={`/join/${_id}`}><button className='btn btn-secondary'>Join Now</button></Link>
        // </div>
        <div className="">
            {/* <div class="card">
                <img className='w-100 p-2' src={eventImage} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div> */}

            <div class="col">
                <div class="card h-100">
                    <img src={eventImage} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;