import React, { useState } from 'react';
import axios from 'axios';

export default function PostListingForm(props){
const [toolList, setToolList] = useState({

    active: false || true ,
    listingTitle: "",
    model:"",
    manufacturer: "",
    category: "",
    dateStart: "",
    dateEnd: "",
         
    condition: "",
    totalCost: 0,
    listingImg: ""
});



const submitHandler = event => {
    event.preventDefault();
    console.log(toolList);

    axios.post("https://reqres.in/api/users", toolList)  
        .then(res => {
            console.log(res);
            props.history.push("/");
        })
        .catch(err => console.log(err.response))
}





const changeHandler = event => {
    setToolList({ ...toolList, [event.target.name]: event.target.value })
}



return ( 
    <div>
        <h1>Post Your Tools!</h1>
        <form onSubmit ={submitHandler}>
            <label>
                Active?
                <input
                type = "checkbox" name = "active"  value ={toolList.active}
                />
            </label>
            <label>
                Item:
                <input 
                type = "text"
                name="listingTitle"
                value={toolList.listingTitle}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                Model:
                <input 
                type = "text"
                name="model"
                value={toolList.model}
                onChange={changeHandler}
                />
            </label>
            <label>
                Manufacturer:
                <input 
                type = "text"
                name="manufacturer"
                value={toolList.manufacturer}
                onChange={changeHandler}
                />
            </label>
            <label>
               Category:
                <input 
                type = "text"
                name="category"
                value={toolList.category}
                onChange={changeHandler}
                />
            </label>
            <label>
                Start Date:
                <input 
                type = "date"
                name="dateStart"
                value={toolList.dateStart}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                End Date:
                <input 
                type = "date"
                name="dateEnd"
                value={toolList.dateEnd}
                onChange={changeHandler}
                required
                />
            </label>
            <label>
                Condition:
                <input 
                type = "text"
                name="condition"
                value={toolList.condition}
                onChange={changeHandler}
                />
            </label>
            <label>
                Total Cost:
                <input 
                type = "text"
                name="totalCost"
                value={toolList.totalCost}
                onChange={changeHandler}
                required
                />
            </label>

         

            <div className = "img-container">
                <label>
                    Upload Your Img:
                <input className ="fileInput"
                type ="file"
                onChange={changeHandler}
                value ={toolList.listingImg}
                />
                </label>
            </div>
            <button type ="submit">Upload Your Item</button>
        </form>
    </div>
)


}