import React from 'react'
import { Grid, Typography } from '@mui/material'
import CarouselEsp32 from '../carousel/carouselEsp32'

export const BodyEsp32 = () => {
    return (
        <Grid container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center",marginBottom:"7rem" }} id="infoSensor" >
            <Grid item xs={6} className="infoSensorEsp32" id="infoSensorEsp32"  >
                <Typography variant="h2" component="div" >
                Módulo ESP32 
                </Typography>
                <Typography variant="p" component="div" sx={{ fontSize: "2.7vmin", padding: "2vmin",lineHeight:"3.5vmin"}} >
            El módulo ESP32 es una solución de Wi-Fi/Bluetooth todo en uno, 
             integrada y certificada que proporciona no solo la radio inalámbrica,
             sino también un procesador integrado con interfaces para conectarse con varios periféricos.<br/>
            <br/>
              El procesador en realidad tiene dos núcleos de procesamiento cuyas frecuencias operativas pueden controlarse<br/>
               independientemente entre 80 megahercios (MHz) y 240 MHz. <br/>
               Los periféricos del procesador facilitan la conexión a 
               una variedad de interfaces externas como:<br/><br/>
           * Interfaz periférica serial (SPI)<br/>
            * I2C<br/>
             * Transmisor receptor asíncrono universal (UART)<br/>
            * I2S<br/>
            * Ethernet<br/>
            * Tarjetas SD<br/>
            * Interfaces táctiles y capacitivas<br/>
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <CarouselEsp32 />
            </Grid>
        </Grid>
    )
}
