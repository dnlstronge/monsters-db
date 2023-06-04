import React, { useState } from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';

function App() {
  const [showCreaturesAZ, setShowCreaturesAZ] = useState(false)
  const handleShowCreatures = () => {
    setShowCreaturesAZ(!showCreaturesAZ)
  }
  
  return (
    <div className={classes.container}>
      <title>Monsters DB </title>
      <Navbar creaturesAZ={handleShowCreatures} />
      
      <Home />
    </div>
  );
}

export default App;
