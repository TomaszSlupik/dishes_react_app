import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      light: blue[200],  
      main: blue[500],
      dark: blue[900],
    },
    secondary: {
        light: grey[200],  
        main: grey[500],
        dark: grey[900],
    },
  },
});


export default theme


