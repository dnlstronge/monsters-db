import React, { useState, useEffect } from 'react'
import { useFetchCreaturesAZ } from '../../Hooks/useFetchCreaturesAZ'

/** get results and filter ???  */

const lettersAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const CreaturesAZ = () => {
  const [letterSearch, setLetterSearch] = useState("")
  const [ showResults, setShowResults ] = useState("")

  const handleButtonClick = (term: string) => {
    setLetterSearch(term)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useFetchCreaturesAZ(letterSearch)
    
  }, [letterSearch])
  return (
    <>
    <div>Creatures AZ</div>
    <div>
        {lettersAZ.map((letter) => {
          return (
            <button onClick={() => {handleButtonClick(letter)}} key={letter}>{letter}</button>
          )
        })}
    </div>
      
    <div>Results</div>
    </>
  )
}

export default CreaturesAZ;