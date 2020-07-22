import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import Iframe from 'react-iframe';



const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '20%',
  }
  
  
}));

export default function Resume() {
  const classes = useStyles();

  
  return (
  
    <React.Fragment>
    <Navbar />

    <Grid container justify='center'
    >
        <Grid item xs={12} className={classes.root}>
    
    <Iframe url='https://docs.google.com/document/d/1LNDPt-ChoBSPim4sfgZSE-nQ0oLP7t7ZpSgBOihvFu0/edit?usp=sharing'
            width='800px'
            height='900px'
            id='resume'
            display='iniitial'
            />
     
        </Grid>
     </Grid>
     </React.Fragment>
  );
}