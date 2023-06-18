import React, { useState } from 'react'
import classes from "./TopNav.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setLogout } from '../../Redux/authContextSlice'
import { signOut, getAuth } from 'firebase/auth'



const TopNav = () => {
  const [logoutMessage, setLogoutMessage] = useState(false)
  const [page, setPage] = useState({
    login: true,
    signup: true
  })
  const showLoginandSignup = useSelector((state: RootState) => state.authentication.isAuth)
  const dispatch = useDispatch()
  /* handlers */
  const handleLogout = () => {
    setLogoutMessage(true)
    dispatch(setLogout())
    const auth = getAuth();
    signOut(auth).then(() => {
      setTimeout(() => { setLogoutMessage(false) }, 1000)
    }).catch((error) => {
      // An error happened.
    });
  }

  /* handle page nav */
  const handleLoginPage = () => {
    setPage({login: false, signup: true})
  }
  const handleSignupPage = () => {
    setPage({login: true, signup: false})
  }
  return (
    <div className={classes.container}>
      <section className={classes.buttons}>
        {!showLoginandSignup && page.login && 
          <Link to="/login">
            <button onClick={handleLoginPage} className={classes.btn}>Login</button>
          </Link>}
        {!showLoginandSignup && page.signup &&
          <Link to="/signup">
            <button onClick={handleSignupPage} className={classes.btn}>Signup</button>
          </Link>}

        {showLoginandSignup &&
          <Link to="/login">
            <button onClick={handleLogout} className={classes.btn}>Logout</button>
          </Link>
        }
      </section>
      {logoutMessage &&
        <div style={{ color: "white" }}>Successfully logged out</div>}

    </div>
  )
}

export default TopNav