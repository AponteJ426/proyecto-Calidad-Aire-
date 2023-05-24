
import React, { useState,useEffect} from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { set, ref, onValue } from "firebase/database";
import { db } from '../firebaseConec/firebase';


export const HeaderSensorVibracion = ({ data }) => {

    const [sensorOne, setsensorOne] = useState();
    const [sensorTwo, setsensorTwo] = useState();
    const [sensorThree, setsensorThree] = useState();

    useEffect(() => {
        onValue(ref(db, "/vibracion/sensorUno"), (snapshotFirebase) => {
            setsensorOne(snapshotFirebase._node.value_)
        })

        onValue(ref(db, "/vibracion/sensorDos"), (snapshotFirebase) => {
            setsensorTwo(snapshotFirebase._node.value_)
        })

        onValue(ref(db, "/vibracion/sensorTres"), (snapshotFirebase) => {
            setsensorThree(snapshotFirebase._node.value_)
        })
    }, [])

    function CardSensorV({ name, signal }) {
        return (
            <Grid item sx={{ padding: 3, boxShadow: 5, background: "#e8e8e8", borderRadius: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h3' component="h3">
                    {name}
                </Typography>
                {signal===1?
                <Typography variant='h2' component="h2" sx={{color:"green"}}>
                    On
                </Typography>:
                <Typography variant='h2' component="h2" sx={{color:"red"}}>
                    Off
                </Typography>
                }
            </Grid>
        )
    }
    function setDtb() {
        set(ref(db, "/switch/"), { normal: 1 })
    }
    function setDtbALamr() {
        set(ref(db, "/switch/"), { normal: 0 })
    }
    return (
        <>
            <Typography variant="h2" component="div" sx={{ textAlign: 'start' }}>
                Sensor Sismo
            </Typography>
            <Grid container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "7rem" }} id="infoSensor" >
                <Grid item xs={6} className="infoSensorVibracion" id="infoSensorVibracion"  >
                    <Typography variant="p" component="div" sx={{ fontSize: "2.7vmin", padding: "2vmin", lineHeight: "3.5vmin" }} >
                        El sensor de vibración, el cual funciona básicamente por medio de un elemento flexible metido en el interior de un cilindro, estando ambos a un potencial diferente, cuando se produce vibración el elemento interior chocará contra las paredes del cilindro conduciendo así una pequeña corriente. Luego esta corriente se compara con la referencia dada por el nivel del potenciómetro por  medio del amplificador operacional, si la corriente supera la referencia la salida digital del módulo (D0), se  pondrá en alto.<br />
                        <br />
                        VCC = Referencia  positiva<br />
                        GND = Referencia  negativa <br />
                        D0 = Salida digital (en alto cuando exista vibración)<br />

                    </Typography>
                </Grid>
                <Grid item xs={5}
                 sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "7rem",boxShadow: 5, background: "#e8e8e8", borderRadius: 5,}} >
                    <Button variant="contained" color="success" onClick={setDtb} disabled={data === 1 ? true : false} sx={{ margin: 5, marginTop: 10,width:"80%"   }}>
                        activar circuito
                    </Button>
                    <Button variant="contained" color="error" onClick={setDtbALamr} disabled={data === 0 ? true : false} sx={{ margin: 5,width:"80%" }}>
                        Desactivar Alarma
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={{ display: "row", justifyContent: "space-around", alignItems: "center", marginBottom: "4rem" }}>
                <CardSensorV name={"Sensor Uno"} signal={sensorOne} />
                <CardSensorV name={"Sensor Dos "} signal={sensorTwo} />
                <CardSensorV name={"Sensor Tres"} signal={sensorThree} />
            </Grid>
        </>
    )
}