import React from 'react'
import classes from "./Card.module.css"

import { cardProps } from '../../../Models/types'

const Card: React.FC<cardProps> = (props) => {
 
  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>{props.name}</h4>
      <img className={classes.image}src={props.image} alt={props.name}/>
      <p>{props.desc}</p>

    </div>
  )
}

export default Card