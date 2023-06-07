import React, { useState } from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';

/* page imports */
import CreaturesAZ from './Components/Pages/CreaturesAZ/CreaturesAZ';
import Tools from './Components/Tools/Tools';

function App() {
  const [showCreaturesAZ, setShowCreaturesAZ] = useState(false)
  const handleShowCreatures = () => {
    setShowCreaturesAZ(true)
    setShowCreatureTool(false)
  }
  const [showCreatureTool, setShowCreatureTool] = useState(false)
  const handleShowTools = () => {
    setShowCreaturesAZ(false)
    setShowCreatureTool(true)
  }
  
  return (
    <div className={classes.container}>
      <title>Monsters DB </title>
      <Navbar showCreat={showCreaturesAZ} showAddCreat={showCreatureTool} creaturesAZ={handleShowCreatures} tools={handleShowTools} />
      <div className={classes.panel}>
        {showCreaturesAZ && 
        <CreaturesAZ />}
        {showCreatureTool && 
        <Tools />}
      </div>
      <Home />
    </div>
  );
}

export default App;
