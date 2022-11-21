import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Image = ({ url, alt }) => <img src={url} width={800} height={500} alt={alt} />

export default function CarouselSensor() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
        >
            <div>
                <Image url='/sensor.png' alt='Sensor MQ 135' />
            </div>
            <div>
                <Image url='/backSensor.png' alt='Somponentes Sensor MQ 135' />
            </div>
        </Carousel>
    );
}
