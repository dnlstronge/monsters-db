import React, { ChangeEvent, useState } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'


const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<any>()

    /* validators */
    const emailValid = email.length > 0 && email.includes("@")
    const regex = /^[0-9]/
    const passwordValid = password.length >= 6 && password.includes(`${regex}`)
    const loginValid = passwordValid && emailValid ? true : false

    
    /* handlers */
    const useHandleSubmit = async() => {
        console.log("got as far try authlogin")
        // console.log(email)
        // console.log(password)
        // const response = useAuthLogin(email, password)
        setUser(useAuthLogin(email, password))
        
       
        
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
        <label className={classes.label} htmlFor='_001emailLS'>Email:  </label>
        <input onChange={handleEmail}id="_001emailLS" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="_001passwordLS">Password: </label>
        <input onChange={handlePassword } id="_001passwordLS" className={classes.input} type="password" ></input>
        <button onClick={useHandleSubmit}>Login</button>
    </div>
  )
}

export default Login