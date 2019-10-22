import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { black } from "ansi-colors";

const useStyles = makeStyles({

root: {
    background: 'black'

},
NavItem: {
    marginLeft:'auto'
}


})






export default function NavBar(){
    const classes = useStyles();

    return (
      <div>
        
        <AppBar className={classes.root} position="static">
          <Toolbar>
           
            <Typography variant="h4">
              Use My Tools
            </Typography>
            <div className ={classes.NavItem}>
            <Button  color="inherit">Home</Button>
            <Button  color="inherit">Post</Button>
            <Button  color="inherit">Login</Button>
            <Button  color="inherit">Register</Button>
            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
}