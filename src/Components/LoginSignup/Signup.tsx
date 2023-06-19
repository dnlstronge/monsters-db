import React, { useState } from 'react'
import classes from "./Signup.module.css"
import { useSignup } from './Helpers/useSignup'
import { signupvalid } from './Helpers/signupvalid'

type validationObj = {
  invalid: boolean
  userNameError: string
  emailError: string
  passwordError: string
}

const Signup = () => {
   /* state */
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [validation, setValidation] = useState<validationObj | null>()

  /* handlers */
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const isvalid = await signupvalid(username, password, confirmPassword, email)
    console.log(isvalid)
    // if(isvalid.invalid) {
    //   setValidation(isvalid)
    // } else {
    //   console.log("no validation error")
    // }
    const signup = useSignup()
    //console.log(isvalid)
  }

  /* state handlers */

  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }
  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const handleConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value)
  }
  return (
    <div className={classes.container}>

      <form className={classes.form} onSubmit={HandleSubmit}>
        <label className={classes.label} htmlFor="__username">Username</label>
        <input onChange={handleUsername}type="text" className={classes.input} id="__username"/>
        {validation?.userNameError &&
        <p className="warning"></p>}
        <label className={classes.label}htmlFor="__email">Email</label>
        <input  onChange={handleEmail} className={classes.input} type="email" id="__email" />
        <label className={classes.label} htmlFor="__password">Password</label>
        <input  onChange={handlePassword} className={classes.input} type="password" id="__password"/>
        <label className={classes.label} htmlFor="__password-b">Confirm password</label>
        <input  onChange={handleConfirmPassword} className={classes.input} type="password" id="__password-b"/>
        <button className={classes.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup