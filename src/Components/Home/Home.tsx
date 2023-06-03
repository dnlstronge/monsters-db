import React, { useState } from 'react'
import classes from "./Home.module.css"

const Home = () => {

/* todo - create real-time DB  connect using FB for now - 
  clicking button should issue fetch request and store data in state....

*/ 

const [testMonster, settestMonster] = useState({

})
  
const fetchMonster = async() => {
  const response = await fetch("https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/A/Agromole.json")
  const data = await response.json()
  console.log(data)
  console.log(response)
  

}

  return (
    <div  className={classes.container}>
        <h3 className={classes.title}>Welcome to monsters database</h3>
        <p className={classes.intro}>
            This app allows users to search for fictional monsters. Selecting a monster allows the viewer
            to view it's atrributes and other information about the creature....</p>
        <section className={classes.testsection}>
          <button onClick={fetchMonster} className={classes.btn}>Get Monster... </button>
        </section>
    </div>
  )
}

export default Home