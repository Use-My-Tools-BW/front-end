import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState ({
        username: "",
        password: "",
        email: ""
    });

    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);

        axios.post("", userCredentials, {headers: {"Content-Type": "application/json"}})  //Ready for backend
            .then(res => {
                console.log(res);
                props.history.push("/");
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
                name="username"
                value={userCredentials.username}
                onChange={changeHandler}
                placeholder="Username"
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
                <input
                type="email"
                name="email"
                value={userCredentials.email}
                onChange={changeHandler}
                placeholder="Email"
                required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
    
}
