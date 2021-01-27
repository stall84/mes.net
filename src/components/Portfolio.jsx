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
import BeachMe from "../images/beach-me-1100.jpg";
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
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={8}>
          <Card className={classes.cardContainer} raised={true}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="BeachMe"
                  height="260"
                  image={BeachMe}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Beach-Me! - Find the closest beaches with weather
                    forecasts
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <span><strong><em>iOS Mobile-App:</em></strong></span>
                    <br/>
                       Beach-Me iOS App published to Apple AppStore. Built in React-Native using a 'manual' react-native-CLI build process (not Expo).
                       The mobile-app actually has some key differences to the web-app currently (that might change with a later revision to the web-app): One of the 
                       bigger differences is the use of Redux-Thunk middleware to structure the incoming/outgoing API calls. 
                       I'm really excited to begin planning and building subsequent release versions of the mobile app because mobile is the domain the original 
                       idea made sense most in. For example, food, lodging, landmarks, favorite rest-stops, etc. can be integrated if I decide to have a user-database later on.
                       Privacy concerns became highly prominent in this build phase, Apple has very strict rules on how to obtain, and communicate what data you get from the user. The 
                       building the of the "app-production-structures" (like the custom privacy policy, app-support capability, etc) around the app was a valuable learning experience. 
                    <br/>
                    <br/>
                    <span><strong><em>Web App Version 3:</em></strong></span>
                    <br />
                    I decided to take the entire project offline for a complete overhaul and restyle.
                    I converted all of my component classes over to React functional components using Hooks where needed. However the 
                    vast majority of the state management is handled by Redux again, this time using React-Redux Hooks.  This refactor 
                    led to a major reduction in the total codebase along with making future alterations much simpler. The 2nd and maybe most apprciable of the 
                    overhaul-changes was to the styling. Admittedly when I published the original version, my focus was mainly on the un-seen parts of
                    a full-stack application. So building the backend API and orgainzing the front and back end's communication was far more important than it was
                    on the user's experience. In Version 3 I took my new found CSS skills including utilizing variables, theming, and functions, along with more in-depth understanding
                    of responsive styling and applied them. V3 utilizes CSS Modules for the individual components and a 'main' stylesheet containing all of the color theming
                    and font theming.  Lastly, for V3. I decided to NOT use Create React App, opting instead for the much-more tedious manual WebPack bundling/compilation. 
                    I spent a great deal of the rebuild time on learning the ins-and-outs of Web Pack, how to build custom configurations for production and development, and the many
                    ways of code-splitting and other optimizations a manual-bundle with Web Pack offers. Quite a rewarding experience all-in-all. 
                    <br />
                    <br />
                    <span><strong><em>Web App Version 2 (original full-stack build):</em></strong></span>
                    <br />
                    My solo capstone project. The idea came out of necessity,
                    finding myself wanting to find the closest beaches with
                    weather forecasts for them in one single app. This is a
                    full-stack project with the front-end client build in React
                    with Redux state management. The client communicates via a
                    seperately hosted Express back-end server with a Node.js self-styled web-API interfacing with a MongoDB
                    database storing hundreds of beaches, as well as Google and OpenWeatherMap's external API's. I really learned a LOT
                    about fullstack architecture in month I spent building BeachMe.
                    Originally it was a front-end only React app, but I decided
                    to refactor all of the logic and external API calls to the
                    Express server leaving the client as 'dumb' as possible. I'm
                    quite proud at the final outcome, and it has the ability to
                    be scaled to feature new options like finding lodging and/or a user database where they can store their favorite beach locations, etc.

                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/stall84/V3-Beach-Me",
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
                    API Code
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open("https://beach-me.app/", "_blank")
                    }
                  >
                    Web App
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) =>
                      window.open(
                        "https://github.com/stall84/Beach-Me-Native_2",
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
                        "https://apps.apple.com/us/app/beach-me/id1550111854",
                        "_blank"
                      )
                    }
                  >
                    iOS App (Apple AppStore)
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
                    Spotify playlist-creator for users. The web-app itself was quite the task to finish in the 13 days
                    we had alloted to us. The app is server-side-rendered, with a NodeJS API hosted on a Heroku dyno. 
                    Coding out the user authentication of the app was definitely the most rich learning experience in the whole project from a 
                    purely coding angle. We used PassportJS which is an excellent NPM package to handle the communication between our users and Spotify's authentication
                    API. Our team member Donald took the brunt of the authentication coding. We do have a SQL database up and running on the Heroku dyno, but as 
                    yet we don't have any functioning user-storage to our database, as that was a 
                    'wish-list' item for future revisions/releases. This is definitely an awesome app once you try it out. The user picks the size of the playlist they want us
                    to create for them, then they pic either 'Gym', 'Tan', or 'Laundry' which corelate with upbeat/energetic, relaxing/mellow, or 
                    focussed/serious musical genres respectively. Our team member Cassie came up with an ingenious, but simple algorithm that randomly selects tracks 
                    based on those parameters using Spotify's built-in metrics. Then the user logs-in with their spotify credentials, and can save the newly created playlist to their account.
                    The major experience for me on this project came from being the team leader: Having to
                    make decisions on priorities, project scope, task assignment, code review, code assimilation, and the ever-nearing, dreaded deadline.
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
                    deployed on Microsoft's Azure cloud services. Front-End templated 
                    and styled with Vue.js utilizing Vue's convenient 'drop-in' approach 
                    
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
