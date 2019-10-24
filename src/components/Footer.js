import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import { Link, NavLink } from "react-router-dom";
const useStyles = makeStyles ({

root:{ 
    bottom: '0',
    background: 'black',
    color: 'white',
    height: '80px'
},

})
export default function Footer() {
const classes = useStyles();


  return (
    <footer className ={classes.root}>
      

           <Button  color="inherit">Contact Us</Button>
           <Button  color="inherit">Legal Notices</Button>
           <Button  color="inherit">Terms of use</Button>
           <Button  color="inherit">Privacy Policy</Button>
            <Typography  align="center">
            {'Copyright © '}
            Use My Tools 2019
            </Typography>
     </footer>
  );
}