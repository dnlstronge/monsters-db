import React from 'react'
import Login from './Login';
import classes from "./LandS.module.css"


// get state from redux ?? 


const LoginSignup= () => {
  return (
    <div className={classes.container}>
      <Login />
        {/* {show login} */}
        {/* {show signup} */}
    </div>
  )
}

export default LoginSignup;