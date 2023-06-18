import React from 'react'
import classes from "./AdminMessage.module.css"

const AdminMessage = () => {
  return (
    <div className={classes.container}>
        <p>You need to log in with an admin account to make changes to the database</p>
    </div>
  )
}

export default AdminMessage