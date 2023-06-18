import React, { ChangeEvent, useState, useEffect } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setUID, setUsername } from '../../Redux/authContextSlice'
import { RootState } from '../../Redux/store'
import useFetchUserName from './Helpers/fetchUsername'
import fetchUserName from './Helpers/fetchUsername'

type userDataState = {
    status: string | number
    error: boolean
    message: string | unknown
    data: null | any
}

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<any>()
    
    /* Auth pending */
    const [authPending, setAuthPending] = useState(false)

    /*userdata */
    const [userData, setUserData] = useState<userDataState>({
        status: "",
        error: false,
        message: "",
        data: null 
    })
    //const [showUN, setShowUN] = useState(false)
    const [welcomeUser, setWelcomeUser] = useState("")

    /* redux dispatch & selector */
    const dispatch = useDispatch()
    const showFromRedux = useSelector((state: RootState) => state.authentication.isAuth)
    const showFromReduxUID = useSelector((state: RootState) => state.authentication.userId)
    const showUsername = useSelector((state: RootState) => state.authentication.username)

    /* validators */
    const emailValid = email.length > 0 && email.includes("@")
    const regex = /^[0-9]/
    const passwordValid = password.length >= 6 && password.includes(`${regex}`)
    const loginValid = passwordValid && emailValid ? true : false

    
    /* handlers */
    const useHandleSubmit = async() => {
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
        const uid: string = user.lastNotifiedUid
        /* redux updates */
        dispatch(setUID({payload: uid}))
        dispatch(setIsAuth())
        const getusername = async() => {
            const username = await fetchUserName(user.lastNotifiedUid)
            setUserData(username)
           }
           setAuthPending(true)
           setTimeout(() => {
            getusername()
           }, 2000)
        

       
       } else {
        return
       }

       
        
    }, [user, dispatch, showFromRedux])

    /*side effect for username */

    useEffect(()=>{
        dispatch(setUsername({payload: userData.data}))
        setWelcomeUser(userData.data)
        setAuthPending(false)
    }, [dispatch, userData])

  return (
    <div className={classes.container}>
        {userData.message! && userData.error && 
            <div style={{color: "red"}}>{userData.status} Error</div>}
        {authPending && 
            <div style={{color: "white"}}>{userData.status} signing in....</div>}
        <div style={{color: "green" , fontWeight: "bolder"}}>{welcomeUser}</div>
        

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