import React from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.container}>
      <title>Monsters DB </title>
      <Home />
    </div>
  );
}

export default App;
