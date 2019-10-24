import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth"


export default function EditAccountForm(props){
    const [userCredentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        zip: ""
    });
    console.log(props)
    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);
        props.fetchEditUserInformation(props.loggedUser, userCredentials)
    }
    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setCredentials(props.loggedUserInfo)
    }, []);


    return (
        <div>
            <h1>Edit Your Account</h1>
            <form onSubmit= {submitHandler}>
            <input
                type="text"
                name="first_name"
                value={userCredentials.first_name}
                onChange={changeHandler}
                placeholder="First Name"
                />
                <input
                type="text"
                name="last_name"
                value={userCredentials.last_name}
                onChange={changeHandler}
                placeholder="Last Name"
                />
                <input
                type="email"
                name="email"
                value={userCredentials.email}
                onChange={changeHandler}
                placeholder="Email"
                />
                <input
                type="text"
                name="city"
                value={userCredentials.city}
                onChange={changeHandler}
                placeholder="City"
                />
                <input
                type="text"
                name="state"
                value={userCredentials.state}
                onChange={changeHandler}
                placeholder="State"
                />
                <input
                type="number"
                name="zip"
                value={userCredentials.zip}
                onChange={changeHandler}
                placeholder="Zip"
                />
                <input
                type="password"
                name="password"
                value={userCredentials.password}
                onChange={changeHandler}
                placeholder="Password"
                />
                <button type ="submit">Edit</button>
            </form>
        </div>
    )
}