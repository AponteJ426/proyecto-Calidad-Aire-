import React from 'react'
import { Grid, Typography } from '@mui/material'
import CarouselSensor from '../carousel/carouselSenso'

export const Bodysensor = () => {
    return (
        <Grid container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center",marginTop: " 5vmin" }} id="infoSensor" >
            <Grid item xs={6} >
                <CarouselSensor />
            </Grid>
            <Grid item xs={6} className="infoSensor"  >
                <Typography variant="h2" component="div" >
                    Sensor MQ-135
                </Typography>
                <Typography variant="p" component="div" sx={{ fontSize: "2.7vmin", padding: "2vmin" ,lineHeight:"3.5vmin" }} >
                    Es un dispositivo que se utiliza para detectar, medir o controlar los gases como el amoníaco, el benceno, el azufre, el dióxido de carbono, el humo y otros gases nocivos se denomina sensor de gas de la calidad del aire.
                    <br />
                    El sensor de calidad del aire MQ135, que pertenece a la serie de sensores de gas MQ , se usa ampliamente para detectar gases nocivos y humo en el aire fresco.<br />
                    Es altamente sensible al NH3, NOx, CO2, benceno, humo y otros gases peligrosos en la atmósfera,
                    la señal de salida que proporciona el MQ-135 es dual, de carácter analógico y digital.
                    <br />
                    <br />
                    la señal analógica proporcionada, esta viene a ser directamente proporcional al incremento de voltaje.
                    <br />
                    <br />
                    La señal digital, esta presenta niveles TTL por lo que esta señal puede ser procesada por un microcontrolador.
                </Typography>
            </Grid>
        </Grid>
    )
}
