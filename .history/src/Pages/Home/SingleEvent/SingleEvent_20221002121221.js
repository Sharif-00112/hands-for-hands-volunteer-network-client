import React from 'react';

const SingleEvent = (props) => {
    // console.log(props.singleEvent);
    const {eventTitle, description, eventDate, eventImage} = props.singleEvent;
    return (
        <div>
            <h4>{eventTitle}</h4>
        </div>
    );
};

export default SingleEvent;