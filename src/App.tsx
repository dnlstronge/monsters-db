import React, { useState } from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';

/* page imports */
import CreaturesAZ from './Components/Pages/CreaturesAZ/CreaturesAZ';

function App() {
  const [showCreaturesAZ, setShowCreaturesAZ] = useState(false)
  const handleShowCreatures = () => {
    setShowCreaturesAZ(!showCreaturesAZ)
  }
  const [showTools, setShowTools] = useState(false)
  const handleShowTools = () => {
    setShowTools(!showTools)
  }
  
  return (
    <div className={classes.container}>
      <title>Monsters DB </title>
      <Navbar creaturesAZ={handleShowCreatures} tools={handleShowTools} />
      <div className={classes.panel}>
        {showCreaturesAZ && 
        <CreaturesAZ />}
      </div>
      <Home />
    </div>
  );
}

export default App;
