import React, { useState } from 'react'
import classes from "./Home.module.css"
import useImage from '../Hooks/useImage'
import LoginSignup from '../LoginSignup/LandS'






const Home: React.FC = () => {

/* todo - create real-time DB  connect using FB for now - 
  clicking button should issue fetch request and store data in state....

*/ 


const [testMonsterOK, setTestMonsterOK] = useState(false)
 


  return (
    <div  className={classes.container}>
      <section className={classes.lands}>
        
      </section>
       <h5 className={classes.heading}>Welcome to Monsters-db</h5>
       <p className={classes.para}>This front-end app allows users to view and create fictional entries for different types of 
        creatures and acts a bit like a wiki or codex. It uses firebase to handle the data and backend.
        The search function allows users to search alpabetically or exactly with the results providing 
        simple statistics and information.
       </p>
       <p className={classes.para}>I've built this project to try out different forms of data manipulation and api requests while 
        having a bit of fun with it creatively. It hopefully showcases some of my skills with React as it makes use of
        a lot of what I have learned to date. 
       </p>
    </div>
  )
}

export default Home