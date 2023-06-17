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
    <div  className={classes.container}>
       <h5>Welcome to Monsters-db</h5>
       <p>This front-end app allows users to view and create fictional entries for different types of 
        creatures and acts a bit like a wiki or codex. It uses firebase to handle the data and backend.
        The search function allows users to search alpabetically or exactly with the results providing 
        simple statistics and information
       </p>
    </div>
  )
}

export default Home