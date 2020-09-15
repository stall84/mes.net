import React from "react";
import Navbar from "./Navbar";
import { Button, Grid, Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MediaQuery from "react-responsive";
import PDF from "../docs/MichaelStallingsResume.pdf";
import Particles from "react-particles-js";
import aspLogo from "../images/icons/asp-log.png";
import csharpLogo from "../images/icons/csharp-log.png";
import cssLogo from "../images/icons/css-log.png";
import dockerLogo from "../images/icons/docker-log.png";
import gitLogo from "../images/icons/git-log.png";
import githubLogo from "../images/icons/github-log.png";
import htmlLogo from "../images/icons/html-log.png";
import jsLogo from "../images/icons/js-log.png";
import materialLogo from "../images/icons/materialui-log.png";
import mongoLogo from "../images/icons/mongodb-log.png";
import nodeLogo from "../images/icons/nodejs-log.png";
import npmLogo from "../images/icons/npm-log.png";
import postgresLogo from "../images/icons/postgres-log.png";
import reactLogo from "../images/icons/react-log.png";
import reactNativeLogo from "../images/icons/reactnative-log.png";
import reduxLogo from "../images/icons/redux-log.png";
import bootstrapLogo from "../images/icons/bootstrap-log.png";
import responsiveLogo from "../images/icons/responsive-log.png";
import restApiLogo from "../images/icons/restAPI-log.png";
import bashLogo from "../images/icons/bash-log.png";
import azureLogo from "../images/icons/azure-log.png";
import herokuLogo from "../images/icons/heroku-log.png";
import sqlLogo from "../images/icons/sql-log.png";
import sprintLogo from "../images/icons/sprint-log.png";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    marginTop: "2.5rem",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "tomato",
    color: "white",
  },
  particlesCanvas: {
    opacity: 0.45,
    position: "absolute",
  },
  logoContainer: {
    marginTop: "4rem",
    position: "absolute",
    textAlign: "center",
  },
  iconLogo: {
    padding: "0.5rem",
  },
  smallIconLogo: {
    padding: "0.25rem",
    width: "52px",
    height: "52px",
  },
}));

const PdfButton = (props) => {
  const classes = useStyles();
  return (
    <CustomTooltip title="My Current Resume">
      <Button {...props} className={classes.button} href={PDF}>
        Open PDF Resume
      </Button>
    </CustomTooltip>
  );
};

const Icon = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MediaQuery minDeviceWidth={1200}>
        <CustomTooltip title={props.title}>
          <a
            {...props}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.icon}
              alt={props.alt}
              className={classes.iconLogo}
            />
          </a>
        </CustomTooltip>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1200}>
        <CustomTooltip title={props.title}>
          <a
            {...props}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.icon}
              alt={props.alt}
              className={classes.smallIconLogo}
            />
          </a>
        </CustomTooltip>
      </MediaQuery>
    </React.Fragment>
  );
};

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "#f50057",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

export default function Resume() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Grid
        container
        className={classes.buttonGrid}
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <PdfButton />
      </Grid>
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
      <Grid container justify="center" className={classes.logoContainer}>
        <Grid item xs={12} md={6} justify="center">
          <Icon
            title="HTML-5"
            href="https://html.spec.whatwg.org/multipage/"
            icon={htmlLogo}
            alt="htmlLogo"
          />

          <Icon
            title="CSS-3"
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            icon={cssLogo}
            alt="cssLogo"
          />

          <Icon
            title="Bootstrap"
            href="https://getbootstrap.com/"
            icon={bootstrapLogo}
            alt="bootstrapLogo"
          />
          <Icon
            title="JavaScript"
            href="https://developer.mozilla.org/en/JavaScript"
            icon={jsLogo}
            alt="jsLogo"
          />
          <Icon
            title="Material-UI"
            href="https://material-ui.com/"
            icon={materialLogo}
            alt="materialUILogo"
          />
          <Icon
            title="ReactJS"
            href="https://reactjs.org/"
            icon={reactLogo}
            alt="reactLogo"
          />
          <Icon
            title="ReduxJS"
            href="https://redux.js.org/"
            icon={reduxLogo}
            alt="reduxLogo"
          />
          <Icon
            title="React Native"
            href="https://reactnative.dev/"
            icon={reactNativeLogo}
            alt="reactNativeLogo"
          />
          <Icon
            title="NodeJS"
            href="https://nodejs.org/en/"
            icon={nodeLogo}
            alt="nodeLogo"
          />
          <Icon
            title="NPM"
            href="https://www.npmjs.com/"
            icon={npmLogo}
            alt="npmLogo"
          />
          <Icon
            title="ASP.NET"
            href="https://dotnet.microsoft.com/apps/aspnet"
            icon={aspLogo}
            alt="aspLogo"
          />
          <Icon
            title="C Sharp"
            href="https://docs.microsoft.com/en-us/dotnet/csharp/"
            icon={csharpLogo}
            alt="CSharpLogo"
          />
          <Icon
            title="MongoDB"
            href="https://www.mongodb.com/"
            icon={mongoLogo}
            alt="mongoLogo"
          />
          <Icon
            title="Postgres"
            href="https://www.postgresql.org/"
            icon={postgresLogo}
            alt="postgresLogo"
          />
          <Icon
            title="Docker"
            href="https://www.docker.com/"
            icon={dockerLogo}
            alt="dockerLogo"
          />
          <Icon
            title="Git"
            href="https://git-scm.com/"
            icon={gitLogo}
            alt="gitLogo"
          />
          <Icon
            title="GitHub"
            href="https://github.com/"
            icon={githubLogo}
            alt="githubLogo"
          />
          <Icon
            title="Bash Scripting"
            href="https://www.gnu.org/software/bash/"
            icon={bashLogo}
            alt="bashLogo"
          />
          <Icon
            title="Responsive Design"
            href="https://www.w3schools.com/html/html_responsive.asp"
            icon={responsiveLogo}
            alt="responsiveLogo"
          />
          <Icon
            title="REST API"
            href="https://en.wikipedia.org/wiki/Representational_state_transfer"
            icon={restApiLogo}
            alt="restApiLogo"
          />
          <Icon
            title="SQL"
            href="https://en.wikipedia.org/wiki/SQL"
            icon={sqlLogo}
            alt="sqlLogo"
          />
          <Icon
            title="Heroku Deployment"
            href="https://www.heroku.com/home"
            icon={herokuLogo}
            alt="herokuLogo"
          />
          <Icon
            title="Azure Cloud Deployment"
            href="https://azure.microsoft.com/en-us/"
            icon={azureLogo}
            alt="azureLogo"
          />
          <Icon
            title="Agile Sprint Iteration"
            href="https://en.wikipedia.org/wiki/Agile_software_development"
            icon={sprintLogo}
            alt="sprintLogo"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
