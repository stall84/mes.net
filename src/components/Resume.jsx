import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import Iframe from 'react-iframe';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '25%',
  },
  gridHolder: {
    width: '100%',
    backgroundColor: 'white'
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
    
    <Iframe url='https://docs.google.com/document/d/1LNDPt-ChoBSPim4sfgZSE-nQ0oLP7t7ZpSgBOihvFu0/edit?usp=sharing'
            width='680px'
            height='800px'
            id='resume'
            />
     
        </Grid>
     </Grid>
     </React.Fragment>
  );
}