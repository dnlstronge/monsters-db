import React from 'react'
import classes from "./Login.module.css"

const Login = () => {
  return (
    <div className={classes.container}>
        <label htmlFor='username'>Username: </label>
        <input type="text"/>
        <label htmlFor="password">Password: </label>
        <input type="password" ></input>
    </div>
  )
}

export default Login