import React from 'react'
import classes from "./Search.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  setSearchTerm, setShowSearch } from '../../Redux/searchTermSlice'
import { RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { dataSetProp } from '../Pages/SearchResults/SearchResults'

const Search: 
React.FC<{
   setTerm: Dispatch<SetStateAction<string>>,
   activeSearch: Dispatch<SetStateAction<boolean>>
  error: Dispatch<SetStateAction<dataSetProp>>
  }> = (props) => {

  const [search, setSearch] = useState("")
  


  /* fetch */


  /* handler */
  const handleSearch = () => {
    if(search.trim().length > 0) {
    props.activeSearch(true)
    props.setTerm(search)
    setSearch("")
    } else {
      props.error({
        status: "",
        error: true,
        isPending: false,
        message: "Please enter a search term",
        data: null
      })
    }
    
  }
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <section className={classes.section}>
        <div className={classes.container}>
        <label className={classes.label} htmlFor="search"></label>
        <input value={search} onChange={handleSearchTerm} placeholder="search..." type="text" className={classes.input}></input>
        <Link to="/search"> <button onClick={handleSearch} className={classes.btn}>Go</button></Link>
    </div>
    
    </section>
  
  )
}

export default Search