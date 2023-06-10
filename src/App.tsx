import React, { useState } from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';

/* page imports */
import CreaturesAZ from './Components/Pages/CreaturesAZ/CreaturesAZ';
import Tools from './Components/Tools/Tools';
import Search from './Components/Search/Search';

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
      <Search />
      <title>Monsters DB </title>
      <Navbar creaturesAZ={handleShowCreatures} tools={handleShowTools} />

      <div className={classes.panel}>
        
        {showCreaturesAZ && 
        <CreaturesAZ />}
        {showCreatureTool && 
        <Tools />}
        {!showCreaturesAZ && !showCreatureTool &&
        <p>Coming soon...</p>}
      </div>
      <Home />
    </div>
  );
}

export default App;
