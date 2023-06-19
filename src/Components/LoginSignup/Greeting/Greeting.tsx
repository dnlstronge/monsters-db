import React from 'react'
import classes from "./Greeting.module.css"

const Greeting = () => {
  return (
    <div className={classes.container}>
        <p className={classes.welcome}> Welcome to monsters database - This message should only be visible if you are logged in! so congrats on that.</p>
        <h5 className={classes.heading}>Navigation</h5>
        <p className={classes.para}>To get started you can use search to look for different entries and view information related to specific cases
        results can be expanded to view attributes, image and description.
        </p>
        <h5 className={classes.heading}>Tools</h5>
        <p className={classes.para}>If you have obtained admin privilages you can also use tools to make additions to the database.</p>
    </div>
  )
}

export default Greeting;