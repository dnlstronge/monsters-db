import React, { useState, useEffect } from 'react'
import { useFetchCreaturesAZ } from '../../Hooks/useFetchCreaturesAZ'
import classes from "./CreaturesAz.module.css"

/** get results and filter ???  */

const lettersAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const CreaturesAZ = () => {
  const [letterSearch, setLetterSearch] = useState(null)
  const [showResults, setShowResults] = useState([])





  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const fetchData = async (term: string) => {

      console.log(letterSearch)
      const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${term}/.json`)
      const data = await response.json()
      const manageData: any = Object.keys(data)
      setShowResults(manageData)
     

    }
    if (letterSearch !== null) {
      fetchData(letterSearch)
    } else {
      return
    }


  }, [letterSearch])

  /* To test fetch */
  useEffect(() => {
    console.log(showResults)
  }, [showResults])


  /* Handlers */

  const handleClick = (a: any) => {
    setLetterSearch(a)
  }

  return (
    <>
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
      <div className={classes.results}>
        {showResults.length > 0 && showResults.map((result) => {
          return <button className={classes.result} key={result}>{result}</button>
        })}
      </div>

    </>
  )
}

export default CreaturesAZ;