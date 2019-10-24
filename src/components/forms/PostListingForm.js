import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from "react-redux";
import { addTool, fetchUsersTools } from "../../actions/index"

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
      alignItems: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '35%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '3.2%',
        width: '15%'
    },
    input: {
    display: 'none',
    },
    
  }));



// end of materialUI




function PostListingForm(props){
    const classes = useStyles();
const [tool, setTool] = useState({
    user_id: 0,
    title: "",
    description:"",
    make: "",
    model: "",
    img_url: "",
    daily_cost: 5,
    available: true,
    condition: "",     
    category: ""
});

useEffect(() => {
    setTool({...tool, user_id: props.loggedUser})
  }, [props.loggedUser]);

const submitHandler = event => {
    event.preventDefault();
    console.log(tool)
    axiosWithAuth()
        .post("https://usemytoolsbw.herokuapp.com/api/tools", tool)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));
    // props.addTool(tool)
}





const changeHandler = event => {
    setTool({ ...tool, [event.target.name]: event.target.value })
}



return ( 
    <div>  
        <button onClick={() => console.log(props)}>View Props</button>
        <h1>Post Your Tools!</h1>
        <form className ={classes.container} onSubmit ={submitHandler}>
            <TextField
                name="title"
                label = "Item"
                className={classes.textField}
                value={tool.title}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "Enter Item Here"
           />
    
            <TextField 
            
                name="model"
                label = "Model"
                className={classes.textField}
                value={tool.model}
                onChange ={changeHandler}
                margin="normal"
                variant ="outlined"
                placeholder = "Enter Model Here"
           />
        
            <TextField 
            
                name="make"
                label = "Manufacturer"
                className={classes.textField}
                value={tool.make}
                onChange ={changeHandler}
                margin="normal"
                variant ="outlined"
                placeholder = "Enter The Manufacturer Here"
           />
       
        
            <TextField 
                
                name="category"
                label = "Category"
                className={classes.textField}
                value={tool.category}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "Enter The Category Here"
            
             />
            <TextField 
                
                name="condition"
                label = "Conditon"
                className={classes.textField}
                value={tool.condition}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "Enter The Conditon Here"      
            />
   


            <TextField 
                
                name="daily_cost"
                label = "$ Cost Per Day "
                type = "number"
                className={classes.textField}
                value=  {tool.daily_cost}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
            />

            <TextField 
                
                name="img_url"
                label = "Img Url "
                className={classes.textField}
                value=  {tool.img_url}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
                placeholder = "https://www.google.com/"
            />

           
            <TextField 
                id="outlined-dense-multiline"
                name="description"
                label = "Description"
                className={clsx(classes.textField, classes.dense)}
                value=  {tool.description}
                onChange ={changeHandler}
                required
                margin="normal"
                variant ="outlined"
                multiline
                rowsMax="4"

                placeholder = "Enter Your Description Here"
            />
            <Button className={classes.button} variant="outlined" color="black" type ="submit">Post Your Item</Button>
        </form>
    </div>
)
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        loggedUser: state.loggedUser,
        loggedPostedTools: state.loggedPostedTools
    };
  };

export default connect(
    mapStateToProps,
    { addTool, fetchUsersTools }
)(PostListingForm)