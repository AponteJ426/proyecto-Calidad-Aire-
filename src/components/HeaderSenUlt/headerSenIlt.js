
import React, { useState, useEffect } from 'react'
//import { Grid, Typography, Button } from '@mui/material'
import { ref, onValue } from "firebase/database";
import { db } from '../firebaseConec/firebase';
import { Grid, Typography } from '@mui/material';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import WindModal from './WindModal/WindModal';
import HistoryIcon from '@mui/icons-material/History';
import CarouselHc04 from '../carousel/carouselSr-hc04';
import EmergencyShareOutlinedIcon from '@mui/icons-material/EmergencyShareOutlined';
const HeaderSenIlt = () => {

    const [queue, setQueue] = useState([]);
    const [inputValue, setInputValue] = useState();
    const [senUltr, setsenUltr] = useState()
    const [count, setcount] = useState();
    useEffect(() => {
        onValue(ref(db, "/ultrasonido/distanci"), (snapshotFirebase) => {
            setsenUltr(snapshotFirebase._node.value_)
        })

    }, []);
    if (count !== senUltr) {
        setcount(senUltr)
        setInputValue(senUltr);
        setQueue([...queue, inputValue]);

    }
    if (queue.length > 3) {
        const [removedItem, ...newQueue] = queue;
        setQueue(newQueue);

    }

    function Card({ desc, value, color }) {

        return (
            <Grid sx={{
                width: "38vmin",
                padding: "3vmin",
                background: "#e2e2e2",
                borderRadius: 5,
                borderBottomColor: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                boxShadow: 10,
                gap: "0.5rem",

            }}>

                <EmergencyShareOutlinedIcon sx={{ color: color, background: "#fff", height: "2rem", width: "2rem", padding: "0.2rem", borderRadius: "50%", }} />
                <Typography variant='h6 ' component="sub" sx={{ fontSize: "1rem", textAlign: "center" }}> {desc}</Typography>
                <Typography variant='h3' component="h1" sx={{ fontSize: "1.5rem", fontFamily: 'cursive' }}> {value} cm</Typography>
            </Grid>
        )

    }

    return (
        
        <Grid container sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            gap: "2rem",
            justifyItems: "center",
            width: "70%",
            marginBottom: "10rem",
        }}>

            <Card
                desc="Datos Sensor de Ultrasonido (Distancia) "
                value={senUltr}
                color={"#5166E0"} />
            <WindModal />
            <Grid sx={{
                width: "38vmin",
                padding: "3vmin",
                background: "#e2e2e2",
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: 10,
                gap: "0.5rem",
                borderBottomColor: "#000",


            }}>

                <HistoryIcon sx={{ color: "#5166E0", background: "#fff", height: "2rem", width: "2rem", padding: "0.2rem", borderRadius: "50%", }} />
                <Typography variant='h3' component="h1" sx={{ fontSize: "1.5rem", fontFamily: 'cursive' }}> Ultimos Registros </Typography>

                <Typography variant='h6 ' component="sub" sx={{ fontSize: "1.2rem" }}>
                    <ul>
                        {
                            queue.map((item, index) => (
                                <li key={index} className='animate__animated animate__flash animate__fast animate__repeat-1'>{item} cm</li>
                            ))}
                    </ul></Typography>
            </Grid>
            <CarouselHc04 />

        </Grid>)
}

export default HeaderSenIlt