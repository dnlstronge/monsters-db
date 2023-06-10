import React from 'react'
import { TiTick } from "react-icons/ti"
import classes from "./PostSuccess.module.css"

const PostSuccess: React.FC<{text: string}> = (props) => {
  return (
    <div className={classes.container}>
        <p>{props.text || "Data upload successful"}</p>
        <TiTick className={classes.icon} size="3rem" color='white' />
    </div>
  )
}

export default PostSuccess