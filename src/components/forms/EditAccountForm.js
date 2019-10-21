import React, { useState } from 'react';
import axios from 'axios';


export default function EditAccountForm(props){
    const [userCredentials, setCredentails] = useState({

        username: "",
        password: "",
        email:""

    });
    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);

        axios.put("", userCredentials, {headers: {"Content-Type": "application/json"}})  
            .then(res => {
                console.log(res);
                props.history.push("/");
            })
            .catch(err => console.log(err.response))
    }
    const changeHandler = event => {
        setCredentails({ ...userCredentials, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <h1>Edit Your Account</h1>
            <form onSubmit= {submitHandler}>
                <label>
                UserName:
                <input 
                type = "text"
                name="username"
                value={userCredentials.username}
                onChange={changeHandler}
            
                />
                </label>
                <label>
               Password:
                <input 
                type = "password"
                name="password"
                value={userCredentials.password}
                onChange={changeHandler}
                />
                </label>
                <label>
               Email:
                <input 
                type = "email"
                name="email"
                value={userCredentials.email}
                onChange={changeHandler}
                />
                </label>
                <button type ="submit">Edit</button>
            </form>
        </div>
    )
}