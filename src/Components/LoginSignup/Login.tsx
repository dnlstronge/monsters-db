import React from 'react'
import classes from "./Login.module.css"

const Login = () => {
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='username'>Username: </label>
        <input id="username" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="password">Password: </label>
        <input id="password" className={classes.input} type="password" ></input>
    </div>
  )
}

export default Login