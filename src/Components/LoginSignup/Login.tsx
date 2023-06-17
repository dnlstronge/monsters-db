import React, { ChangeEvent, useState } from 'react'
import classes from "./Login.module.css"
import { authLogin } from '../Auth/auth'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /* validators */
    const emailValid = email.length > 0 && email.includes("@")
    const regex = /^[0-9]/
    const passwordValid = password.length >= 6 && password.includes(`${regex}`)
    const loginValid = passwordValid && emailValid ? true : false

    
    /* handlers */
    const handleSubmit = () => {
        if(loginValid) {
            const response = authLogin(email, password)
            console.log(response)
        }
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        // add validation
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        // add validation
        setPassword(e.currentTarget.value)
    }
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='username'>Email:  </label>
        <input onChange={handleEmail}id="email" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="password">Password: </label>
        <input onChange={handlePassword } id="password" className={classes.input} type="password" ></input>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login