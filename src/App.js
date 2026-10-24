import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/*** Components ***/
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

/*** Material-UI Theming ***/
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

/*** Fonts ***/
import NunitoBold from './fonts/NunitoSans-SemiBold.ttf';
import KanitMedium from './fonts/Kanit-Medium.ttf';
import MontserratMed from './fonts/Montserrat-Medium.ttf';


const nunitoBold = {
  fontFamily: 'NunitoBold',
  src: `
    url(${NunitoBold}) format('truetype')
  `,
};

const kanitMed = {
  fontFamily: 'KanitMed',
  src: `
    url(${KanitMedium}) format('truetype')
  `,
};

const montserratMed = {
  fontFamily: 'MontserratMed',
  src: `
    url(${MontserratMed}) format('truetype')
  `,
};


const theme = createTheme({
  typography: {
    fontFamily: 'NunitoBold, MontserratMed, KanitMed, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [nunitoBold, kanitMed, montserratMed],
      },
    },
  },
});

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}
