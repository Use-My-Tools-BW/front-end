import React, { useState } from 'react';


export default function PostListingForm(){
const [toolList, setToolList] = useState({

    active: false ,
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


const changeHandler = event => {
    setToolList({ ...toolList, [event.target.name]: event.target.value })
}



return ( 
    <div>
        <h1>Post Your Tools!</h1>
        <form>
            <label>
                Active?
                <input
                type = "checkbox" name = "active" checked = {toolList.active}
                />
            </label>
            <label>
                Item:
                <input 
                type = "text"
                name="listingTitle"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                Model:
                <input 
                type = "text"
                name="model"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                Manufacturer:
                <input 
                type = "text"
                name="manufacturer"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
               Category:
                <input 
                type = "text"
                name="category"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                Start Date:
                <input 
                type = "date"
                name="dateStart"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                End Date:
                <input 
                type = "date"
                name="dateEnd"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                Condition:
                <input 
                type = "text"
                name="condition"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>
            <label>
                Total Cost:
                <input 
                type = "text"
                name="totalCost"
                value={toolList.listingTitle}
                onChange={changeHandler}
                />
            </label>







        </form>




    </div>
)


}