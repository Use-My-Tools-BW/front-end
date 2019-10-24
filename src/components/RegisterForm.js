import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchAddNewUser } from "../actions/index"

function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        zip: "",
    });

        useEffect(() => {
        if(props.loggedUser > 0){
            props.history.push('/account')
        }
    }, []);

    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);
        props.fetchAddNewUser(userCredentials)
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
                placeholder="State"
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

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        loggedUser: state.loggedUser
    };
  };

export default connect(
    mapStateToProps,
    { fetchAddNewUser }
)(RegisterForm)