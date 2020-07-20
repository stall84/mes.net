import React from 'react';
import { 
        Typography,
        Avatar,
        Grid,
        Box
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';       
import mesAvatar4 from '../images/mesAvatar4.jpg';

// Define Styles using Material UI's makeStyles Hook

const useStyles = makeStyles({
    mainContainer: {
        opacity: .7,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    },
    avatar: {
        width: '10rem',
        height: '10rem',
        margin: '0 auto'
    }, 
    title: {
        color: '#ff6347'
    },
    subTitle: {
        color: 'tan'
    },
    
})
export default function Header() {

    const classes = useStyles();

    return (

        <Box className={classes.mainContainer} >

            <Avatar className={classes.avatar} src={mesAvatar4} title='MES in Marin' alt='Michael in Marin' />

                <Typography className={classes.title} variant="h4">
                    <Typed strings={['Michael E Stallings']} typeSpeed={50} showCursor={false} />
                </Typography>

                <Typography className={classes.subTitle} variant="h5">
                    <Typed loop strings={['Web Developer', 'MERN/SERN Stack', 'Astro/Aerophile']} typeSpeed={50} backSpeed={50} />
                </Typography>

        </Box>
    )


}
