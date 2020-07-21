import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
        Box,
        Grid,
        Card,
        CardActionArea,
        CardActions,
        CardContent,
        CardMedia,
        Button,
        Typography
    } from '@material-ui/core';
import ClearDarkSky from '../images/ClearDarkSky.png';


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: '#233',
        fontSize: '100%'
    },
   

})

export default function Portfolio() {

    const classes = useStyles()

    return (
        <React.Fragment>

            <Navbar />

            <Box component='div' className={classes.mainContainer} >
                <Grid 
                container
                justify='center'
                alignItems='center'
                >
                    <Grid 
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    >
                        <Card>

                            <CardActionArea>

                                <CardMedia
                                component='img'
                                alt='Project1'
                                height='140'
                                image={ClearDarkSky}
                                />

                                <CardContent>

                                    <Typography gutterBottom variant='h5'>
                                        Clear Dark Sky - Starviewing Weather WebApp
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                    My first group project where I provided the idea of an app that queries external api’s for user’s geolocation and then a weather forecast for that night to determine whether or not there will be good star-viewing conditions. 
                                    The idea came out of my history of astronomy/astrophotography and checking weather reports to make sure that the skies would be clear, and mostly free of moon-light (dark). 
                                    Built as a stand-alone front-end client with vanilla HTML and Javascript. 

                                    </Typography>


                                </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            Code
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Live Site
                                        </Button>
                                    </CardActions>

                            </CardActionArea>


                        </Card>

                    </Grid>
                </Grid>


            </Box>

        </React.Fragment>
    )
}
