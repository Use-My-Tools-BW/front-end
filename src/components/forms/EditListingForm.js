import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"


export default function EditListingForm(props){
    const [tool, setTool] = useState({
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
// Try doing a useEffect hook that has axios .get(api/tools/props.tool.id) and sets the results to state and uses that to populate input fields
// First, get PUT requests to work

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
        <form onSubmit ={submitHandler}>
            <label>
                Title:
                <input 
                type = "text"
                name="title"
                value={tool.title}
                onChange={changeHandler}
                
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
                
                />
            </label>
            <label>
                Image URL
                <input 
                type = "text"
                name="img_url"
                value={tool.img_url}
                onChange={changeHandler}
                
                />
            </label>
            <label>
                Description
                <input 
                type = "text"
                name="description"
                value={tool.description}
                onChange={changeHandler}
                
                />
            </label>
            <button type ="submit">Upload Your Item</button>
        </form>
    </div>
)


}