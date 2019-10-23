import React, { useState } from 'react';
import axios from 'axios';


export default function EditListingForm(props){
    const [tool, setTool] = useState({
        user_id: 0,
        title: props.tool.title,
        description:props.tool.description,
        make: props.tool.make,
        model: props.tool.model,
        img_url: props.tool.img_url,
        daily_cost: props.tool.daily_cost,
        available: props.tool.available,
        condition: props.tool.daily_cost,     
        category: props.tool.category
    });



const submitHandler = event => {
    event.preventDefault();

    axios.put("https://reqres.in/api/users" )  
        .then(res => {
            console.log(res);
            props.history.push("/");
        })
        .catch(err => console.log(err.response))
}





const changeHandler = event => {
    setTool({ ...tool, [event.target.name]: event.target.value })
}



return ( 
    <div>
        <button onClick={() => console.log(props)}>check props</button>
        <h1>Edit your tool</h1>
        <form onSubmit ={submitHandler}>
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
                type = "text"
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
            <button type ="submit">Upload Your Item</button>
        </form>
    </div>
)


}