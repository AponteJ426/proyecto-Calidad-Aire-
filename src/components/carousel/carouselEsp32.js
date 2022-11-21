import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarouselEsp32() {
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
                <img src='/esp32.png' width={200} height={500} alt='Esp32' />
            </div>
            <div>
                <img src='/Esp32Info.png' width={300} height={500} alt='Componentes Esp32' />
            </div>
            <div>
                <img src='/codeSensor.png' width={200}  height={500} alt='Somponentes Sensor MQ 135' />
            </div>
        </Carousel>
    );
}
