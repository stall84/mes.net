import React from "react";
import Navbar from "./Navbar";
import { Button, Grid, Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MediaQuery from "react-responsive";
import PDF from "../docs/Resume_6.0.pdf";
import Particles from "react-particles-js";
import aspLogo from "../images/icons/asp-log.png";
import csharpLogo from "../images/icons/csharp-log.png";
import cssLogo from "../images/icons/css-log.png";
import dockerLogo from "../images/icons/docker-log.png";
import gitLogo from "../images/icons/git-log.png";
import htmlLogo from "../images/icons/html-log.png";
import jsLogo from "../images/icons/js-log.png";
import materialLogo from "../images/icons/materialui-log.png";
import mongoLogo from "../images/icons/mongodb-log.png";
import nodeLogo from "../images/icons/nodejs-log.png";
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
import graphql from "../images/icons/graphql-log.png"
import aws from "../images/icons/aws-log.png"
import python from "../images/icons/python-log.png"
import vue from "../images/icons/vue-log.png"

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
      <Grid container justify="center" className={classes.logoContainer}>
        <Grid item xs={12} md={6} justify="center">
          <Icon
            title="HTML-5 in my code ->"
            href="https://github.com/stall84/BEACH-ME-V2/blob/c182acbfaeac5a197b7ce89628f125d9d6c4ce50/public/index.html#L1-L40"
            icon={htmlLogo}
            alt="htmlLogo"
          />

          <Icon
            title="CSS-3 in my code ->"
            href="https://github.com/stall84/isIFR/blob/e565328b235a0ac8625f0b6a6cc13b6effde42be/isIFR/wwwroot/css/site.css#L4-L72"
            icon={cssLogo}
            alt="cssLogo"
          />

          <Icon
            title="Bootstrap in my code ->"
            href="https://github.com/digitalcrafts-labs/Gym-Tan-Laundry/blob/608de5f1cd84a90ad378401b6b4c6aeba3e8fbf4/public/login.html#L5-L43"
            icon={bootstrapLogo}
            alt="bootstrapLogo"
          />
          <Icon
            title="JavaScript in my code ->"
            href="https://github.com/stall84/js_prototypes/blob/d5f239ad7e73e3a5445d9bd84d9b77abd23b539e/app1.js#L1-L22"
            icon={jsLogo}
            alt="jsLogo"
          />
          <Icon
            title="Material-UI in my code ->"
            href="https://github.com/stall84/mes.net/blob/29601e852eef9eb9da9db3c4369bf05f1bc8cb71/src/components/Resume.jsx#L36-L123"
            icon={materialLogo}
            alt="materialUILogo"
          />
          <Icon
            title="ReactJS in my code ->"
            href="https://github.com/stall84/mes.net/blob/29601e852eef9eb9da9db3c4369bf05f1bc8cb71/src/components/Navbar.jsx#L82-L146"
            icon={reactLogo}
            alt="reactLogo"
          />
          <Icon
            title="ReduxJS in my code ->"
            href="https://github.com/stall84/BEACH-ME-V2/blob/c182acbfaeac5a197b7ce89628f125d9d6c4ce50/src/index.js#L5-L60"
            icon={reduxLogo}
            alt="reduxLogo"
          />
          <Icon
            title="React Native in my code ->"
            href="https://github.com/stall84/Beach_Me_NativeApp/blob/8efeb9872cf65045bc0596f90617b70dc5682df5/screens/Display.js#L1-L111"
            icon={reactNativeLogo}
            alt="reactNativeLogo"
          />
          <Icon
            title="VueJS in my code ->"
            href="https://github.com/stall84/vue-getting-started/blob/14a8236931b4bf57166cd5e6d15a0faeb768865a/05-interacting-within-a-component/begin/vue-heroes/src/components/heroes.vue#L1-L171"
            icon={vue}
            alt="Vue_Logo"
          />
          <Icon
            title="NodeJS in my code ->"
            href="https://github.com/stall84/mes_ginit/blob/361da16aca10e26a66cdfdae55cddee9052a2ca8/index.js#L1-L74"
            icon={nodeLogo}
            alt="nodeLogo"
          />
          <Icon
            title="ASP.NET in my code ->"
            href="https://github.com/stall84/isIFR/blob/e565328b235a0ac8625f0b6a6cc13b6effde42be/isIFR/Startup.cs#L1-L70"
            icon={aspLogo}
            alt="aspLogo"
          />
          <Icon
            title="Python in my code ->"
            href="https://github.com/stall84/Flask_ToDo/blob/70b7d56664a148ea88b14f22b3390cf11512a38a/app.py#L1-L98"
            icon={python}
            alt="Python"
          />
          <Icon
            title="C Sharp in my code ->"
            href="https://github.com/stall84/isIFR/blob/e565328b235a0ac8625f0b6a6cc13b6effde42be/isIFR/Controllers/WeatherController.cs#L1-L114"
            icon={csharpLogo}
            alt="CSharpLogo"
          />
          <Icon
            title="MongoDB in my code ->"
            href="https://github.com/stall84/Beach-Me-Backend/blob/68c8e9f81ee0094eac6bea93353cbeb4a3a32eac/controllers/beaches.js#L1-L38"
            icon={mongoLogo}
            alt="mongoLogo"
          />
          <Icon
            title="Postgres in my code ->"
            href="https://github.com/stall84/music-database/blob/9e5ec16bbb1a36339c0dc0d06c5e89fec26e8f4d/music_db_setup.sql#L1-L45"
            icon={postgresLogo}
            alt="postgresLogo"
          />
          <Icon
            title="Docker my published images ->"
            href="https://hub.docker.com/u/stall84"
            icon={dockerLogo}
            alt="dockerLogo"
          />
          <Icon
            title="Git in my code ->"
            href="https://github.com/stall84/mes.net/pull/31"
            icon={gitLogo}
            alt="gitLogo"
          />
          <Icon
            title="Bash Scripting in my code ->"
            href="https://github.com/stall84/Docker_Flask_Container_Image_Build/blob/68f1944e4f28440a14dcbb95438d049a34a7d96e/buildtime-runtime/run-server.sh#L1-L15"
            icon={bashLogo}
            alt="bashLogo"
          />
          <Icon
            title="Responsive Design in my code ->"
            href="https://github.com/stall84/BEACH-ME-V2/blob/c182acbfaeac5a197b7ce89628f125d9d6c4ce50/src/components/styles/BeachFiveForecast.css#L19-L56"
            icon={responsiveLogo}
            alt="responsiveLogo"
          />
          <Icon
            title="REST API in my code ->"
            href="https://github.com/stall84/Beach-Me-Backend/blob/68c8e9f81ee0094eac6bea93353cbeb4a3a32eac/server.js#L1-L40"
            icon={restApiLogo}
            alt="restApiLogo"
          />
          <Icon
            title="SQL in my code ->"
            href="https://github.com/stall84/music-database/blob/9e5ec16bbb1a36339c0dc0d06c5e89fec26e8f4d/music_db_setup.sql#L1-L45"
            icon={sqlLogo}
            alt="sqlLogo"
          />
          <Icon
            title="GraphQL in my code ->"
            href="https://github.com/stall84/graphQL_playlist/blob/55132c34c74559764ba06e9dcca38be660fc4e2c/playlist-server/schema/schema.js#L1-L135"
            icon={graphql}
            alt="graphQlLogo"
          />
          <Icon
            title="Heroku Deployment"
            href="https://www.heroku.com/home"
            icon={herokuLogo}
            alt="herokuLogo"
          />
          <Icon
            title="Amazon Web Services in my code ->"
            href="https://github.com/stall84/First_Dotnet_AWS_Lambda_Func/blob/e43725be73321c14a1077fff5c53313899928ea3/src/MySimpleFunc1/DisplayNewUser.cs#L1-L29"
            icon={aws}
            alt="AWS_Logo"
          />
          <Icon
            title="Azure Cloud Deployment"
            href="https://azure.microsoft.com/en-us/"
            icon={azureLogo}
            alt="azureLogo"
          />
          <Icon
            title="Agile Sprint Iteration team example ->"
            href="https://images1misc.s3.amazonaws.com/agile-ex1.png"
            icon={sprintLogo}
            alt="sprintLogo"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
