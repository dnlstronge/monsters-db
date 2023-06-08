import React, { useState, useEffect } from 'react'
import { useFetchCreaturesAZ } from '../../Hooks/useFetchCreaturesAZ'
import classes from "./CreaturesAz.module.css"
import CreatureCard from './CreatureCard'
import useImage from '../../Hooks/useImage'
import { SetStateAction } from 'react'

import { projectStorage } from "../../../firebase/config"
import { ref, getDownloadURL } from "firebase/storage"

/** get results and filter ???  */

const lettersAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const CreaturesAZ = () => {
  const [letterSearch, setLetterSearch] = useState("")
  const [showResults, setShowResults] = useState([])
  const [dataByLetter, setDataByLetter] = useState(null)
  const [urlForProps, setUrlForProps] = useState("")

  /* Loading and Error state */
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({
    showError: false,
    message: ""
  })

  // when expanded: 
  const [showInDetail, setShowInDetail] = useState({
    attack: "",
    defence: "",
    desc: "",
    hp: "",
    id: "",
    imageURL: "",
    name: "",
    magic: ""
  })





  useEffect(() => {

    const fetchData = async (term: string) => {

      const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${term}/.json`)
      const data = await response.json()
      const nameData: any = Object.keys(data)
      setIsLoading(false)
      setIsError({ showError: false, message: "" })
      setShowResults(nameData)
      setDataByLetter(data)

    }
    if (letterSearch !== "") {
      try {
        fetchData(letterSearch)

      } catch (error) {
        setIsLoading(false)
        setIsError({
          showError: true,
          message: "No data found..."
        })
      }

    } else {
      return
    }


  }, [letterSearch])

  // /* To test fetch */
  // useEffect(() => {
  //   console.log(showResults)
  // }, [showResults])


  /* Handlers */

  const handleClick = (a: string) => {

    setLetterSearch(a)
    setIsLoading(true)
  }
  const handleShowInDetail = async (a: string) => {
    if (dataByLetter !== null) {
      setShowInDetail(dataByLetter[a])
    }

  }


  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h5 className={classes.heading}>Creatures A - Z</h5>
      </div>
      <div className={classes.letters}>

        {lettersAZ.map((letter) => {

          return (
            <button onClick={() => { handleClick(letter) }} key={letter}>{letter}</button>
          )
        })}
      </div>
      <h5 className={classes.lettertitle}>{letterSearch}</h5>
      {/* shows expanded creature */}
      {showInDetail.name !== "" && !isError.showError &&
        <CreatureCard
          attack={showInDetail.attack}
          defence={showInDetail.defence}
          desc={showInDetail.desc}
          hp={showInDetail.hp}
          id={showInDetail.id}
          imageURL={showInDetail.imageURL}
          name={showInDetail.name}
          magic={showInDetail.magic}
        />}


      <div className={classes.results}>
        {showResults.length > 0 && showResults.map((result) => {
          return (

            <button
              onClick={() => { handleShowInDetail(result) }}
              className={classes.result}
              key={result}>{result}
            </button>

          )
        })}
      </div>


    </div>
  )
}

export default CreaturesAZ;