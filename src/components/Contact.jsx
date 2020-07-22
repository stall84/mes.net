import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, 
         Typography,
         Button,
         Grid,
         Box 
        } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
        



const useStyles = makeStyles((theme) => ({
  
  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  
  return (
    <React.Fragment>

          <Navbar />

        <Box component='div'>

           <h3 style={{textAlign: 'center', color: 'white'}}> Under Construction. Temporarily use <Link style={{color: 'tomato'}} to='/resume'>Resume</Link> </h3>

        </Box>


    </React.Fragment>
  );
}