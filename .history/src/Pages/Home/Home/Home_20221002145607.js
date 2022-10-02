import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import About from '../../About/About/About';
import Contact from '../../Contact/Contact';
import AllEvents from '../AllEvents/AllEvents';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle("Home");

    return (
        <div className="" id='home'>
            <Banner></Banner>
            <AllEvents></AllEvents>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;