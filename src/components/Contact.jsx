import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
});

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Box component="div">
        <h3 style={{ textAlign: "center", color: "white" }}>
          {" "}
          Under Construction. Temporarily use{" "}
          <Link style={{ color: "tomato" }} to="/resume">
            Resume
          </Link>{" "}
        </h3>
      </Box>

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
