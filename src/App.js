import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

/*** Components ***/
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

/*** Material-UI Theming ***/
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

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


const theme = createMuiTheme({
  typography: {
    fontFamily: 'NunitoBold, MontserratMed, KanitMed, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
      </ThemeProvider>
    </React.Fragment>
  );
}
