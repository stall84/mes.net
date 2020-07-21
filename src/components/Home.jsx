import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute'
    }
})

export default function Home() {

    const classes = useStyles();

    return (
        <React.Fragment>
           
            
            
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 80
                        },
                        collisions: {
                            enable: true
                        }
                    },
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 3,
                                opacity: 0.7,
                                size: 40
                            },
                            push: {
                                quantity: 8
                            },
                            repulse: {
                                distance: 300,
                                duration: 0.7
                            }
                        }
                    }
                }}
            >


            </Particles>


        </React.Fragment>
    )
}