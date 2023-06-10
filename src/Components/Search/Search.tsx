import React from 'react'
import classes from "./Search.module.css"

const Search = () => {
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor="search"></label>
        <input placeholder="search..." type="text" className={classes.input}></input>
        <button className={classes.btn}>Go</button>
    </div>
  )
}

export default Search