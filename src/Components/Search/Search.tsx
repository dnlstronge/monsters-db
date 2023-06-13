import React from 'react'
import classes from "./Search.module.css"

const Search = () => {
  return (
    <section className={classes.section}>
        <div className={classes.container}>
        <label className={classes.label} htmlFor="search"></label>
        <input placeholder="search..." type="text" className={classes.input}></input>
        <button className={classes.btn}>Go</button>
    </div>
    </section>
  
  )
}

export default Search