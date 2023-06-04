import React, {useState} from 'react'

/** get results and filter ???  */

const lettersAZ = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const CreaturesAZ = () => {
  const [ showResults, setShowResults ] = useState("")
  return (
    <>
    <div>Creatures AZ</div>
    <div>Results</div>
    </>
  )
}

export default CreaturesAZ;