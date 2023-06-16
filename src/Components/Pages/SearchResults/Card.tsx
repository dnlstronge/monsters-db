import React from 'react'
import classes from "./Card.module.css"

import { cardProps } from '../../../Models/types'

const Card: React.FC<cardProps> = (props) => {
  console.log(`here asshat: ${props.name}`)
  return (
    <div>
      <h4>A</h4>
      <p>B</p>
    </div>
  )
}

export default Card