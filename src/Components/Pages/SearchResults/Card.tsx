import React from 'react'
import classes from "./Card.module.css"
import StatBar from '../CreaturesAZ/StatBar'
import { cardProps } from '../../../Models/types'

const Card: React.FC<cardProps> = (props) => {

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>{props.name}</h4>
      <section className={classes.imagedesc} id="image and bars">
        <img className={classes.image} src={props.image} alt={props.name} />
        <div className={classes.stats}>
          <StatBar hp={props.hp} attack={props.attack} defence={props.defence} magic={props.magic} />
          <p>{props.desc}</p>
        </div>
      </section>




    </div>
  )
}

export default Card