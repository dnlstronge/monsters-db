import React, { ChangeEvent, useState, useEffect } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setLogout, setUID, setUsername } from '../../Redux/authContextSlice'
import { RootState } from '../../Redux/store'
import { signOut, getAuth } from 'firebase/auth'
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
    const [logoutMessage, setLogoutMessage] = useState(false)

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
    // const showFromReduxUID = useSelector((state: RootState) => state.authentication.userId)
    // const showUsername = useSelector((state: RootState) => state.authentication.username)

    /* handlers */
    const useHandleSubmit = async() => {
            setUser(useAuthLogin(email, password))
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length > 0 && e.currentTarget.value.includes("@"))
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9]/
        if(e.currentTarget.value.length >= 6 && e.currentTarget.value.includes(`${regex}`))
        setPassword(e.currentTarget.value)
    }

    /* handle logout (reset) */
    const handleLogout = () => {
        setLogoutMessage(true)
        setTimeout(() => setLogoutMessage(false), 2000)
        setUserData({ status: "",
        error: false,
        message: "",
        data: null })
        dispatch(setLogout())
        setEmail("")
        setPassword("")
        setUser(null)
        const auth = getAuth();
         signOut(auth).then(() => {
  // Sign-out successful.
        }).catch((error) => {
  // An error happened.
        });
        }


    /* update global state via redux */

    useEffect(() => {
    
       if(user) {
        setAuthPending(true)
        const uid: string = user.lastNotifiedUid
        /* redux updates */
        dispatch(setUID({payload: uid}))
        dispatch(setIsAuth())
        setAuthPending(false)
        
       } else {
        return
       }

       
        
    }, [user, dispatch])

    /*side effect for username */

  

  return (
    <div className={classes.container}>
        {userData.message! && userData.error && 
            <div style={{color: "red"}}>{userData.status} Error</div>}
        {authPending && 
            <div className={classes.loading} style={{color: "white"}}>{userData.status} signing in....</div>}
        {logoutMessage && 
            <div className={classes.welcome} style={{color: "white" , fontWeight: "bolder"}}>Successfully logged out</div>
        }
        {userData.data && 
        <div className={classes.welcome} style={{color: "white" , fontWeight: "bolder"}}>Welcome back {welcomeUser}</div>}
        

        {!showFromRedux && 
        <>
        <label className={classes.label} htmlFor='_001emailLS'>Email:  </label>
        <input onChange={handleEmail}id="_001emailLS" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="_001passwordLS">Password: </label>
        <input onChange={handlePassword } id="_001passwordLS" className={classes.input} type="password" ></input>
        <button onClick={useHandleSubmit}>Login</button>
        </>}
        
       
        {showFromRedux && 
        <button onClick={handleLogout}>logout</button>}
        {showFromRedux && 
        <p> SHOULD ONLY BE VISIBLE IF LOGGED IN - Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Qui facere aperiam debitis laborum atque? Velit sunt iste ea similique vitae deleniti 
            fuga fugiat exercitationem veritatis.</p>}
        
    </div>
  )
}

export default Login