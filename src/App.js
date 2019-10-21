import React from 'react';
import './App.css';

import Home from "./components/Home";
import ToolList from "./components/ToolList";
import Account from "./components/Account";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="App">
      <Home />
      <ToolList />
      <Account />
      <Confirmation />
    </div>
  );
}

export default App;
