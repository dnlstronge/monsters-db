import React from 'react'
import classes from "./TopNav.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setLogout } from '../../Redux/authContextSlice'
import { signOut, getAuth } from 'firebase/auth'



const TopNav = () => {

  const showLoginandSignup = useSelector((state: RootState) => state.authentication.isAuth)
  const dispatch = useDispatch()
  /* handlers */
  const handleLogout = () => {
    dispatch(setLogout())
        const auth = getAuth();
         signOut(auth).then(() => {
  // Sign-out successful.
        }).catch((error) => {
  // An error happened.
        });
  }
  return (
    <div className={classes.container}>
        <section className={classes.buttons}>
            {!showLoginandSignup && 
            <Link to="/login">
                <button className={classes.btn}>Login</button>
            </Link>}
            {!showLoginandSignup && 
            <Link to="/signup">
                 <button className={classes.btn}>Signup</button> 
            </Link>}
            {showLoginandSignup && 
              <button onClick={handleLogout} className={classes.btn}>Logout</button>}
            
           
        </section>
        
    </div>
  )
}

export default TopNav