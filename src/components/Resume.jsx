import React from "react";
import Navbar from "./Navbar";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PDF from "../docs/MichaelStallingsResume.pdf";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "20vh",
  },
  a: {
    textDecoration: "none",
  },
  gridHolder: {
    width: "100%",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "tomato",
    color: "white",
  },
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Grid container justify="center" className={classes.gridHolder}>
        <Grid item xs={12} justify="center" className={classes.root}>
          <a
            className={classes.a}
            rel="noopener noreferrer"
            href={PDF}
            target="_blank"
          >
            <Button className={classes.button}> Open PDF Resume </Button>
          </a>
        </Grid>
      </Grid>
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
    </React.Fragment>
  );
}
