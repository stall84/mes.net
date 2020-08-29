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
      <a
        href="https://www.linkedin.com/in/michael-stallings-b3368618/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
              strings={[
                "Web Developer",
                "MERN/SERN Stack",
                "Javascript",
                "API Architecture",
                "React",
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

          <Typography className={classes.aboutSubTitle} variant="h5">
            <Typed
              loop={false}
              strings={[
                "Full stack web / software developer in Atlanta. Passion for all things big, like the Hubble Deep-Field image here. Curiosity in all things small, like the electromagnetic processes that render this site. What I know, I try to apply best, What I don't, I long to learn.",
              ]}
              typeSpeed={30}
            />
          </Typography>
        </Box>
      </a>
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
    marginTop: "1.2rem",
    color: "#f2efec",
  },
});
