import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomAppBar = styled(AppBar)({
  backgroundColor:'rgba(255, 255, 255, 0.5)',
  backdropFilter:'blur(30px)',
  WebkitBackdropFilter:'blur(30px)',
  lineHeight:1,
  color: "#000",
  borderRadius:'3vmin',
  top:"1vh",

})
