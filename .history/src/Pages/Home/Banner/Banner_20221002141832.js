import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import cover from '../../../images/logos/cover.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            {/* <img className='img-fluid m-3' src={cover} alt="CoverPhoto" /> */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='primary'>Hands For Hands</h3>
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
            </Carousel>
        </div>
    );
};

export default Banner;