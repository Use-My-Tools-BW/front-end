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
NavItems: {
    marginLeft:'auto',
    color: 'white'
},

NavButton: {
    color: 'white',
    textDecoration: 'none'
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
            <div className ={classes.NavItems}>
            <Link to ="/" style={{ textDecoration: 'none' }} ><Button className ={classes.NavButton} >Home</Button></Link>
            <Link to ="/Post/" style={{ textDecoration: 'none' }}> <Button  className ={classes.NavButton}>Post</Button> </Link>
            <Link to = "/Login/"style={{ textDecoration: 'none' }} ><Button className ={classes.NavButton} >Login</Button></Link>
            <Link to = "/Register/" style={{ textDecoration: 'none' }}> <Button className ={classes.NavButton}>Register</Button></Link>
            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
}