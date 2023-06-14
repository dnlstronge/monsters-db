import React, { useEffect, useState} from 'react'
import classes from "./SearchResults.module.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import Search from '../../Search/Search'

const SearchResults = () => {

  const [searchValid, setSearchIsValid] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  

  return (
   
   <>
   <Search setTerm={setSearchTerm} activeSearch={setSearchIsValid}/>
   </>
    
  )
}

export default SearchResults