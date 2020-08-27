import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 68,
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
                quantity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.9,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              animation: {
                enable: true,
                speed: 4,
                size_min: 0.2,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
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
