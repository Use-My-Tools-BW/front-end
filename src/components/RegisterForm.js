import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        zip: "",
    });

    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);

        axios.post("https://usemytoolsbw.herokuapp.com/api/auth/register", userCredentials, {headers: {"Content-Type": "application/json"}})  //Ready for backend
            .then(res => {
                console.log(res);
                // props.history.push("/");
            })
            .catch(err => console.log(err.response))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <input
                type="text"
                name="first_name"
                value={userCredentials.first_name}
                onChange={changeHandler}
                placeholder="First Name"
                required
                />
                <input
                type="text"
                name="last_name"
                value={userCredentials.last_name}
                onChange={changeHandler}
                placeholder="Last Name"
                required
                />
                <input
                type="email"
                name="email"
                value={userCredentials.email}
                onChange={changeHandler}
                placeholder="Email"
                required
                />
                <input
                type="text"
                name="city"
                value={userCredentials.city}
                onChange={changeHandler}
                placeholder="City"
                required
                />
                <input
                type="text"
                name="state"
                value={userCredentials.state}
                onChange={changeHandler}
                placeholder="City"
                required
                />
                <input
                type="number"
                name="zip"
                value={userCredentials.zip}
                onChange={changeHandler}
                placeholder="Zip"
                required
                />
                <input
                type="password"
                name="password"
                value={userCredentials.password}
                onChange={changeHandler}
                placeholder="Password"
                required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    )
    
}
