import React, { useState } from 'react'
import classes from "./Home.module.css"
import { projectStorage } from '../../firebase/config'
import { ref, getDownloadURL } from "firebase/storage"
import MonsterCard from '../MonsterCard/MonsterCard'
import useImage from '../Hooks/useImage'






const Home = () => {

/* todo - create real-time DB  connect using FB for now - 
  clicking button should issue fetch request and store data in state....

*/ 


const [testMonsterOK, setTestMonsterOK] = useState(false)
const [testMonster, settestMonster] = useState({
  id: "",
  name: "",
  description: "",
  hp: "",
  imageURL: ""
})
  
const fetchMonster = async() => {
  setTestMonsterOK(false)
  const response = await fetch("https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/A/Agromole.json")
  const data = await response.json()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageURL = await useImage(data.imageURL)
  setTestMonsterOK(true)
  //console.log(data)
  //console.log(response)
  console.log(imageURL)
  settestMonster({
        id: data.id,
        name: data.name,
        description: data.desc,
        hp: data.hp,
        imageURL: imageURL
       })
  console.log(testMonster)
 
  
 
}

  return (
    <div  className={classes.container}> Coming soon
        {/* <h3 className={classes.title}>Welcome to monsters database</h3>
        <p className={classes.intro}>
            This app allows users to search for fictional monsters. Selecting a monster allows the viewer
            to view it's atrributes and other information about the creature....</p>
        <section className={classes.testsection}>
          <button onClick={fetchMonster} className={classes.btn}>Get Monster... </button>
        </section>
        
       <MonsterCard name={testMonster.name} imageURL={testMonster.imageURL} description={testMonster.description}/> */}
    </div>
  )
}

export default Home