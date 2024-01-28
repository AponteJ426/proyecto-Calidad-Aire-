import React from 'react'
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: "80%",
        backgroundColor: "#fff",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '10px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    }
}));
const WindModal = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const body = (
        <Grid
            container sx={{
                width: "30%",
            }} className={classes.modal}>
            <h1 id="simple-modal-title">Sensor Ultrasonido Hc Sr04</h1>
            <br />
            <Typography variant='h3' component="h1" sx={{ fontSize: "1.5rem", fontFamily: 'cursive' }}>
                El sensor ultrasonido HC-SR04 usando el emisor piezoeléctrico emite
                8 pulsos de ultrasonido(40KHz) luego de recibir la orden en el pin TRIG,
                las ondas de sonido viajan en el aire y rebotan al encontrar un objeto,
                el sonido de rebote es detectado por el receptor piezoeléctrico
                luego el pin ECHO cambia a Alto (5V) por un tiempo igual al que
                demoró la onda desde que fue emitida hasta que fue detectada.
            </Typography>

        </Grid>)
    return (
        <Grid container sx={{
            width: "38vmin",
            borderRadius: "20px",
            boxShadow: 10,
        }} >
            <Button style={{
                width: "38vmin",
                padding: "3vmin",
                background: "#e2e2e2",
                borderRadius: "20px",
                gap: "0.5rem",
                lineHeight: 0.5,
                display: "flex"
            }
            }
                className="animate__animated animate__pulse animate__slower animate__infinite"
                onClick={handleOpen}>
                <InfoOutlinedIcon sx={{ color: "#5166E0", background: "#fff", height: "2rem", width: "2rem", padding: "0.2rem", borderRadius: "50%", }} />
                <Grid item sx={{ display: "flex", alignItems: "center",flexDirection: "column", }}> 
                    <Typography variant='h3' component="h1" sx={{
                        fontSize: "1.2rem",
                        fontFamily: "cursive",
                        textAlign: "center",
                    }}>
                        Ultrasonido Hc-Sr04
                    </Typography>
                    <Typography variant='h6 ' component="sub" sx={{
                        color: "#fff",
                        fontSize: "1rem",
                        backgroundColor: "#0066E0",
                        height: "1.3rem",
                        width: "5rem",
                        padding: "0.2rem",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1rem",
                    }}> mas ...
                    </Typography>
                </Grid>


            </Button>
            <Modal BackdropProps={{
                style: {
                    borderRadius: '2rem',
                    backgroundColor: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 90%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }
            }}
                open={open}
                onClose={handleOpen}
            >
                {body}
            </Modal>
        </Grid >
    )
}

export default WindModal