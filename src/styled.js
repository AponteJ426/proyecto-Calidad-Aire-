import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomPaperContainer = styled(Paper)({

borderRadius: 15,
background:'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 100%)',
backdropFilter:'blur(30px)',
WebkitBackdropFilter:'blur(30px)',
display:"flex",
flexDirection: "column",
alignItems:"center",
});