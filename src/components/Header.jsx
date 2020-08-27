import React from "react";
import { Typography, Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
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
            strings={["Michael E Stallings"]}
            typeSpeed={70}
            showCursor={false}
          />
        </Typography>

        <Typography className={classes.subTitle} variant="h5">
          <Typed
            loop
            strings={["Web Developer", "MERN/SERN Stack", "Astro/Aerophile"]}
            typeSpeed={75}
            backSpeed={70}
          />
        </Typography>

        <Typography className={classes.aboutSubTitle} variant="h5">
          <Typed
            loop={false}
            strings={[
              "Hello all, I'm a full-stack web-developer living in Atlanta, GA with a passion for all things big like the Hubble Deep-Field image forming my background, all things small like the electromagnetic-digital wonders that compile this page, and all things in between. I've been lucky to deeply-pursue my passion in Aviation, Business, and am currently embarking on a new journey into Web/Software Development. What I do know, I try to do to the best of my ability. What I don't know, I always strive to learn.",
            ]}
            typeSpeed={48}
          />
        </Typography>
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
    color: "#ff6347",
  },
  subTitle: {
    color: "tan",
  },
  aboutSubTitle: {
    marginTop: "2rem",
    color: "#d2a38c",
  },
});
