import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { connect } from "react-redux";


import Login from "./components/Login";
import RegisterForm from './components/RegisterForm';

import Home from "./components/Home";
import ToolList from "./components/ToolList";
import Account from "./components/Account";
import Confirmation from "./components/Confirmation";
import PostListingForm from './components/forms/PostListingForm';

import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App(props) {
  return (
    <div className="App">
      {/* <button onClick={() => console.log(props)}>check store</button> */}
     <NavBar />
      <Route exact path="/" component={Home}/>
      <Route  path="/Login/" component={Login}/>
      <Route path="/Register/" component={RegisterForm}/>
      <Route path ="/Post/" component ={PostListingForm} />
      <Route path ="/Account/" component ={Account} />
      <Route path = "/ToolList/" component = {ToolList} />    
      <Route path = "/Confirmation" component = {Confirmation}/>
     <Footer /> 

    </div>
  );
}

const mapStateToProps = state => {
  return {
      loggedUser: state.loggedUser,
      tools: state.tools,
      loggedPostedTools: state.loggedPostedTools,
      loggedRentedTools: state.loggedRentedTools,
      loggedUserInfo: state.loggedUserInfo,
      isFetching: state.isFetching,
      error: state.error
  };
};

export default connect(
  mapStateToProps,
  { }
)(App)
