import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';

const Home = () => {
    useTitle("Home");

    return (
        <div className="" id='home'>
            <Banner></Banner>
            <Events></Events>

            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;