import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Login from "./components/Login";
import RegisterForm from './components/RegisterForm';

import Home from "./components/Home";
import ToolList from "./components/ToolList";
import Account from "./components/Account";
import Confirmation from "./components/Confirmation";
import PostListingForm from './components/forms/PostListingForm';


function App() {
  return (
    <div className="App">

        <Route exact path="/" component={Login}/>
        <Route exact path="/" component={RegisterForm}/>
        <PostListingForm />
        
      {/* <Home />
      <ToolList />
      <Account />
      <Confirmation /> */}

    </div>
  );
}

export default App;
