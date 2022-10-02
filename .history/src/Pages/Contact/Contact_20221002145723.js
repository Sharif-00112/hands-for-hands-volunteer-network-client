import React from 'react';
import { useTitle } from '../../hooks/useTitle';

const Contact = () => {
    useTitle("Contact");

    return (
        <div id='contact'>
            <h2>Contact Page</h2>
        </div>
    );
};

export default Contact;