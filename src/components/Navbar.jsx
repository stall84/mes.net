import React, { useState } from 'react';
import {
        AppBar,
        Toolbar,
        ListItem,
        IconButton,
        ListItemText,
        ListItemIcon,
        Avatar,
        Drawer,
        Divider,
        List,
        Typography,
        Box
        } from '@material-ui/core';
import {
        FlightTakeoff,
        AssignmentInd,
        Home,
        Apps,
        ContactMail
        } from '@material-ui/icons';
import {
        makeStyles
        } from '@material-ui/styles';
import Uranus from '../images/uranus3.png';


// Define Styles using Material UI's makeStyles hook

const useStyles = makeStyles({
    root: {
        backgroundColor: '#222',
        color: '#5dbcd2'
    },
    menuItems: { 
        color: '#ff6347'
    },
    hamburger: {
        color: '#ff6347'
    },
    headerText: {
        color: '#ffffff'
    },
    menuSlider: {
        width: '25vw',
        height: '100vh',
        backgroundColor: '#444444'
    },
    avatar: {
        margin: '1rem auto',
        width: '5rem',
        height: '5rem'
    }
});

// Array of menu icons 

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home',
        
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume',
        
    },
    {
        listIcon: <Apps/>,
        listText: 'Portfolio',
        
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Cotact',
       
    }
]


export default function Navbar() {

    const classes = useStyles();

    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({
            ...state, 
            [slider]: open
        })
    }

    const SideList = slider => (

        <Box 
            className={classes.menuSlider} 
            component="div" 
            onClick={toggleSlider(slider, false)}
            >
            <Avatar className={classes.avatar} src={Uranus} alt="Uranus" />
                <Divider />
                    <List>
                        {/* Looping over list item icons array we defined above function */}
                        {menuItems.map((listItem, key) => (
                        <ListItem className={classes.menuItems} button key={key} >
                            <ListItemIcon className={classes.menuItems} >
                                {listItem.listIcon}
                            </ListItemIcon>
                            <ListItemText >
                                {listItem.listText}
                            </ListItemText>
                        </ListItem>
                        ))}
                    </List>
        </Box>
    )
    return (
        <React.Fragment>

        

        <Box component="nav" >

            <AppBar position="static" className={classes.root} >
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <FlightTakeoff className={classes.hamburger} />
                    </IconButton>
                    <Typography className={classes.headerText} variant="h5">
                    Personal Site - Portfolio
                    </Typography>
                    <Drawer
                        anchor='right'
                        open={state.right}
                        onClose={toggleSlider('right', false)}
                    >
                        {SideList('right')}
                    </Drawer>
                </Toolbar>
            </AppBar>

        </Box>

        </React.Fragment>
    )
}
