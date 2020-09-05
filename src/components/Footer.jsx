import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    width: "100vw",
    bottom: 0,
    height: "3.5rem",
    fontSize: 70,
  },
  icons: {
    fontSize: 60,
  },
});

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "#f50057",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

const IconContainer = styled.div`
  display: flex;
  margin: ${(props) => (props.primary ? "0 20px 0 0" : "0 0 0 20px")};
  padding: 20;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.primary ? "64px" : "52px")};
  height: ${(props) => (props.primary ? "64px" : "52px")};
  border-radius: ${(props) => (props.primary ? "50%" : "10px")};
  background: inherit;
  :hover {
    background: rgba(255, 255, 255, 0.75);
  }
`;

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} alignItems="center">
      <CustomTooltip title="My Code Repos">
        <a
          href="https://github.com/stall84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer primary>
            <GitHubIcon className={classes.icons} color="secondary" />
          </IconContainer>
        </a>
      </CustomTooltip>
      <CustomTooltip title="My LinkedIn">
        <a
          href="https://www.linkedin.com/in/michael-stallings-b3368618/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <LinkedInIcon className={classes.icons} color="secondary" />
          </IconContainer>
        </a>
      </CustomTooltip>
    </Grid>
  );
}
