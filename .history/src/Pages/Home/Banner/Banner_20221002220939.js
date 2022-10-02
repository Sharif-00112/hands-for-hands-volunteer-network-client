// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import cover from '../../../images/logos/cover.jpg'
import logo from '../../../images/logos/Group 1329.png'

const Banner = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

    return (
        <div>
            <div className="position-relative">
                <img className='img-fluid mx-3' src={cover} alt="CoverPhoto" />
                <div className="text-center text-dark bg-light bg-opacity-75 m-3 p-2 position-absolute top-50 start-50 translate-middle">
                    <h1 className='px-5 fw-bolder'>HANDS FOR HANDS</h1>
                    {/* <h3 className='px-5'>---Volunteer Network---</h3> */}
                    <img className='w-75 mx-auto my-3' src={logo} alt="" />
                </div> 
            </div>

            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-primary'>Hands For Hands</h3>
                        <p>Lets Make The World Great Again!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Hands For Hands</h3>
                        <p>Lets Make The World Great Again!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hands For Hands</h3>
                        <p>Lets Make The World Great Again!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Banner;