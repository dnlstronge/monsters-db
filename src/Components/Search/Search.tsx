import React from 'react'
import classes from "./Search.module.css"
import { useState } from 'react'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")

  /* handler */
  const handleSearch = () => {

  }

  return (
    <section className={classes.section}>
        <div className={classes.container}>
        <label className={classes.label} htmlFor="search"></label>
        <input value={searchTerm} placeholder="search..." type="text" className={classes.input}></input>
        <button onClick={handleSearch} className={classes.btn}>Go</button>
    </div>
    </section>
  
  )
}

export default Search