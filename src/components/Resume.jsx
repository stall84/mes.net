import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    header: {
        color: 'white'
    },
    link: {
        color: 'tomato',
        margin: '0 auto'
    }
})

export default function Resume() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
                <Box 
                component='header' >
                    <Typography 
                    variant='h4' 
                    align='center'
                    className={classes.header}
                    >
                        Working Experience
                    </Typography>
                </Box>
                <Box 
                
                align='center'
                className={classes.link}
                >
                    <a href='https://docs.google.com/document/d/1LNDPt-ChoBSPim4sfgZSE-nQ0oLP7t7ZpSgBOihvFu0/edit?usp=sharing' >
                    Resume on Google Docs
                    </a>
                </Box>
        </React.Fragment>
    )
}
