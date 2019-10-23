import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth"

import { connect } from "react-redux";
import { addTool, fetchUsersTools } from "../../actions/index"


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { classes } from 'istanbul-lib-coverage';

// MaterialUI

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

// end of materialUI




function PostListingForm(props){
const [tool, setTool] = useState({
    user_id: 0,
    title: "",
    description:"",
    make: "",
    model: "",
    img_url: "",
    daily_cost: 0,
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
            {/* <textField 
            label ="Item"
            classNamme={classes.textField}
            value ={tool.title}
            onChange ={changeHandler}
            margin = "normal"
            variant ="outlined"
            /> */}

            <label>
                Title:
                <input 
                type = "text"
                name="title"
                value={tool.title}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                Model:
                <input 
                type = "text"
                name="model"
                value={tool.model}
                onChange={changeHandler}
                />
            </label>
            <label>
                Manufacturer:
                <input 
                type = "text"
                name="make"
                value={tool.make}
                onChange={changeHandler}
                />
            </label>
            <label>
               Category:
                <input 
                type = "text"
                name="category"
                value={tool.category}
                onChange={changeHandler}
                />
            </label>
            <label>
                Condition:
                <input 
                type = "text"
                name="condition"
                value={tool.condition}
                onChange={changeHandler}
                />
            </label>
            <label>
                Total Cost:
                <input 
                type = "number"
                name="daily_cost"
                value={tool.daily_cost}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                Image URL
                <input 
                type = "text"
                name="img_url"
                value={tool.img_url}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                Description
                <input 
                type = "text"
                name="description"
                value={tool.description}
                onChange={changeHandler}
                required
                />
            </label>


            <Link to ="/ToolList/"><button type ="submit">Upload Your Item</button></Link>
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