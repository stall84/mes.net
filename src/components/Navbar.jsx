import React from 'react'
import {
        AppBar,
        Toolbar,
        ListItem,
        IconButton,
        ListItemText,
        ListItemIcon,
        Avatar,
        Divider,
        List,
        Typography,
        Box
        } from '@material-ui/core';
import {
        ArrowBack,
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
    menuIcons: {
        color: '#ff6347'
    },
    arrow: {
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
        margin: '.5rem auto',
        width: '5rem',
        height: '5rem'
    }
});

// Array of menu icons 

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume'
    },
    {
        listIcon: <Apps/>,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Cotact'
    }
]


export default function Navbar() {

    const classes = useStyles();
    return (
        <React.Fragment>

        <Box className={classes.menuSlider} component="div" >
            <Avatar className={classes.avatar} src={Uranus} alt="Uranus" />
                <Divider />
                    <List>
                        {/* Looping over list item icons array we defined above function */}
                        {menuItems.map((listItem, key) => (
                        <ListItem className={classes.menuIcons} button key={key}>
                            <ListItemIcon className={classes.menuIcons} >
                                {listItem.listIcon}
                            </ListItemIcon>
                            <ListItemText>
                                {listItem.listText}
                            </ListItemText>
                        </ListItem>
                        ))}
                    </List>
        </Box>

        <Box component="nav" >

            <AppBar position="static" className={classes.root} >
                <Toolbar>
                    <IconButton>
                        <ArrowBack className={classes.arrow}/>
                    </IconButton>
                    <Typography className={classes.headerText} variant="h5">
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>

        </Box>

        </React.Fragment>
    )
}
