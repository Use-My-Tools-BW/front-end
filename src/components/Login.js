import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./utils/axiosWithAuth"
import { connect } from "react-redux";
import { fetchLoginUser } from "../actions/index"

// MaterialUI

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
      marginTop: '10%',
      marginBottom: '12.5%'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '15%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '3.2%',
        width: '12%'
    },
    input: {
    display: 'none',
    },
    bottomText: {
        
    },
  }));


/// end of Material UI

const Login = props => {

    const classes = useStyles();
    const [login, setLogin] = useState({email: "", password: ""})

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(login, "login that was passed")
        props.fetchLoginUser(login)
        props.history.push('/account')
        console.log(props, "props after handleSubmit")
    }


    useEffect(() => {
        if(props.loggedUser > 0){
            props.history.push('/account')
        }
    }, [props.loggedUser]);


    return (
        <div>
             
            <form className ={classes.container} onSubmit={handleSubmit}>
            <h1>Use My Tools</h1>
            <TextField
                name="email"
                label = "Email"
                type = "email"
                className={classes.textField}
                value={login.username}
                onChange ={handleChange}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "Enter Your Email Here"
           />

                {/* 
                <input
                type="text"
                name="email"
                value={login.username}
                onChange={handleChange}
                placeholder="Username"
                /> */}

            <TextField
                name="password"
                type ="password"
                label = "Password"
                className={classes.textField}
                value={login.password}
                onChange ={handleChange}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "Enter Your Password Here"
           />


            {/* 
                <input
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                placeholder="Password"

                /> */}
           
           <Button className={classes.button} variant="outlined" color="black" type ="submit">Login</Button>
           <div className ={classes.bottomText}>

                <p>
                    Don't have an account?  <Link to='/register/'>Register Now</Link>
                </p>
            </div>

            </form>
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser,
        isFetching: state.isFetching,
        error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { fetchLoginUser }
)(Login)