import React, { ChangeEvent, useState, useEffect } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setUID } from '../../Redux/authContextSlice'
import { RootState } from '../../Redux/store'


const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<any>()

    /* redux dispatch & selector */
    const dispatch = useDispatch()
    const showFromRedux = useSelector((state: RootState) => state.authentication.isAuth)
    const showFromReduxUID = useSelector((state: RootState) => state.authentication.userId)

    /* validators */
    const emailValid = email.length > 0 && email.includes("@")
    const regex = /^[0-9]/
    const passwordValid = password.length >= 6 && password.includes(`${regex}`)
    const loginValid = passwordValid && emailValid ? true : false

    
    /* handlers */
    const useHandleSubmit = async() => {
        console.log("got as far try authlogin")
        console.log(showFromRedux)
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

    /* update global state via redux */

    useEffect(() => {
    
       if(user) {
        const uid = user.lastNotifiedUid
            dispatch(setUID({payload: uid}))
            dispatch(setIsAuth())
       const checkAdmin = async() => {}
       // gets username
       const fethUserName = async() => {
       const response = await fetch(`https://monsterdb-30be5-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`)
       if(response!.ok) {
        const username = await response.json()
        return username
       } else {
        return
       }
       
       }   
       } else {
        return
       }

       
        
    }, [user, dispatch, showFromRedux])
  return (
    <div className={classes.container}>
        {showFromRedux && 
        <div style={{color: "green" , fontWeight: "bolder"}}>Welcome!! </div>}
        {showFromReduxUID && 
        <div style={{color: "green" , fontWeight: "bolder"}}>UID present</div>}
        {!showFromRedux && 
        <>
        <label className={classes.label} htmlFor='_001emailLS'>Email:  </label>
        <input onChange={handleEmail}id="_001emailLS" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="_001passwordLS">Password: </label>
        <input onChange={handlePassword } id="_001passwordLS" className={classes.input} type="password" ></input>
        <button onClick={useHandleSubmit}>Login</button>
        </>}
        
       
        {showFromRedux && 
        <button>logout</button>}
        
    </div>
  )
}

export default Login