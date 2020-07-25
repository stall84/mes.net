import React from 'react';
import Navbar from './Navbar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import PDF from '../docs/MichaelStallingsResume.pdf';
import DevIcon from 'devicon-react-svg';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '20vh'
  },
  gridHolder: {
    width: '100%',
  },
  a: {
    textDecoration: 'none'
  },
  button: {
    textDecoration: 'none',
    backgroundColor: 'tomato',
    color: 'white'
  },
  techHolder: {
    marginTop: '100px'
  }
  
  
}));

const devIconStyle = {
  fill: 'white',
  width: '85px'
}

export default function Resume() {
  const classes = useStyles();

  
  return (
  
    <React.Fragment>
    <Navbar />

    <Grid container justify='center'
          className={classes.gridHolder}
    >
        <Grid item xs={12} justify='center' className={classes.root}>
    
       
        <a className={classes.a} rel='noopener noreferrer' href={PDF} target='_blank' > <Button className={classes.button} > Open Resume PDF </Button></a>

          <Grid container justify='center'>
            <Grid item xs={12} md={4} justify='center' className={classes.techHolder} >

              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer' ><DevIcon icon='javascript' style={devIconStyle} /></a>
              <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'> <DevIcon icon='react' style={devIconStyle} /> </a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='_blank' rel='noopener noreferrer' ><DevIcon icon='html5' style={devIconStyle} /></a>
              <a href='https://nodejs.org/en/' target='_blank' rel='noopener noreferrer'> <DevIcon icon='nodejs' style={devIconStyle} /></a>
              <a href='https://developer.mozilla.org/en-US/docs/Glossary/CSS' target='_blank' rel='noopener noreferrer' ><DevIcon icon='css3' style={devIconStyle} /></a>
              <a href='https://www.postgresql.org/' target='_blank' rel='noopener noreferrer'><DevIcon icon='postgresql' style={devIconStyle} /></a>
              <a href='https://www.mysql.com/' target='_blank' rel='noopener noreferrer'><DevIcon icon='mysql' style={devIconStyle} /></a>
              <a href='https://www.mongodb.com/' target='_blank' rel='noopener noreferrer'><DevIcon icon='mongodb' style={devIconStyle} /></a>
              <a href='https://git-scm.com/' target='_blank' rel='noopener noreferrer'> <DevIcon icon='git' style={devIconStyle} /></a>
              
          </Grid>
       </Grid>
     
        </Grid>
     </Grid>
     </React.Fragment>
  );
}