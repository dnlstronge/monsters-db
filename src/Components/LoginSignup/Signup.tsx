import React, { useState } from 'react'
import classes from "./Signup.module.css"
import { useSignup } from './Helpers/useSignup'
import { signupvalid } from './Helpers/signupvalid'

const Signup = () => {
   /* state */
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")


  /* handlers */
  const HandleSubmit = () => {
    const isvalid = signupvalid(username, password, confirmPassword, email)
    const signup = useSignup()
    console.log(isvalid)
  }
  return (
    <div className={classes.container}>

      <form className={classes.form} onSubmit={HandleSubmit}>
        <label className={classes.label} htmlFor="__username">Username</label>
        <input type="text" className={classes.input} id="__username"/>
        <label className={classes.label}htmlFor="__email">Email</label>
        <input className={classes.input} type="email" id="__email" />
        <label className={classes.label} htmlFor="__password">Password</label>
        <input className={classes.input} type="password" id="__password"/>
        <label className={classes.label} htmlFor="__password">Confirm password</label>
        <input className={classes.input} type="password" id="__password"/>
        <button className={classes.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup