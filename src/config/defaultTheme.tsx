import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1260,
      xl: 1540,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14
  },
  palette: {
    primary: {
      main: '#00263E',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f3f3f3',
      contrastText: '#616161'
    },
  }
})

export default defaultTheme