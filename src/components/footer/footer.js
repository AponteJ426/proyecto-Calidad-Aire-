import React from 'react'
import { IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid  className="footer">
        <div className="footer__container container">

            <form className="footer__form">
                <h2 className="footer__newsletter"> </h2>
                <div className="footer__inputs">
                    <input type="email" placeholder="Email:" className="footer__input" /> 
                    <input type="submit" value="Registrate" className="footer__submit" />
                </div>
            </form>
        </div>

        <section className="footer__copy container">
            <Grid className="footer__social"
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            <IconButton

              sx={{
                margin: "4vmin",
                color: "#3b5998",

                ":hover": {
                  background: "#E8E8E8",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: "6vmin" }} />
            </IconButton>
            <IconButton

              sx={{
                margin: "4vmin",
                color: "#00acee",
                ":hover": {
                  background: "#E8E8E8",
                },
              }}
            >
              <TwitterIcon sx={{ fontSize: "6vmin" }} />
            </IconButton>
            <IconButton

              sx={{
                margin: "4vmin",
                color: "#c4302b",
                ":hover": { background: "#E8E8E8" },
              }}
            >
              <YouTubeIcon sx={{ fontSize: "6vmin" }} />
            </IconButton>
            <IconButton

              sx={{
                margin: "4vmin",

                ":hover": {
                  background: "#E8E8E8",
                },
              }}
            >
              <InstagramIcon
                sx={{
                  fontSize: "5.5vmin",
                  background:
                    "radial-gradient(circle at 33% 100%, #fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf)",
                  borderRadius: "15px",
                  color: "#fff",
                }}
              />
            </IconButton>
          </Grid>

            <h3 className="footer__copyright">Vivienda Domotica @2023</h3>
        </section>
    </Grid>

  )
}

export default Footer