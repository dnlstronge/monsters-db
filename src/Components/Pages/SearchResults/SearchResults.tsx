import React, { useEffect, useState} from 'react'
import classes from "./SearchResults.module.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import Search from '../../Search/Search'

const SearchResults = () => {

  const [searchValid, setSearchIsValid] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [dataSet, setDataSet] = useState<any>()
  
  /*fetch helper */
  

  useEffect(() => {
    /* fetch  */
    const fetchData = async() => {
      const char = searchTerm.charAt(0).toUpperCase()
      const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/monsters/${char}/.json`)
      const data = await response.json()
      setDataSet(data)
      
    }

    if(searchTerm.length > 0 && searchValid) {
      fetchData()
    } else {
      console.log("Add error handlinng etc")
    }
    setSearchIsValid(false)
    console.log(dataSet)
  },  [dataSet, searchTerm, searchValid])
  return (
   
   <>
   <Search setTerm={setSearchTerm} activeSearch={setSearchIsValid}/>
   </>
    
  )
}

export default SearchResults