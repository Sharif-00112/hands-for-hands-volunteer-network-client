import React from 'react';
import { useTitle } from '../../../hooks/useTitle';

const About = () => {
    useTitle("About");

    return (
        <div id='about'>
            <h2>This is About us</h2>
            <br />
        </div>
    );
};

export default About;