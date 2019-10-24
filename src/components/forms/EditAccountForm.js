import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth"

// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { classes } from 'istanbul-lib-coverage';
import Button from '@material-ui/core/Button';

// MaterialUI


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
       
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '20%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
    margin: theme.spacing(1),
    marginTop: '2%',
    marginBottom: '6%',
    width: '15%'
    },
    input: {
    display: 'none',
    },
    
  }));

// end of materialUI


export default function EditAccountForm(props){

    const classes = useStyles();

    const [userCredentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        zip: ""
    });
    console.log(props)
    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);
        props.fetchEditUserInformation(props.loggedUser, userCredentials)
    }
    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setCredentials(props.loggedUserInfo)
    }, []);


    return (
        <div>
            <h1>Edit Your Account</h1>
            <form className ={classes.container} onSubmit= {submitHandler}>
            <TextField 
                label ="First Name"
                variant ="outlined"
                margin="normal"
                type="text"
                name="first_name"
                className={classes.textField}
                value={userCredentials.first_name}
                onChange={changeHandler}
                placeholder="First Name"
                
                
                />
            <TextField 
                label ="Last Name"
                variant ="outlined"
                margin="normal"
                type="text"
                name="last_name"
                className={classes.textField}
                value={userCredentials.last_name}
                onChange={changeHandler}
                placeholder="Last Name"
                />
            <TextField 
                label ="Email"
                variant ="outlined"
                margin="normal"
                type="email"
                name="email"
                className={classes.textField}
                value={userCredentials.email}
                onChange={changeHandler}
                placeholder="Email"
                />

            <TextField 
                label ="City"
                variant ="outlined"
                margin="normal"
                type="text"
                name="city"
                className={classes.textField}
                value={userCredentials.city}
                onChange={changeHandler}
                placeholder="City"
                />

            <TextField 
                label ="State"
                variant ="outlined"
                margin="normal"
                type="text"
                name="state"
                className={classes.textField}
                value={userCredentials.state}
                onChange={changeHandler}
                placeholder="State"
                />
            
            <TextField 
                label ="Zip"
                variant ="outlined"
                margin="normal"
                type="number"
                name="zip"
                className={classes.textField}
                value={userCredentials.zip}
                onChange={changeHandler}
                placeholder="Zip"
                />
            <TextField 
                label ="Password"
                variant ="outlined"
                margin="normal"
                type="password"
                name="password"
                className={classes.textField}
                value={userCredentials.password}
                onChange={changeHandler}
                placeholder="Password"
                />
                <Button className ={classes.button} variant="outlined" color="black" type ="submit">Edit</Button>
            </form>
        </div>
    )
}