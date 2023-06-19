import React from 'react'
import classes from "./Signup.module.css"
const Signup = () => {


  /* handlers */
  const handleSubmit = () => {

  }
  return (
    <div className={classes.container}>

      <form onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="__username">Username</label>
        <input type="text" className={classes.input} id="__username"/>
        <label className={classes.label}htmlFor="__email"></label>
        <input type="email" id="__email" />
        <label className={classes.label} htmlFor="__password"></label>
        <input className={classes.input} type="password" id="__password"/>
        <label className={classes.label} htmlFor="__password"></label>
        <input className={classes.input} type="password" id="__password"/>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Signup