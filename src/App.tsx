import React from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';

function App() {
  return (
    <div className={classes.container}>
      <title>Monsters DB </title>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
