import React, { useState } from 'react';


export default function EditAccountForm(){
    const [userCredentials, setCredentails] = useState({

        username: "",
        password: "",
        email:""

    });

    const changeHandler = event => {
        setCredentails({ ...userCredentials, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <h1>Edit Your Account</h1>
            <form>
                <label>
                UserName:
                <input 
                type = "text"
                Name="username"
                value={userCredentials.username}
                onChange={changeHandler}
                />
                </label>
                <label>
               Password:
                <input 
                type = "password"
                Name="password"
                value={userCredentials.username}
                onChange={changeHandler}
                />
                </label>
                <label>
               Email:
                <input 
                type = "email"
                Name="email"
                value={userCredentials.username}
                onChange={changeHandler}
                />
                </label>
                




            </form>


        </div>
    )
}