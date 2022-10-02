// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import cover from '../../../images/logos/cover.jpg'

const Banner = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

    return (
        <div>
            <div className="position-relative">
                <img className='img-fluid mx-3' src={cover} alt="CoverPhoto" />
                <div className="content text-center text-white bg-success bg-opacity-75 m-3 p-2 position-absolute top-50 start-50 translate-middle">
                    <h1 className='px-5'>HANDS FOR HANDS</h1>
                    <h3 className='px-5'>---Volunteer Network---</h3>
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