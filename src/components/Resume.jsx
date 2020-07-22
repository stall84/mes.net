import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia } from '@material-ui/core/';
import html5 from '../images/icons/html5.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '1rem',  
    padding: '1rem',
    width: '100px',
    height: '100px'
  },
  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  
  return (
      <React.Fragment>
    <div className={classes.root}>
      <Grid container spacing={3}>
       <Card className={classes.card}>
       <CardMedia
        component='img'
        alt='html5'
        height='80'
        width='80'
        image={html5}>
        </CardMedia>
       </Card>
      </Grid>
    </div>
    <div>
        <h2 style={{color: 'white', textAlign: 'center'}}>Temporarily while under construction. Please see my current Resume <a href='https://docs.google.com/document/d/1LNDPt-ChoBSPim4sfgZSE-nQ0oLP7t7ZpSgBOihvFu0/edit?usp=sharing'>here on Google Docs</a></h2>
    </div>
    </React.Fragment>
  );
}