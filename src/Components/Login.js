import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./utils/axiosWithAuth"

const Login = props => {
    const [login, setLogin] = useState({email: "", password: ""})

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(login)
        axiosWithAuth()
        .post("/api/auth/login", login)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            //if, else to route proper login (props)
        })
        .catch(err => console.log(err))
        setLogin({email: "", password: ""})
    }

    return (
        <div>
            <h1>Use My Tools</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="email"
                value={login.username}
                onChange={handleChange}
                placeholder="Username"
                />
                <input
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                placeholder="Password"
                />
                <button type="submit">Log In</button>
            </form>
            <div>
                <p>
                    Don't have an account?  <Link to='/register'>Register Now</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;