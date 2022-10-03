import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const InterestedEvent = (props) => {
    // console.log(props.interestedEvent);
    // const { user } = useAuth();

    const {userEmail, eventTitle, eventId, _id} = props.interestedEvent;

    const [interestedEventDetails, setInterestedEventDetails] = useState([]);

    const id = _id;

    useEffect( ()=>{
        fetch('http://localhost:3001/events')
        .then(res => res.json())
        .then(data => {
            const filteredEvents = data.filter(selectedEvent => selectedEvent._id === eventId)
            setInterestedEventDetails(filteredEvents[0]);
        });
    }, [eventId])
    console.log(interestedEventDetails);

    const handleRemoveBtn = () =>{
        const proceed = window.confirm('Are you sure you want to remove this event?');
        if(proceed){
            const url = `http://localhost:3001/interestedEvents/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Removed Successfully!')
                    window.location.reload();

                    // update the UI (needs to debug. currently i am using reload())
                    // const remainingEvents = interestedEventDetails.filter(intsEvent => interestedEventDetails._id !== id);
                    // setInterestedEventDetails(remainingEvents);
                }
            })
        }
    }

    const handleJoinBtn = () =>{
        //add (POST) the event to a new cluster joined_events_DB storing user email and event id
        // const userEmail = user.email;
        // const eventId = _id;
        const clickTime = new Date();
        const joinedEventData = {userEmail, eventId, eventTitle, clickTime};

        axios.post('http://localhost:3001/joinedEvents', joinedEventData)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('Added in Joined List!')
            }
        })

        //delete from interest after joining 
        const url = `http://localhost:3001/interestedEvents/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // alert('Removed Successfully!')
                    window.location.reload();

                    // update the UI (needs to debug. currently i am using reload())
                    // const remainingEvents = interestedEventDetails.filter(intsEvent => interestedEventDetails._id !== id);
                    // setInterestedEventDetails(remainingEvents);
                }
            })
    }

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
                        <button className='btn btn-outline-dark btn-sm mx-2' onClick={handleRemoveBtn}>Remove</button>

                        {/* <Link to={`/join/${_id}`}><button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button></Link> */}
                        <button className='btn btn-outline-warning btn-sm mx-2' onClick={handleJoinBtn}>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestedEvent;