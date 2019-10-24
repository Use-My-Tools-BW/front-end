import React, {useEffect, useState} from "react";

import { connect } from "react-redux";

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


function NavBar(props){
    const classes = useStyles();
    const [loginCheck, setLoginCheck] = useState("")

    useEffect(() => {
      if(props.loggedUser > 0){
        setLoginCheck("Account")
      } else{
        setLoginCheck("Login")
      }
    }, [props.loggedUser]);

    return (
      <div>
        
        <AppBar className={classes.root} position="static">
          <Toolbar>
           
            <Typography variant="h4">
              Use My Tools
            </Typography>
            <div className ={classes.NavItems}>
            <Link to ="/" style={{ textDecoration: 'none' }} ><Button className ={classes.NavButton} >Home</Button></Link>
            <Link to ="/ToolList/" style={{ textDecoration: 'none' }}> <Button  className ={classes.NavButton}>Tools</Button> </Link>
            {/* <Link to = "/Login/"style={{ textDecoration: 'none' }} ><Button className ={classes.NavButton} >Login</Button></Link>
            <Link to = "/Register/" style={{ textDecoration: 'none' }}> <Button className ={classes.NavButton}>Register</Button></Link> */}
            <Link to = "/Account/" style={{ textDecoration: 'none' }}> <Button className ={classes.NavButton}>{loginCheck}</Button></Link>

            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
}
const mapStateToProps = state => {
  return {
      loggedUser: state.loggedUser,
      isFetching: state.isFetching,
      error: state.error,
  };
};

export default connect(
  mapStateToProps,
  {  }
)(NavBar)