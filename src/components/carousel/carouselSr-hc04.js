import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';


export default function CarouselHc04() {



    return (
        <Grid sx={{ 
            borderRadius: "20px",
            boxShadow: 10,
            background: "#e2e2e2",

        }}>
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
                <img className='hc-04' src='/sen_hc-sr04/hcsr04_funcionamiento.png' width={10}  height={200} alt='Somponentes Sensor MQ 135' />
            </div>
            
            <div>
                <img className='hc-04' src='/sen_hc-sr04/ULTRASONICO_500x.png' width={10}  height={200} alt='Somponentes Sensor MQ 135' />
            </div>
            <div>
                <img className='hc-04' src='/sen_hc-sr04/lateral.png' width={10}  height={200} alt='Somponentes Sensor MQ 135' />
            </div>
        </Carousel>
        </Grid>
    );
}
