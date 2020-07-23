import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import Iframe from 'react-iframe';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '10%',
  },
  gridHolder: {
    width: '100%',
    backgroundColor: '#708090'
  },
  divHolder: {
    
    
  }
  
  
}));

export default function Resume() {
  const classes = useStyles();

  
  return (
  
    <React.Fragment>
    <Navbar />

    <Grid container justify='center'
          className={classes.gridHolder}
    >
        <Grid item xs={12} className={classes.root}>
    <div className={classes.divHolder}>
    <Iframe url='https://docs.google.com/document/d/1LNDPt-ChoBSPim4sfgZSE-nQ0oLP7t7ZpSgBOihvFu0/edit?usp=sharing'
            width='600px'
            height='800px'
            id='resume'
            />
     </div>
        </Grid>
     </Grid>
     </React.Fragment>
  );
}