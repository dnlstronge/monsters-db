import React, { useState } from 'react'
import classes from "./Home.module.css"

const Home = () => {

/* todo - create real-time DB  connect using FB for now - 
  clicking button should issue fetch request and store data in state....

*/ 
const [testMonsterOK, setTestMonsterOK] = useState(false)
const [testMonster, settestMonster] = useState({
  id: "",
  name: "",
  description: "",
  hp: ""
})
  
const fetchMonster = async() => {
  setTestMonsterOK(false)
  const response = await fetch("https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/A/Agromole.json")
  const data = await response.json()
  setTestMonsterOK(true)
  //console.log(data)
  //console.log(response)
  
  settestMonster({
        id: data.id,
        name: data.name,
        description: data.desc,
        hp: data.hp
       })
  console.log(testMonster)
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
        
        <section className={classes.testresponse}>
          <h5 className={classes.testinfo}>Name: {testMonster.name}</h5>
          <h6 className={classes.testinfo}>Description: {testMonster.description}</h6>
          <h6 className={classes.testinfo}>Hit Points: {testMonster.hp}</h6>
        </section>
    </div>
  )
}

export default Home