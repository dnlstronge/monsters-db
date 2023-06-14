import React from 'react'
import classes from "./Search.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm, setShowSearch } from '../../Redux/searchTermSlice'
import { RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'

const Search = () => {
  const dispatch: any = useDispatch()
  const [search, setSearch] = useState("")
  const testStateSearch = useSelector((state: RootState) => state.searchTerm.showSearch)

  /* handler */
  const handleSearch = () => {
    dispatch(setShowSearch({type: "SHOW", payload: true}))
    dispatch(setSearchTerm(search))
  }
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <section className={classes.section}>
        <div className={classes.container}>
        <label className={classes.label} htmlFor="search"></label>
        <input value={search} onChange={handleSearchTerm} placeholder="search..." type="text" className={classes.input}></input>
        <button onClick={handleSearch} className={classes.btn}>Go</button>
    </div>
    {testStateSearch && 
    <div style={{color: "white"}}>Test redux state update</div>}
    </section>
  
  )
}

export default Search