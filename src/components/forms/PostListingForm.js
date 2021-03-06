import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from "react-redux";
import { fetchCreateLendPost } from "../../actions/index"

// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { classes } from 'istanbul-lib-coverage';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
      width: '80%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '4.3%',
        width: '50%'
    },
    input: {
    display: 'none',
    },
    DropdownBoxContainer: {
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-around"
    },
    DropdownBox: {
        minWidth: 150
        
    }
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
    props.fetchCreateLendPost(tool)
}





const changeHandler = event => {
    setTool({ ...tool, [event.target.name]: event.target.value })
}



return ( 
    <div>  
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
                rows ={2}
                rowsMax= {6}
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

            <div className = {classes.DropdownBoxContainer}>
            <FormControl  className={classes.formControl}>
            
            <InputLabel>Category</InputLabel>
            <Select 
               name="category"
               label = "Category"
               className = {classes.DropdownBox}
               value={tool.category}
               onChange ={changeHandler}
               required
               margin="normal"
               placeholder = "Enter The Category Here"
           >     
               <MenuItem value={"POWER TOOLS"}>Power Tools</MenuItem>
               <MenuItem value={"HAND TOOLS"}>Hand Tools</MenuItem>
               <MenuItem value={"AUTOMOTIVE"}>Automotive</MenuItem>
               <MenuItem value={"WELDING & SOLDERING"}>Welding and Soldering</MenuItem>
               <MenuItem value={"LADDERS & SCAFFOLDING"}>Ladders and Scaffolding</MenuItem>
            </Select>
            </FormControl>
   
            <FormControl   className={classes.formControl}>
            <InputLabel className ="DropdownLabel">Conditon</InputLabel>
            <Select 
               
               name="condition"
               label = "Conditon"
               className = {classes.DropdownBox}
               value={tool.condition}
               onChange ={changeHandler}
               required
               margin="normal"
               
               placeholder = "Enter The Conditon Here"      
           >
               <MenuItem value={"Poor"}>Poor</MenuItem>
               <MenuItem value={"fair"}>Fair</MenuItem>
               <MenuItem value={"good"}>Good</MenuItem>
               <MenuItem value={"excellent"}>Excellent</MenuItem>
                    
           </Select>
       </FormControl>
       </div>


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
    { fetchCreateLendPost }
)(PostListingForm)