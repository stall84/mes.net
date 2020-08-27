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

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#708090",
    fontSize: "100%",
  },
  cardContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={8}>
            <Card className={classes.cardContainer}>
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
            <Card className={classes.cardContainer}>
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

            <Card className={classes.cardContainer}>
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
