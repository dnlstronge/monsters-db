import React from 'react'
import classes from "./PostFailure.module.css"
import { ImCross } from "react-icons/im"

const PostFailure: React.FC<{text: string}> = (props) => {
  return (
    <div className={classes.container}>
        <p>{props.text}</p>
        <ImCross className={classes.icon} color="white" size="2rem"/>
        </div>
  )
}

export default PostFailure