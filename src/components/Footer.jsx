import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    width: "100vw",
    bottom: 0,
    height: "2.5rem",
    fontSize: 70,
  },
});

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#fff5f9",
    color: "#f50057",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

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
          <GitHubIcon
            style={{ fontSize: 60, paddingRight: 20 }}
            color="secondary"
          />
        </a>
      </CustomTooltip>
      <CustomTooltip title="My LinkedIn">
        <a
          href="https://www.linkedin.com/in/michael-stallings-b3368618/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            style={{ fontSize: 60, paddingLeft: 20 }}
            color="secondary"
          />
        </a>
      </CustomTooltip>
    </Grid>
  );
}
