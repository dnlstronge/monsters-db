import React, { useState, useEffect } from 'react'

import { creatureCardProps } from '../../../Models/types'
import classes from "./CreatureCard.module.css"


const CreatureCard: React.FC<creatureCardProps> = (props) => {
    const [imageURLstate, setImageURLstate] = useState("")


  return (
    <div className={classes.container}>
        <h5>{props.name}</h5>
        <img src={imageURLstate} alt=" monster"/>
    </div>
  )
}

export default CreatureCard