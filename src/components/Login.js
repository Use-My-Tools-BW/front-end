import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "./utils/axiosWithAuth"

import { connect } from "react-redux";
import { fetchLoginUser } from "../actions/index"

const Login = props => {
    const [login, setLogin] = useState({email: "", password: ""})

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(login)
        props.fetchLoginUser(login)
        console.log(props, "props after handleSubmit")
        // props.history.push('/account')
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

const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser,
        isFetching: state.isFetching,
        error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { fetchLoginUser }
)(Login)