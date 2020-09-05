import React from "react";
import { Typography, Avatar, Box } from "@material-ui/core";
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

        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["Michael Stallings"]}
            typeSpeed={70}
            showCursor={false}
          />
        </Typography>

        <Typography className={classes.subTitle} variant="h5">
          <Typed
            loop
            strings={[
              "Web Developer",
              "MERN/SERN Stack",
              "ES6-Javascript",
              "Web-API Architecture",
              "ReactJS",
              "React Native",
              "SQL/NoSQL",
              ".NET/C#",
              "Astronomy/Astrophotography",
              "Aviation",
            ]}
            typeSpeed={60}
            backSpeed={60}
          />
        </Typography>
        <MediaQuery minDeviceWidth={1200}>
          <Typography className={classes.aboutSubTitle} variant="h6">
            <Typed
              loop={false}
              strings={[
                "Web/software developer - Atlanta, GA. Possessing passion for all things grand, like the Hubble deep-field image here. Catering curiosity of all things fundamental in nature, like the analog and digital processes we wield to create websites like this. What I do know, I try to apply best. What I don't yet know, I long to one day.",
              ]}
              typeSpeed={20}
            />
          </Typography>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1200}>
          <Typography className={classes.aboutSubTitle} variant="h8">
            <Typed
              loop={false}
              strings={[
                "Web/software developer - Atlanta, GA. Possessing passion for all things grand, like the Hubble deep-field image here. Catering curiosity of all things fundamental in nature, like the analog and digital processes we wield to create websites like this. What I do know, I try to apply best. What I don't yet know, I long to one day.",
              ]}
              typeSpeed={20}
            />
          </Typography>
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
    width: "10rem",
    height: "10rem",
    margin: "0 auto",
  },
  title: {
    color: "#f50057",
    textShadow: "0 0 1px white",
  },
  subTitle: {
    color: "tan",
  },
  aboutSubTitle: {
    marginTop: "1.2rem",
    marginLeft: "1.65rem",
    marginRight: "1.65rem",
    textShadow:
      "1px 1px 4px rgba(255, 0, 0, 0.95), -1px -1px 4px rgba(0, 191, 255, 0.95)",
    color: "white",
  },
});
