import React,{Fragment} from 'react';
import {ShoppingCart} from '@material-ui/icons';
import {AppBar,Toolbar,IconButton,Badge,Typography,Menu,MenuItem} from '@material-ui/core';
import Logo from '../../assets/Main-logo.jpg';
import useStyles from './Style';

const Navbar = () => {
  
const classes = useStyles();


    return(
    <Fragment>
     <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
               <img src={Logo} className={classes.image}  height="40px"/>
               HNMM.E-C
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            </div>
        </Toolbar>
     </AppBar>
    </Fragment>
)


}
export default Navbar;