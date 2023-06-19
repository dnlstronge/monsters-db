import React, { useState } from 'react';
import Home from './Components/Home/Home';
import classes from "./App.module.css"
import Navbar from './Components/Nav/Navbar';
import TopNav from './Components/Nav/TopNav';

/* page imports */
import CreaturesAZ from './Components/Pages/CreaturesAZ/CreaturesAZ';
import Tools from './Components/Tools/Tools';
import Search from './Components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Places from './Components/Pages/PlacesAZ/Places';
import Misc from './Components/Pages/MiscAZ/Misc';
import AddCreature from './Components/Tools/AddCreature';
import SearchResults from './Components/Pages/SearchResults/SearchResults';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';

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
      <TopNav />
      <Navbar creaturesAZ={handleShowCreatures} tools={handleShowTools} />
     
      <div data-testid="panel" className={classes.panel}>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/codex/creaturesaz" element={<CreaturesAZ/>} />
          <Route path="/codex/placesaz" element = {<Places />} />
          <Route path="/codex/miscaz" element = {<Misc />} />
          <Route path="/tools" element ={<Tools/>}/>
          <Route path="tools/addcreature" element={<AddCreature />} />
          <Route path="/search" element={<SearchResults />}/>
        </Routes>
        {/* {showCreaturesAZ && 
        <CreaturesAZ />}
        {showCreatureTool && 
        <Tools />}
        {!showCreaturesAZ && !showCreatureTool &&
        <p>Coming soon...</p>} */}
      </div>
    </div>
  );
}

export default App;
