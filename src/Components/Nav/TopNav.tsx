import React from 'react'
import classes from "./TopNav.module.css"
const TopNav = () => {
  return (
    <div className={classes.container}>
        <section className={classes.buttons}>
            <button className={classes.btn}>Login</button>
            <button className={classes.btn}>Signup</button>
        </section>
        
    </div>
  )
}

export default TopNav