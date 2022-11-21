import { Typography } from '@mui/material'
import React from 'react'

export const CalidadAire = () => {
    return (
        <div className='svgRender'>
            <Typography variant="h2" component="div" > Tranqui Todo esta bien:    sin riesgos potenciales </Typography>       
            <img src='/calm.svg' alt='calma' />
        </div>
    )
}

export const AirLowHealty = () => {
    return (
        <div className='svgRender'>
            <Typography variant="h2" component="div"> Potencial Riesgo; poca contaminación  </Typography>       
           <img src='/airLowHealthy.svg' alt=' Poco saludable'  />
        </div>
    )
}

export const Warning = () => {
    return (
        <div className='svgRender'>
            <Typography variant="h2" component="div" > Peligro: Aire Muy contaminado  </Typography>       
           <img src='/warning.svg' alt=' peligro'   />
        </div>
    )
}