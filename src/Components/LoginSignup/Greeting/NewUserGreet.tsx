import React from 'react'
import classes from "./NewUserGreet.module.css"

/* config: 

props: username = username

*/
const NewUserGreet: React.FC<{username: string}> = (props) => {
  return (
    <div className={classes.container}>
        <h6 className={classes.heading}>Welcome {props.username}</h6>
        <p className={classes.para}>Thank you for signing up and creating an account, we hope you enjoy 
        the database</p>
    </div>
  )
}

export default NewUserGreet