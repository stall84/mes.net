import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ClearDarkSky from "../images/ClearDarkSky.png";
import GymTanLaundry from "../images/GTL.png";
import BeachMe from "../images/BeachMe.png";
import isIFR from "../images/isIFR.png";
import Particles from "react-particles-js";

const useStyles = makeStyles({
  mainContainer: {
    background: "inherit",
  },
  cardContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
    border: "3px solid #f50057",
  },
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              density: {
                enable: true,
                value_area: 800,
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
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={8}>
            <Card className={classes.cardContainer} raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="isIFR"
                  height="200"
                  image={isIFR}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    isIFR? - ASP.NET MVC Single Page Application displaying
                    METAR and Flight Rules
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Proof of concept application I created for my first/oldest
                    passion: Aviation. Created in ASP.NET Core MVC 3.1, this
                    server-side-rendered web-application does one thing very
                    well: Quickly taking the user's airport code (with
                    validation I added) entry, and returning a simple, yet
                    informative display of the airport's current flight-rules:
                    VFR (yay!), MVFR, or IFR (ick!). The raw METAR readout is
                    also rendered for a more detailed weather situation for the
                    pilot/user. Built with ASP.NET's required C# language, the
                    Razor views include Bootstrap responsive styling, and a
                    placeholder for future front-end improvement through Vue.JS
                    framework. Using a few class models, a single controller,
                    and a single view, this app is streamlined, yet capable and
                    scalable. Currently calls the external AVWX REST API, and is
                    deployed on Microsoft's Azure cloud services.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open("https://github.com/stall84/isIFR", "_blank")
                    }
                  >
                    Code Repository
                  </Button>

                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open("https://isifr.azurewebsites.net/", "_blank")
                    }
                  >
                    Live Site
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.cardContainer} raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="BeachMe"
                  height="200"
                  image={BeachMe}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Beach-Me! - Find the closest beaches along with weather
                    forecasts
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    My solo capstone project. The idea came out of necessity,
                    finding myself wanting to find the closest beaches with
                    weather forecasts for them in one single app. This is a
                    full-stack project with the front-end client build in React
                    with Redux state management. The client communicates via a
                    seperately hosted Express back-end server with a MongoDB
                    database storing hundreds of beaches. I really learned a LOT
                    about fullstack building in month I spent building BeachMe.
                    Originally it was a front-end only React app, but I decided
                    to refactor all of the logic and external API calls to the
                    Express server leaving the client as 'dumb' as possible. I'm
                    quite proud at the final outcome, and it has the ability to
                    be scaled to feature new options like finding lodging.
                    Recently 'ported' to a React-Native coded App.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/stall84/BEACH-ME-V2",
                        "_blank"
                      )
                    }
                  >
                    Client Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/stall84/Beach-Me-Backend",
                        "_blank"
                      )
                    }
                  >
                    Server Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open("https://beach-me-v2.vercel.app/", "_blank")
                    }
                  >
                    Live Site
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/stall84/Beach_Me_NativeApp/",
                        "_blank"
                      )
                    }
                  >
                    React-Native Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://expo.io/@stall84/Beach_Me_App_exp/",
                        "_blank"
                      )
                    }
                  >
                    React-Native App (Requires Expo-Client)
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.cardContainer} raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="GymTanLaundry"
                  height="200"
                  image={GymTanLaundry}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Gym, Tan, Laundry: Custom Spotify Playlist Creation App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    My first group project where I served as team lead. The idea
                    came out of an idea I had to provide a genre-narrowed
                    playlist creator for users. While the App itself was
                    complex, being largely server-side rendered, and
                    authentication taking a serious amount of time and code, the
                    major experience came from being the team leader: Having to
                    make decisions on priorities, project scope, task assignment
                    and the ever-nearing deadline.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/digitalcrafts-atl/Gym-Tan-Laundry",
                        "_blank"
                      )
                    }
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://gym-tan-laundry.herokuapp.com/",
                        "_blank"
                      )
                    }
                  >
                    Live Site
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>

            <Card className={classes.cardContainer} raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="ClearDarkSky"
                  height="200"
                  image={ClearDarkSky}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Clear Dark Sky - Starviewing Weather WebApp
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    My first group project where I provided the idea of an app
                    that queries external api’s for user’s geolocation and then
                    a weather forecast for that night to determine whether or
                    not there will be good star-viewing conditions. The idea
                    came out of my history of astronomy/astrophotography and
                    checking weather reports to make sure that the skies would
                    be clear, and mostly free of moon-light (dark). Built as a
                    stand-alone front-end client with vanilla HTML and
                    Javascript.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) => {
                      window.open(
                        "https://github.com/c-champagne/clear-dark-sky",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) => {
                      window.open(
                        "http://cassiechampagne.me/clear-dark-sky/",
                        "_blank"
                      );
                    }}
                  >
                    Live Site
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
