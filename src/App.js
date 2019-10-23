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
import EditListingForm from './components/forms/EditListingForm';


function App() {
  return (
    <div className="App">

        <Route exact path="/" component={Login}/>
        <Route path="/" component={RegisterForm}/>
        <Route exact path="/" component={PostListingForm} />
        <Route exact path="/account" component={Account} />
      {/* <Home />
      <ToolList />
      
      <Confirmation /> */}

    </div>
  );
}

export default App;
