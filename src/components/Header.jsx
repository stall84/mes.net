import React from "react";
import { Typography, Avatar, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import MediaQuery from "react-responsive";
import mesAvatar4 from "../images/mesAvatar4.jpg";

// Define Styles using Material UI's makeStyles Hook

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment> 
      <Box className={classes.mainContainer}>      
        <Avatar
          className={classes.avatar}
          src={mesAvatar4}
          title="MES in Marin"
          alt="Michael in Marin"
        />

        <Typography className={classes.title} variant="h3">
          <Typed
            strings={["Michael Stallings"]}
            typeSpeed={70}
            showCursor={false}
          />
        </Typography>

        <Typography className={classes.subTitle} variant="h4">
          <Typed
            loop
            strings={[
              "Software Engineer",
              "Multi-Stack",
              "Typescript",
              "Markup/Stlying",
              "React",
              "OOP",
              "SQL/NoSQL",
              "AWS",
              "Service-Architecture",
              "Astronomy",
              "Aviation",
            ]}
            typeSpeed={64}
            backSpeed={40}
          />
        </Typography>
        <MediaQuery minDeviceWidth={1200}>
          <Grid container>
            <Typography className={classes.aboutSubTitle} variant="h5">
              <Typed
                loop={false}
                strings={[
                  "Software Engineer - Atlanta, GA. Passionately in pursuit of personal and professional growth. Catering a curiosity of all things fundamental in nature, like the analog and digital processes we wield to create websites like this. What I do know, I try my best to apply. What I don't yet know, I long to one day.",
                ]}
                typeSpeed={18}
              />
            </Typography>
          </Grid>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1200}>
          <Grid container>
            <Typography className={classes.aboutSubTitle} variant="h7">
              <Typed
                loop={false}
                strings={[
                  "Software Engineer - Atlanta, GA. Passionately in pursuit of personal and professional growth. Catering a curiosity of all things fundamental in nature, like the analog and digital processes we wield to create websites like this. What I do know, I try my best to apply. What I don't yet know, I long to one day.",
                ]}
                typeSpeed={18}
              />
            </Typography>
          </Grid>
        </MediaQuery>
      </Box>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  avatar: {
    width: "12rem",
    height: "12rem",
    margin: "0 auto",
  },
  title: {
    fontFamily: "KanitMed",
    color: "#f50057",
    textShadow: "-0.8px -0.8px #000, 0.8px -0.8px #000, -0.8px 0.8px #000, 0.8px 0.8px #000",
  },
  subTitle: {
    fontFamily: "MontserratMed",
    color: "tan",
    textShadow: "-0.8px -0.8px #000, 0.8px -0.8px #000, -0.8px 0.8px #000, 0.8px 0.8px #000"
  },
  aboutSubTitle: {
    fontFamily: "KanitMed",
    marginTop: "1.2rem",
    marginLeft: "1.65rem",
    marginRight: "1.65rem",
    color: "#f9f4ef",
    textShadow: "-0.8px -0.8px #000, 0.8px -0.8px #000, -0.8px 0.8px #000, 0.8px 0.8px #000"
  },
});
