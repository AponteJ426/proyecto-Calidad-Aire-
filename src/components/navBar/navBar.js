
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CustomAppBar } from './styled';
import useScrollTrigger from '@mui/material/useScrollTrigger';



function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = ({ title }, props) => {

  return (
    <>
      <ElevationScroll {...props}>
        <CustomAppBar sx={{ maxWidth: '90%', mr: '4.9%', }}>
          <Container >
            <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box sx={{ flexGrow: 0, background: "#f8f8f8", borderRadius: 40 }}>
                <img src='/logoU.png' alt='Logo' height={50} width={110} />
              </Box>
              <Box
              sx={{ display: "flex", justifyContent: "center"}}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }}>
                  {title}
                </Typography>
                <Typography
                  sx={{ fontFamily: "revert-layer",display:"flex",alignItems:"center"}}>
                  V(0.2)
                </Typography>
              </Box>
            </Toolbar>
          </Container>
        </CustomAppBar>
      </ElevationScroll >
    </>
  );
};

