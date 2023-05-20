

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselHeader() {
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
                <img src="/image1.png" height={650} alt="Imagenes proyecto" />
            </div>
            <div>
                <img src="/image2.png" height={650} alt="Imagenes proyecto" />
            </div>
            <div>
                <img src="/logoU.png" height={650} alt="Imagenes proyecto" />
            </div>
        </Carousel>
    );
}
