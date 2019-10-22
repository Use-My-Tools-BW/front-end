import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <Link to ="/" ><Button  color="inherit">Home</Button></Link>
            <Link to ="/Post/"> <Button  color="inherit">Post</Button> </Link>
            <Link to = "/Login/"><Button  color="inherit">Login</Button></Link>
            <Link to = "/Register/"> <Button  color="inherit">Register</Button></Link>
            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
}