import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlesCanvas: {
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
              value: 62,
              density: {
                enable: true,
                value_area: 1500,
              }       
            },
            lineLinked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: "right",
              speed: 0.15
            },
            size: {
              value: 3.5
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.85
              }
            }
          },
          fpsLimit: 30,
          retina_detect: true,
        }}
      ></Particles>
      <Footer />
    </React.Fragment>
  );
}
