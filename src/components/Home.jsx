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
                                value_area: 900
                            },
                            value: 65
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
                            push: {
                                quantity: 8
                            },
                            repulse: {
                                distance: 300,
                                duration: 0.7
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 5,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 6,
                                size_min: 0.2,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        fpsLimit: 60
                    }
                }}
            >

           
            </Particles>
            


        </React.Fragment>
    )
}