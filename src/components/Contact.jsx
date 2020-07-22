import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import {
         Box 
        } from '@material-ui/core/';

        





export default function FullWidthGrid() {
  

  
  return (
    <React.Fragment>

          <Navbar />

        <Box component='div'>

           <h3 style={{textAlign: 'center', color: 'white'}}> Under Construction. Temporarily use <Link style={{color: 'tomato'}} to='/resume'>Resume</Link> </h3>

        </Box>


    </React.Fragment>
  );
}