import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ({

root:{ 
    bottom: '0',
}



})

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Use My Tools
    </Typography>
  );
}



export default function Footer() {
const classes = useStyles();


  return (
    <footer className ={classes.root}>
      
      <Link to ="/" ><Button style={{ textDecoration: 'none' }} >Home</Button></Link>
           <Button  color="inherit">Contact Us</Button>
           <Button  color="inherit">Legal Notices</Button>
           <Button  color="inherit">Terms of use</Button>
           <Button  color="inherit">Privacy Policy</Button>
           <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            Use My Tools 2019
            </Typography>
     </footer>
  );
}