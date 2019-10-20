import React from 'react';
import './App.css';

import Home from "./components/Home";
import ToolList from "./components/ToolList";
import Account from "./components/Account"

function App() {
  return (
    <div className="App">
      <Home />
      <ToolList />
      <Account />
    </div>
  );
}

export default App;
