import React from 'react'
import classes from "./Error.module.css"
/* config = 
   props for error message */
const ErrorMessage: React.FC<{message: string }> = (props) => {
  return (
    <div className={classes.container}>
        <h6 className={classes.heading}>Error in form submission</h6>
        <p className={classes.para}>{props.message}</p>
      </div>
  )
}

export default ErrorMessage;