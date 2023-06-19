import React, { ChangeEvent, useState, useEffect } from 'react'
import classes from "./Login.module.css"
import { useAuthLogin } from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth, setLogout, setUID, setUsername } from '../../Redux/authContextSlice'
import { RootState } from '../../Redux/store'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { signOut, getAuth } from 'firebase/auth'
import Greeting from './Greeting/Greeting'
import 

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
    const [invalidLogin, setInvalidLogin] = useState(false)
    
    /* Auth pending */
    const [authPending, setAuthPending] = useState(false)
    const [logoutMessage, setLogoutMessage] = useState(false)

    
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
       
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user
        
      })
    /* handle error */
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return auth
    }
    

    /* handlers */
    const useHandleSubmit = async() => {
           // setUser(useAuthLogin(email, password))
           const authResponse = sendLogin(email, password)
           if(authResponse.currentUser !== null) {
            dispatch(setIsAuth())
            dispatch(setUID(authResponse.currentUser.uid))
            setInvalidLogin(false)
           } else {
            setInvalidLogin(true)
            setTimeout(() => {
                setInvalidLogin(false)
            }, 1200)
           }
          
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
            console.log("Triggers on render")
        }
        
       }, [user])
        


    /*side effect for username */

  

  return (
    <div className={classes.container}>
        {invalidLogin &&
            <div style={{color: "red"}}>{userData.status}Invalid login details entered</div>}
        {authPending && 
            <div className={classes.loading} style={{color: "white"}}>{userData.status} signing in....</div>}
        {logoutMessage && 
            <div className={classes.welcome} style={{color: "white" , fontWeight: "bolder"}}>Successfully logged out</div>
        }
        {userData.data && 
        <div className={classes.welcome} style={{color: "white" , fontWeight: "bolder"}}>Welcome back {welcomeUser}</div>}
        

        {!showFromRedux && 
        <section className={classes.loginSection}>
        <label className={classes.label} htmlFor='_001emailLS'>Email:  </label>
        <input onChange={handleEmail}id="_001emailLS" className={classes.input} type="text"/>
        <label className={classes.label} htmlFor="_001passwordLS">Password: </label>
        <input onChange={handlePassword } id="_001passwordLS" className={classes.input} type="password" ></input>
        <button className={classes.btn} onClick={useHandleSubmit}>Login</button>
        </section>}
        
       
        {showFromRedux && 
        <>
            <Greeting />
        </>}
    </div>
  )
}

export default Login