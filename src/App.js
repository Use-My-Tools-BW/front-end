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

import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">

     <NavBar />
        {/* <Route exact path="/" component={Login}/>
        <Route exact path="/" component={RegisterForm}/>
      */}
      <Route exact path="/" component={Home}/>
      <Route  path="/Login/" component={Login}/>
      <Route path="/Register/" component={RegisterForm}/>
      <Route path ="/Post/" component ={PostListingForm} />
      <Route path ="/Account/" component ={Account} />
      <Route path = "/ToolList/" component = {ToolList} />
{/*   
      <Home />
      <ToolList />
      <Account />
      <Confirmation />  */}
     
     <Footer /> 

    </div>
  );
}

export default App;
