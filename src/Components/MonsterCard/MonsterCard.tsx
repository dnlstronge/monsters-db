import React, { useState } from 'react'
import classes from "./MonsterCard.module.css"

const MonsterCard = () => {

  const [ image, setImage ] = useState("")
  return (
    <div className={classes.container}>
        <p>{props.name}</p>

    </div>
  )
}

export default MonsterCard