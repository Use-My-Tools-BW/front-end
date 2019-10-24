import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"

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
      width: '35%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '4.3%',
        width: '15%'
    },
    input: {
    display: 'none',
    },
    DropdownBoxContainer: {
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: '35%',
        justifyContent: "space-around"
    },
    DropdownBox: {
     width: '200px',
        
    }
  }));

// end of materialUI


export default function EditListingForm(props){
    const classes = useStyles();
    const [tool, setTool] = useState({
        title: "",
        description: "",
        make: "",
        model: "",
        img_url: "",
        daily_cost: 0,
        available: false,
        condition: "",     
        category: ""
    });


    useEffect(() => {
        setTool(props.tool)
    }, [props.tool]);

const submitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
        .put(`https://usemytoolsbw.herokuapp.com/api/tools/${props.tool.id}`, tool)  
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
    
    console.log(tool, "Edit Form submit handler")
}





const changeHandler = event => {
    setTool({ ...tool, [event.target.name]: event.target.value })
}



return ( 
    <div>
        <button onClick={() => console.log(props)}>check props</button>
        <h1>Edit your tool</h1>
        <form className ={classes.container} onSubmit ={submitHandler}>
            
        <TextField
                
                label = "Item"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="title"
                value={tool.title}
                onChange={changeHandler}
                
                />
          
            <TextField
                
                label = "Model"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="model"
                value={tool.model}
                onChange={changeHandler}
                />
           
           <TextField
                
                label = "Manufacturer"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="make"
                value={tool.make}
                onChange={changeHandler}
                />
           
            {/* <label>
               Category:
                <input 
                type = "text"
                name="category"
                value={tool.category}
                onChange={changeHandler}
                />
            </label> */}
            {/* <label>
                Condition:
                <input 
                type = "text"
                name="condition"
                value={tool.condition}
                onChange={changeHandler}
                />
            </label> */}
             <TextField
                
                label = "$ Cost Per Day "
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="daily_cost"
                value={tool.daily_cost}
                onChange={changeHandler}
                
                />
           
           <TextField 
                
               
                label = "Img Url "
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="img_url"
                value={tool.img_url}
                onChange={changeHandler}
                
                />
          
          <TextField 
                id="outlined-dense-multiline"
                variant ="outlined"
                margin="normal"
                label = "Description"
                type = "text"
                name="description"
                value={tool.description}
                onChange={changeHandler}
                
                />
            
            <Button className={classes.button} variant="outlined" color="black"type ="submit">Upload Your Item</Button>
        </form>
    </div>
)


}