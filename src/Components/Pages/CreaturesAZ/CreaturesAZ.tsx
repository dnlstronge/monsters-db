import React, { useState, useEffect } from 'react'
import { useFetchCreaturesAZ } from '../../Hooks/useFetchCreaturesAZ'

/** get results and filter ???  */

const lettersAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const CreaturesAZ = () => {
  const [letterSearch, setLetterSearch] = useState("")
  const [ showResults, setShowResults ] = useState([])


 

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const fetchData = async() => {
      console.log(letterSearch)
      const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${letterSearch}.json`)
      const data = await response.json()
      console.log(data)
      // //setShowResults(array)
      // console.log("fetch successfull")
      // console.log(Object.keys(data.A))
      
    }
    fetchData()

  }, [letterSearch])
  const handleClick = (a: any) => {
    setLetterSearch(a)
  }
 
  return (
    <>
    <div>Creatures AZ</div>
    <div>
        {lettersAZ.map((letter) => {
         
          return (
            
            <div onClick={() => {handleClick(letter)}} key={letter}>{letter}</div>
          )
        })}
    </div>
      
    {/* <div>{showResults.map((result) => {
      return (
        <div></div>
      )
    })}</div> */}
    </>
  )
}

export default CreaturesAZ;