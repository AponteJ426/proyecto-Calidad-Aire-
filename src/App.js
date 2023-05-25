import './App.css';

import React, { useEffect, useState } from 'react';
import BackTop from './components/backTop';
import CarouselHeader from './components/carousel/carouselHader';
import { Header } from './components/navBar/navBar';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { CustomPaperContainer } from './styled';
import { ScrollEventEsp32, ScrollEventInfo, ScrollPrintDataSensor } from './scrollEvent';
import { Fab, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system';
import { Bodysensor } from './components/HeaderSensor/bodysensor';
import { onValue } from "firebase/database";
import { dataAnalogRead, dataAlcohol, dataSensor } from './components/firebaseConec/firebase';
import { BodyEsp32 } from './components/HeaderSensor/bodyEsp32';
import RenderLineChart from './components/graphic/graphic';
import { CalidadAire, AirLowHealty, Warning } from './components/HeaderSensor/calidadAire';
import { HeaderSensorVibracion } from './components/HeaderSensorVibarcion/HeaderSensorVibracion';
import { GraphicD } from './components/graphic/graphicD';
import Footer from './components/footer/footer';

function scrolleventFab() {
  document.querySelector(".scrollEventFab").scrollIntoView()
};
function scrolleventFabTwo() {
  document.querySelector(".scrollEventFabTwo").scrollIntoView()
};
const RenderFab = () => {
  let fab = document.querySelector(".FabToStart")
  let fabOffsetTop = fab.offsetTop - 50
  let scrollTop = document.documentElement.scrollTop
  let fabTwo = document.querySelector(".FabToMiddle")
  let fabTwoOffsetTop = fabTwo.offsetTop - 30

  if (fabOffsetTop > scrollTop) {
    fab.style.opacity = 1
  }
  else {
    fab.style.opacity = 0
  };
  if (fabTwoOffsetTop > scrollTop) {
    fabTwo.style.opacity = 1
  }
  else {
    fabTwo.style.opacity = 0
  }
}


export default function App() {

  const [analogReadSensor, setanalogReadSensor] = useState(0);
  const [voltajeSensor, setvoltajeSensor] = useState(0)
  const [alcoholDetectedGraphic, setalcoholDetectedGraphic] = useState([]);
  const [AlcoholPrint, setAlcoholPrint] = useState(0);
  const [sensorVibration, setsensorVibration] = useState(false);

  const [render, setrender] = useState(false)
  const [renderT, setrenderT] = useState(false)
  const [renderWarn, setrenderWarn] = useState(false)

  useEffect(() => {
    onValue(dataAnalogRead, (snapshotFirebase) => {
      setanalogReadSensor(snapshotFirebase._node.value_)
      setrender(
        snapshotFirebase._node.value_ <= 1000 ?
          true :
          false)
      setrenderT(
        snapshotFirebase._node.value_ > 1000 && snapshotFirebase._node.value_ < 1800 ?
          true :
          false)
      setrenderWarn(
        snapshotFirebase._node.value_ >= 1800
      )
      setvoltajeSensor(snapshotFirebase._node.value_ * (5.0 / 10023.0))
    })

    onValue(dataAlcohol, (snapshotFirebaseAlcohol) => {
      setalcoholDetectedGraphic((prev) => {
        const renderGraphic = [...prev, snapshotFirebaseAlcohol._node.value_.toFixed(2)]
        if (renderGraphic.length > 12) {
          renderGraphic.shift()
        }
        return renderGraphic
      })
      setAlcoholPrint(snapshotFirebaseAlcohol._node.value_)
    })

    onValue(dataSensor, (snapshotFirebase) => {
      setsensorVibration(snapshotFirebase._node.value_)
    })

    const handleCallFunctionsScroll = () => {
      ScrollEventInfo()
      ScrollPrintDataSensor()
      ScrollEventEsp32()
      RenderFab()

    }
    window.addEventListener('scroll', handleCallFunctionsScroll)
    return () => {
      window.removeEventListener('scroll', handleCallFunctionsScroll)
    }


  }, [])

  return (
    <div className="container">
      <header className="header">
        <Header title={"Vivienda Domótica"} />
        <BackTop color="primary" />
        <CarouselHeader />
        <Container sx={{ marginTop: '-5vmin', position: 'relative', minWidth:"180vmin"}}  >
          <CustomPaperContainer elevation={24}  >
            <Typography variant="h1" component="div" sx={{ margin: "0.5vmin", marginTop: 0 }}>
              ! Empecemos ¡
              <Typography variant="h5" component="div" sx={{ margin: "0vmin", }} className="scrollEventFab">
              </Typography>
            </Typography>
            <Fab
              size="medium"
              color='grey'
              onClick={scrolleventFab}
              aria-label="scroll"
              className="animate__animated animate__bounce animate__infinite FabToStart"
            >
              <KeyboardArrowDownRoundedIcon fontSize='medium' />
            </Fab>
            <Bodysensor />

            <Grid container sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "4vmin",
              marginTop: "2vmin",
            }}
              className="printDataSensor"
            >
              <Grid item xs={4}  >
                <Typography variant="h1" component="div">{(analogReadSensor ? analogReadSensor + "Ao" :
                  <Typography variant="h2" component="div">Sin Conexión </Typography>
                )}
                </Typography>
                <Typography variant="h4" component="div">Señal Analógica <br />Sensor MQ-135</Typography>
              </Grid>
              <Grid item xs={4}  >
                <Typography variant="h1" component="div">{voltajeSensor.toFixed(2) + " V "}</Typography>
                <Typography variant="h4" component="div">Voltaje Del Sensor </Typography>
              </Grid>
              <Grid item xs={4}  >
                <Typography variant="h1" component="div">{AlcoholPrint.toFixed(2) + " mg/L"}</Typography>
                <Typography variant="h4" component="div">{"Concentración Alcohol"}</Typography>
              </Grid>
            </Grid>
            <Typography variant="h5" component="div" sx={{ margin: "0vmin", }} className="scrollEventFabTwo">
            </Typography>
            <Fab
              size="medium"
              color='grey'
              onClick={scrolleventFabTwo}
              aria-label="scroll"
              className="animate__animated animate__bounce animate__infinite FabToMiddle"
            >
              <KeyboardArrowDownRoundedIcon fontSize='medium' />
            </Fab>
            <BodyEsp32 />
            <RenderLineChart data={alcoholDetectedGraphic} />
            {render && <CalidadAire />}
            {renderT && <AirLowHealty />}
            {renderWarn && <Warning />}
            <HeaderSensorVibracion data={sensorVibration} />
            <GraphicD />
          </CustomPaperContainer>
        </Container>
        <Footer/> 
      </header>
    </div>
  )

}
