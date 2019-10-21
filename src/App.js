import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Login from "./components/Login";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={RegisterForm}/>
    </div>
  );
}

export default App;
