import React, { useState, useEffect } from 'react'
import classes from "./Signup.module.css"
import { useSignup } from './Helpers/useSignup'
import { signupvalid } from './Helpers/signupvalid'
import { User } from 'firebase/auth'

type validationObj = {
  invalid: boolean
  userNameError: string
  emailError: string
  passwordError: string
}
type userProps = {
  status: string,
  message: string | unknown
  error: boolean,
  user: null | User
}

const Signup = () => {
   /* state */
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [validation, setValidation] = useState<validationObj | null>()
   const [validUsername, setValidUsername] = useState("")
   const [validEmail, setValidEmail] = useState("")
   const [validPassword, setValidPassword] = useState("")
   const [signedIn, setSignedIn] = useState<userProps>()
   

  /* handlers */
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const isvalid = await signupvalid(username, email, password, confirmPassword,)
    
    if(isvalid.invalid) {
      setValidUsername(isvalid.userNameError)
      setValidEmail(isvalid.emailError)
      setValidPassword(isvalid.passwordError)
    } else {
      console.log("no validation error")
      
    }
    const valid = isvalid.invalid
    const auth = await useSignup(email, password, username, valid )
    setSignedIn(auth)

    //console.log(isvalid)
   
    
  }
useEffect(() => {
  console.log(signedIn)
}, [signedIn])
  /* state handlers */

  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setValidUsername("")
    setUsername(e.currentTarget.value)
  }
  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setValidEmail("")
    setEmail(e.currentTarget.value)
  }
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setValidPassword('')
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
         {/* validity warning */}
        {validUsername.length > 0 &&
        <p className={classes.warning}>{validUsername}</p>}
        <label className={classes.label}htmlFor="__email">Email</label>
        <input  onChange={handleEmail} className={classes.input} type="email" id="__email" />
          {/* validity warning */}
          {validEmail.length > 0 &&
        <p className={classes.warning}>{validEmail}</p>}
        <label className={classes.label} htmlFor="__password">Password</label>
        <input  onChange={handlePassword} className={classes.input} type="password" id="__password"/>
        {/* validity warning */}
        {validPassword.length > 0 &&
        <p className={classes.warning}>{validPassword}</p>}
        <label className={classes.label} htmlFor="__password-b">Confirm password</label>
        <input  onChange={handleConfirmPassword} className={classes.input} type="password" id="__password-b"/>
        <button className={classes.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup