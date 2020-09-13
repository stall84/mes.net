import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import {
  Grid,
  FormControl,
  TextField,
  FilledInput,
  Input,
  InputLabel,
  InputAdornment,
} from "@material-ui/core/";
import { AccountCircle } from "@material-ui/icons";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
  formControl: {
    position: "relative",
    margin: theme.spacing(1),
  },
  formContainer: {
    width: "70vw",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputFields: {
    width: "20vw",
  },

  inputIcons: {},
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid container className={classes.formContainer}>
          <Grid item sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.inputLabel}
                htmlFor="input-with-icon-adornment"
              >
                Your Name
              </InputLabel>
              <FilledInput
                className={classes.inputFields}
                color="secondary"
                id="input-with-icon-adornment"
                placeholder="ex: Alan B Shepard"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.inputLabel}
                htmlFor="input-with-icon-adornment"
              >
                Your Email
              </InputLabel>
              <FilledInput
                className={classes.inputFields}
                color="secondary"
                id="input-with-icon-adornment"
                placeholder="ex: someone@something.com"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="filled"
              fullWidth
            />
          </Grid>
        </Grid>
      </ThemeProvider>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              density: {
                enable: true,
                value_area: 700,
              },
              value: 65,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 92,
                duration: 2.5,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 60,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              animation: {
                enable: true,
                speed: 4,
                size_min: 2,
                sync: true,
              },
            },
            opacity: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 5,
                sync: false,
              },
            },
            fpsLimit: 60,
          },
        }}
      ></Particles>
      <Footer />
    </React.Fragment>
  );
}
