import React, { ChangeEvent, useState, useEffect } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setLogout, setUID, setUsername } from '../../Redux/authContextSlice'
import { RootState } from '../../Redux/store'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { signOut, getAuth } from 'firebase/auth'
import fetchUserName from './Helpers/fetchUsername'
import Greeting from './Greeting/Greeting'

type userDataState = {
    status: string | number
    error: boolean
    message: string 
    data: null | any
}

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<any>()
    const [invalidLogin, setInvalidLogin] = useState(false)
    
    /* Auth pending */
    const [authPending, setAuthPending] = useState(false)
    const [hasLoggedOut, setHasLoggedOut] = useState(false)

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
    
    /* login helper (test) */

    const sendLogin = (email: string, password: string) => {
        const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        console.log(userCredential.user)
       
            setUserData({
                status: "Success",
                error: false,
                message: "User logged in",
                data: userCredential.user
            })
         


        // return userID;
        
      })
    
        
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
         setUserData({
            status: errorCode,
            error: true,
            message: errorMessage,
            data: null
        })
      });
      return auth
    }

    /* validation */
    const regex = /^[0-9]/
    const emailValid = email.length > 0 && email.includes("@") 
    const passwordValid = password.length >= 6 && password.includes(`${regex}`)
    const validLogin = emailValid && passwordValid

    /* handlers */
    const handleSubmit = async() => {
           // setUser(useAuthLogin(email, password))
            const authResponse = sendLogin(email, password)
            console.log(authResponse) 
            setEmail("")
            setPassword("")
    }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
       //if(e.currentTarget.value.length > 0 && e.currentTarget.value.includes("@"))
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9]/
       //if(e.currentTarget.value.length >= 6 && e.currentTarget.value.includes(`${regex}`))
        setPassword(e.currentTarget.value)
    }

    /* handle logout (reset) */
   
        


    /* update global state via redux */

   

       useEffect(() => {
        if(userData.data !== null) {
            console.log("FIRE REDUCERS!!!")
            dispatch(setIsAuth())
            dispatch(setUID(userData.data.uid))
           
        }
        
        
       }, [ dispatch, userData.data])
        


    /*side effect for username */

  

  return (
    <div className={classes.container}>
        {userData.error && 
            <div className={classes.error}>{userData.message}</div>}
      
        

        {!showFromRedux && 
        <section className={classes.loginSection}>
        <label className={classes.label} htmlFor='_001emailLS'>Email: </label>
        <input value={email} onChange={handleEmail}id="_001emailLS" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="_001passwordLS">Password: </label>
        <input value={password} onChange={handlePassword } id="_001passwordLS" className={classes.input} type="password" ></input>
        <button className={classes.btn} onClick={handleSubmit}>Login</button>
        </section>}
        
       
        {showFromRedux && 
        <>
            <Greeting />
        </>}
    </div>
  )
}

export default Login